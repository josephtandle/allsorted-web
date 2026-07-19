# All Sorted — Legal Risk Analysis
*Date: 2026-04-03 (v2 — updated with additional research)*

> Pre-launch legal review. Written by Uni based on research into Anthropic Commercial/Consumer Terms, Meta Platform Policy, WhatsApp Business Policy, Slack API Terms, Manychat ToS, and general SaaS liability law.

---

## Summary Table

| Risk | Rating | Action Required |
|------|--------|----------------|
| Users powering with personal Claude subscription (OAuth) | RED | Must change to API key requirement |
| WhatsApp unofficial automation agent in paid product | RED | Remove from commercial version |
| Instagram automation agent in paid product | RED | Remove from commercial version |
| Slack agent commercial distribution without approval | YELLOW | Add ToS disclosure to docs |
| Gmail/Google agent (self-hosted, user OAuth only) | YELLOW | Ensure tokens never leave user's server |
| Liability for agentic actions causing data loss | YELLOW | Covered by T&C (see TERMS.md) |
| Dependency on Anthropic uptime and pricing changes | YELLOW | Disclaim in T&C; avoid lifetime guarantees |
| Open source license choice and CLAs | YELLOW | Decide AGPL vs MIT intentionally |
| Stripe agent | GREEN | Fine as-is |
| Notion agent | GREEN | Fine as-is |
| Manychat white-labeling/redistribution | RED | Cannot sublicense, white-label, or rebrand |
| General-purpose AI chatbot on WhatsApp | RED | Banned by WhatsApp as of Jan 2026 |
| Data privacy (GDPR/CCPA) | YELLOW | Add privacy policy; self-hosted mitigates but does not eliminate |
| Selling software requiring Claude API keys (commercial terms) | GREEN | Fine once users are on API keys, not subscription OAuth |

---

## 1. The Core Business Model Question (RED)

**Anthropic's ToS explicitly prohibits the "user powers it with their Claude subscription" model.**

From Anthropic's documentation (enforced January 2026):
> "Anthropic does not permit third-party developers to offer Claude.ai login or to route requests through Free, Pro, or Max plan credentials on behalf of their users."
> "Using OAuth tokens obtained through Claude Free, Pro, or Max accounts in any other product, tool, or service... is not permitted and constitutes a violation of the Consumer Terms of Service."

Anthropic enforced this technically in early 2026 with server-side blocks targeting third-party harnesses using subscription OAuth tokens.

**What this means:** If All Sorted works by having users authenticate with their Claude Pro/Max subscription and your product routes their requests through those credentials — that is a direct ToS violation. Anthropic has already demonstrated enforcement willingness.

**The fix:** Users must provide their own Anthropic **API key** (commercial terms, pay-per-token via Claude Console) rather than their personal subscription. API keys fall under the Commercial Terms of Service, which explicitly support building products. This changes user cost structure slightly but eliminates the legal risk entirely.

**The nuance:** Individuals using Claude Code CLI directly on their own machine for their own personal automation is permitted (Consumer ToS exempts it). What is not allowed is a third-party developer building a paid product that wraps that subscription.

**BYOK (Bring Your Own Key) model is explicitly safe:** Each end user provides their own Anthropic API key and has a direct billing relationship with Anthropic. All Sorted stores and uses their key on their behalf. This is the standard compliance path for products built on Claude and is explicitly supported under Anthropic's Commercial Terms:

> "use the Services, including to power products and services Customer makes available to its own customers and end users."

The key legal test: your product must add substantive value beyond just forwarding API requests. All Sorted clearly passes this test (157 agents, automation framework, pre-built integrations, dashboard).

---

## 2. WhatsApp Agent (RED)

- Meta's ToS prohibits automation via unofficial/third-party tools (e.g., wacli-style unofficial interfaces).
- The unofficial WhatsApp web protocol reverse-engineering is not an approved WhatsApp Business API integration.
- Meta has pursued legal action, DMCA takedowns, and permanent bans against automation tools.
- WhatsApp's Business Solution Terms make the **developer** liable for user violations.
- Including this in a paid commercial product creates direct exposure to Meta.

