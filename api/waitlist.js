const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

const DITTOFEED_API_URL = process.env.DITTOFEED_API_URL ?? "http://localhost:3006";
// DITTOFEED_WRITE_KEY format: "secretId:secretValue" (base64-encoded for Basic auth)
const DITTOFEED_WRITE_KEY = process.env.DITTOFEED_WRITE_KEY ?? "";

function getInsightCollectorUrl() {
  if (process.env.INSIGHT_TO_FIX_COLLECTOR_URL) return process.env.INSIGHT_TO_FIX_COLLECTOR_URL;
  return process.env.NODE_ENV === "production" ? "" : "http://localhost:3000/api/insight-to-fix/event";
}

async function trackInsightEvent(eventType, payload = {}) {
  const collectorUrl = getInsightCollectorUrl();
  if (!collectorUrl) return;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 1200);
    await fetch(collectorUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        project: "allsorted",
        event_type: eventType,
        route: "/waitlist",
        source: "all-sorted-web",
        email: payload.email,
        session_id: payload.sessionId,
        properties: {
          reason: payload.reason,
          duplicate: payload.duplicate === true,
          supabase_status: payload.supabaseStatus,
          acquisition_route: payload.acquisitionRoute,
          acquisition_query: payload.acquisitionQuery,
          referrer: payload.referrer,
        },
      }),
      signal: controller.signal,
    });
    clearTimeout(timeout);
  } catch (err) {
    console.warn("[insight-to-fix] waitlist event skipped:", err?.message ?? err);
  }
}

async function trackWaitlistJoin(email, firstName) {
  if (!DITTOFEED_WRITE_KEY) return;
  try {
    const auth = "Basic " + Buffer.from(DITTOFEED_WRITE_KEY).toString("base64");
    const userId = "waitlist-" + email.replace(/[@.]/g, "-");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2000);

    // Identify then track
    await fetch(`${DITTOFEED_API_URL}/api/public/apps/identify`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: auth },
      body: JSON.stringify({
        messageId: `ws-id-${Date.now()}-${email.slice(0,6)}`,
        userId,
        traits: { email, firstName },
      }),
      signal: controller.signal,
    });
    await fetch(`${DITTOFEED_API_URL}/api/public/apps/track`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: auth },
      body: JSON.stringify({
        messageId: `ws-tr-${Date.now()}-${email.slice(0,6)}`,
        userId,
        event: "all_sorted_waitlist_join",
        properties: { email, firstName, source: "all-sorted-web" },
        timestamp: new Date().toISOString(),
      }),
      signal: controller.signal,
    });
    clearTimeout(timeout);
  } catch (err) {
    console.warn("[dittofeed] waitlist trackEvent failed:", err?.message ?? err);
  }
}

const RESEND_API_KEY = process.env.RESEND_API_KEY ?? "";
const CONTACT_TO = process.env.CONTACT_NOTIFY_EMAIL ?? "hello@getallsorted.ai";
const CONTACT_FROM = process.env.CONTACT_FROM_EMAIL ?? "All Sorted <onboarding@resend.dev>";

/**
 * Someone who left no WhatsApp number has no chat for us to open, so the
 * enquiry has to reach Joe by email instead.
 *
 * Never throws and never blocks the response: the enquiry is already saved in
 * Supabase by the time this runs, so a mail failure costs a notification, not
 * a lead. Without RESEND_API_KEY set it logs loudly and returns, which keeps
 * the form working while the key is still missing.
 */
