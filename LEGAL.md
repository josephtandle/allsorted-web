# All Sorted — Legal Risk Analysis
*Date: 2026-04-02*

> Pre-launch legal review. Written by Uni based on research into Anthropic ToS, Meta ToS, Slack API Terms, and general SaaS liability law.

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

---

## 2. WhatsApp Agent (RED)

- Meta's ToS prohibits automation via unofficial/third-party tools (e.g., wacli-style unofficial interfaces).
- The unofficial WhatsApp web protocol reverse-engineering is not an approved WhatsApp Business API integration.
- Meta has pursued legal action, DMCA takedowns, and permanent bans against automation tools.
- WhatsApp's Business Solution Terms make the **developer** liable for user violations.
- Including this in a paid commercial product creates direct exposure to Meta.

**Action:** Remove the WhatsApp agent from any commercial version. It can remain in the personal/open-source GoldenClaw build. The commercial version should either use the official WhatsApp Business API or omit this feature.

---

## 3. Instagram Automation Agent (RED)

Same risk profile as WhatsApp, arguably higher enforcement intensity. Meta pursued court action against automation tool developers. Instagram enforcement accelerated in late 2025.

A disclaimer saying "use at your own risk" does not protect against a third-party ToS violation claim from Meta.

**Action:** Remove from any commercial version.

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

The three things that must change before selling All Sorted commercially:

1. **Require API key, not Claude subscription** — this is the single biggest blocker. Reframe it: "You need an Anthropic API key" not "You need Claude Max."
2. **Remove WhatsApp and Instagram agents from the paid product** — too much Meta exposure.
3. **Publish Terms that explicitly limit liability** — see TERMS.md.

Getting a 1-hour review from a SaaS lawyer before launch is advisable. Typical cost: $500-$1,500. Worth it at any price point above $149.

---

*Research sources: Anthropic Consumer Terms, Anthropic Acceptable Use Policy, Anthropic Claude Code legal docs, WhatsApp Business Policy, Meta enforcement history, Slack API Terms October 2025, Google API Scopes policy, TermsFeed liability disclaimers, Traverse Legal dual licensing guide.*