**Additional risk (Jan 2026):** WhatsApp now explicitly bans "general-purpose language models capable of conducting open-ended dialogues on any topic" from the platform. This means even if you used the official Business API, connecting an unrestricted Claude-powered chatbot to WhatsApp violates WhatsApp's 2026 AI policy. Allowed: structured bots for support, bookings, order tracking, notifications, and sales with clear scope limitations.

**Enforcement reality:** Meta suspended thousands of WhatsApp Business accounts in 2025. Unofficial automation tools are detected via high message volume patterns, rapid messaging to unsaved contacts, user blocks/reports, and technical signatures. Bans are permanent with "exceedingly rare" recovery.

**Action:** Remove the WhatsApp agent from any commercial version. It can remain in the personal/open-source GoldenClaw build. The commercial version should either use the official WhatsApp Business API (with structured, scope-limited bots only) or omit this feature entirely.

---

## 3. Instagram Automation Agent (RED)

Same risk profile as WhatsApp, arguably higher enforcement intensity. Meta pursued court action against automation tool developers (Voyager Labs, Octopus). Instagram enforcement accelerated dramatically in late 2025 with the "Great Ban Wave."

Key restrictions via official Instagram API:
- Automated DMs only to users who **engaged with you** in the last 24 hours
- Rate limit: 200 automated DMs per hour per account
- No cold outreach, auto-liking, mass follow/unfollow, or bot comments
- Browser automation / Chrome extension approaches are explicitly banned

Meta blocks **billions of suspected unauthorized scraping actions per day** across its platforms. A disclaimer saying "use at your own risk" does not protect against a third-party ToS violation claim from Meta.

**Action:** Remove from any commercial version. The IG Video Transcriber (caption extraction) is lower risk but still uses unofficial methods.

---

## 3a. Manychat White-Labeling (RED)

Manychat's Terms of Service explicitly prohibit sublicensing, white-labeling, and redistribution:

> "A non-exclusive, non-transferable, revocable right, **without the right of sublicense**, to access and use the Manychat Dev Program."

You cannot rebrand the dashboard, hide the ManyChat name, or provide the service under your own brand. Building a competing product using their AI features is explicitly prohibited. Manychat also claims a "perpetual, irrevocable, worldwide, sublicensable" license to any Applications or Integration Products you build on their platform.

**Action:** If All Sorted includes Manychat integrations, they must be positioned as "bring your own Manychat account" with the user configuring their own credentials. Do not bundle, rebrand, or redistribute Manychat functionality. Document clearly that Manychat is a separate product with its own terms.

---

## 3b. Data Privacy (YELLOW)

Even though All Sorted is self-hosted (which eliminates most data-processing liability), there are still considerations:

- **GDPR:** If any EU-based user runs All Sorted and it processes data about EU residents (contacts, emails, messages), the user becomes a data controller. All Sorted should include a note that users are responsible for their own GDPR compliance.
- **CCPA:** Similar for California residents.
- **Anthropic data policy:** Under API Commercial Terms, Anthropic explicitly does NOT train models on customer content. This is a selling point worth highlighting.
- **Credential storage:** All Sorted stores API keys in an encrypted vault. Document this security model clearly. If keys are ever transmitted to any external service beyond the intended API endpoint, that is a breach risk.

**Action:** Add a brief Privacy Policy page to the website. Core message: All Sorted is self-hosted, your data stays on your machine, we never see or store your data. Users are responsible for their own compliance with applicable data protection laws.

---

## 4. Slack Agent (YELLOW)

Slack's API Terms (updated October 2025) prohibit commercially distributing an application that integrates with Slack APIs without authorization through the Slack Marketplace or a separate agreement. "Commercial distribution" includes any paid product.

The agent itself is not illegal. Selling the integration in a paid product without Slack approval is a ToS violation.

**Action:** Add ToS disclosure in docs. Document that the agent uses only official Slack API endpoints and users configure their own credentials. Optionally pursue Slack Marketplace listing for legitimacy.

---

## 5. Gmail/Google Agents (YELLOW)

Gmail is a "sensitive scope" under Google's API policy. A product that ships with pre-built Gmail agents where each user configures their own Google OAuth credentials is generally acceptable since users authenticate individually.