async function emailEnquiry({ firstName, email, whatsapp, acquisitionRoute, referrer }) {
  if (!RESEND_API_KEY) {
    console.warn("[contact] RESEND_API_KEY not set, enquiry saved to Supabase but not emailed:", email);
    return;
  }
  const lines = [
    `Name: ${firstName}`,
    `Email: ${email}`,
    `WhatsApp: ${whatsapp ? whatsapp : "not given, they asked to be contacted by email"}`,
    `Page: ${acquisitionRoute || "/"}`,
    `Referrer: ${referrer || "direct"}`,
  ];
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: CONTACT_FROM,
        to: [CONTACT_TO],
        reply_to: email,
        subject: `All Sorted enquiry from ${firstName}`,
        text: lines.join("\n"),
      }),
      signal: controller.signal,
    });
    clearTimeout(timeout);
    if (!response.ok) {
      console.error("[contact] resend rejected the enquiry email:", response.status, await response.text());
    }
  } catch (err) {
    console.error("[contact] enquiry email failed:", err?.message ?? err);
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    firstName, email, whatsapp, preferredChannel,
    journeyId, acquisitionRoute, acquisitionQuery, referrer,
  } = req.body;

  if (!firstName || !email) {
    await trackInsightEvent("waitlist_submit_failed", { reason: "missing_fields" });
    return res.status(400).json({ error: 'Name and email required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    await trackInsightEvent("waitlist_submit_failed", { reason: "invalid_email" });
    return res.status(400).json({ error: 'Invalid email address' });
  }

  await trackInsightEvent("lead_acquired", {
    email: email.trim().toLowerCase(),
    sessionId: journeyId,
    acquisitionRoute: acquisitionRoute || "/",
    acquisitionQuery,
    referrer,
  });

  try {
    function insert(row) {
      return fetch(`${SUPABASE_URL}/rest/v1/waitlist`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
          'apikey': SUPABASE_SERVICE_KEY,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify(row),
      });
    }

    const base = {
      first_name: firstName.trim(),
      email: email.trim().toLowerCase(),
      source: 'all-sorted',
    };

    /* The whatsapp column may not exist on this table yet. Rather than make the
       form depend on a migration, try with it and fall back without it. Add the
       column and the number starts persisting on its own, no code change. */
    let response = whatsapp
      ? await insert({ ...base, whatsapp: String(whatsapp).trim() })
      : await insert(base);

    if (whatsapp && response.status === 400) {
      const detail = await response.clone().text();
      if (/whatsapp/i.test(detail) && /column|schema|find/i.test(detail)) {
        console.warn("[contact] waitlist.whatsapp column missing, saving without it. Number was:", whatsapp);
        response = await insert(base);
      }
    }

    // 409 = duplicate email, treat as success so we don't leak whether email exists
    if (response.status === 409) {
      /* This is a contact form, not just a signup list. Someone writing in a
         second time still needs to reach Joe, so notify on duplicates too. */
      if (preferredChannel !== 'whatsapp') {
        await emailEnquiry({
          firstName: firstName.trim(),
          email: email.trim().toLowerCase(),
          whatsapp,
          acquisitionRoute,
          referrer,
        });
      }
      await trackInsightEvent("waitlist_submit_success", {
        email: email.trim().toLowerCase(),
        sessionId: journeyId,
        duplicate: true,
        supabaseStatus: response.status,
      });
      return res.status(200).json({ success: true });
    }

    if (!response.ok) {
      const err = await response.text();
      console.error('Supabase error:', response.status, err);
      await trackInsightEvent("waitlist_submit_failed", {
        email: email.trim().toLowerCase(),
        reason: "supabase_error",
        supabaseStatus: response.status,
      });
      return res.status(500).json({ error: 'Failed to save. Please try again.' });
    }

    void trackWaitlistJoin(email.trim().toLowerCase(), firstName.trim());

    /* No number means no chat to open, so this is the only way it reaches Joe. */
    if (preferredChannel !== 'whatsapp') {
      await emailEnquiry({
        firstName: firstName.trim(),
        email: email.trim().toLowerCase(),
        whatsapp,
        acquisitionRoute,
        referrer,
      });
    }

    await trackInsightEvent("waitlist_submit_success", {
      email: email.trim().toLowerCase(),
      sessionId: journeyId,
      duplicate: false,
      supabaseStatus: response.status,
    });
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Server error:', err);
    await trackInsightEvent("waitlist_submit_failed", {
      email: typeof email === "string" ? email.trim().toLowerCase() : undefined,
      reason: "exception",
    });
    return res.status(500).json({ error: 'Server error. Please try again.' });
  }
}
