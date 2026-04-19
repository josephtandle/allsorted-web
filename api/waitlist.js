const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

const DITTOFEED_API_URL = process.env.DITTOFEED_API_URL ?? "http://localhost:3006";
// DITTOFEED_WRITE_KEY format: "secretId:secretValue" (base64-encoded for Basic auth)
const DITTOFEED_WRITE_KEY = process.env.DITTOFEED_WRITE_KEY ?? "";

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

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { firstName, email } = req.body;

  if (!firstName || !email) {
    return res.status(400).json({ error: 'First name and email required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/waitlist`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
        'apikey': SUPABASE_SERVICE_KEY,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal',
      },
      body: JSON.stringify({
        first_name: firstName.trim(),
        email: email.trim().toLowerCase(),
        source: 'all-sorted',
      }),
    });

    // 409 = duplicate email, treat as success so we don't leak whether email exists
    if (response.status === 409) {
      return res.status(200).json({ success: true });
    }

    if (!response.ok) {
      const err = await response.text();
      console.error('Supabase error:', response.status, err);
      return res.status(500).json({ error: 'Failed to save. Please try again.' });
    }

    void trackWaitlistJoin(email.trim().toLowerCase(), firstName.trim());
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Server error. Please try again.' });
  }
}