**Conditions that keep this green:**
- Product does not store or transmit Google OAuth tokens through any Joe-controlled infrastructure.
- Agents use only official Google APIs.
- Truly self-hosted (tokens stay on user's machine/server).

All Sorted meets these conditions. Keep it that way.

---

## 6. Liability for Agentic Actions (YELLOW)

A user runs an agent that deletes emails, sends the wrong message to a client, makes erroneous Stripe refunds, or destroys data. They seek damages.

**The good news:** "As-is" disclaimers and limitation of liability clauses are legally enforceable in developer-tool contexts when properly drafted and prominently displayed. Self-hosted software sold to technically sophisticated buyers is treated more like B2B.

**Required in Terms:**
- Explicit "as-is" warranty disclaimer (merchantability and fitness named)
- Exclusion of consequential, incidental, special, and punitive damages
- Cap on total liability (fees paid in last 12 months)
- User responsibility clause: user is responsible for reviewing, authorizing, and monitoring all agent actions

See TERMS.md for the drafted language.

---

## 7. Dependency on Anthropic (YELLOW)

Anthropic can change API pricing, rate limits, or terms at any time. If Anthropic discontinues Claude Code CLI or makes breaking changes, All Sorted's core function stops working. Users who paid a $499 lifetime license could claim breach of implied warranty.

**Mitigation:**
- Explicitly disclaim dependency on third-party services.
- Avoid uptime or perpetual functionality guarantees.
- Frame All Sorted as a framework/toolkit, not a finished product.
- Be careful with "lifetime" pricing language.

---

## 8. Open Source / Dual License (YELLOW)

- **MIT license:** Anyone can fork GoldenClaw and build a competing commercial product.
- **AGPL license:** Users who modify and run it as a service must open-source changes, incentivizing commercial buyers to pay rather than self-serve.
- **CLAs:** If GoldenClaw accepts outside contributors, a Contributor License Agreement is needed to legally use their code in the paid commercial version under different terms.
- **Bundled licenses:** npm packages and bundled libraries each have their own licenses. Run `npm audit` for license compliance before launch.

---

## Bottom Line

The five things that must change before selling All Sorted commercially:

1. **Require API key, not Claude subscription** — this is the single biggest blocker. Reframe it: "You need an Anthropic API key" not "You need Claude Max." The BYOK model is explicitly safe under Anthropic's Commercial Terms.
2. **Remove WhatsApp and Instagram automation agents from the paid product** — too much Meta exposure. WhatsApp's 2026 AI chatbot ban makes even the official API path risky for general-purpose AI agents.
3. **Remove or reposition Manychat integration** — cannot be white-labeled or sublicensed. Position as "bring your own account" only.
4. **Publish a Digital Purchase Agreement** — see PURCHASE_AGREEMENT.md. Users must digitally sign the covenant before purchase is finalized. This document covers all five points in Joe's brief (VPS ownership, full control, can break things, comply with law, no liability) plus inspirational framing and specific warnings about Anthropic ToS, Meta ToS, and data privacy.
5. **Publish Terms that explicitly limit liability** — see TERMS.md.
6. **Add a Privacy Policy** — even for self-hosted software, users need to know what data goes where.

**Launch-safe agents (GREEN):** Stripe, Notion, Zoho Books, Google (with user OAuth), calendar, backups, memory, task executor, daily summaries, Guard Dog, email cleanup, blog posting, Canva, Airtable.

**Launch-risky agents (remove or gate behind warnings):** WhatsApp, Instagram, Manychat, Slack (needs marketplace listing or prominent disclosure).

Getting a 1-hour review from a SaaS lawyer before launch is advisable. Typical cost: $500-$1,500. Worth it at any price point above $149.

---

*Research sources: Anthropic Commercial Terms, Anthropic Consumer Terms, Anthropic Usage Policy, WhatsApp Business Policy (2026 AI update), WhatsApp Business Solution Terms, Meta Platform Policy, Instagram Terms of Use, Manychat Terms of Service, Manychat AI Supplementary Terms, Slack API Terms (Oct 2025), Google API Scopes policy. Enforcement cases: Meta v. Voyager Labs, Meta v. Octopus, Meta v. Bright Data. Industry reporting: TechCrunch, VentureBeat, SitePoint, TheAgentTimes.*
