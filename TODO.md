# All Sorted Website — Master To-Do
*Last updated: 2026-04-02 (session 3)*

> **Every session working on the All Sorted website: read this file first.**
> Mark items done as completed. Delete when fully shipped.

---

## Launch Stages

- **Private Alpha** — girlfriend + close friends. Expect bugs. Set expectations low.
- **Closed Beta** — waitlist users. More polished. Invitation only.
- **Public Launch** — open to all.

---

## CURRENT PLAN (decided 2026-04-02)

**Sequence:**
1. ~~Build Braindump + Terminal features in Golden Claw~~ — in progress (Joe building)
2. ~~Write descriptions for all v1 pages~~ — done via SCREENSHOT_INDEX.md
3. ~~Pick the top features to highlight~~ — done (P1 ordered by impact in manifest.json)
4. ~~Capture screenshots of all pages~~ — done (80 screenshots in /screenshots/pages/)
5. Update the website with that content (pricing, features page, FAQ, etc.) — next up
6. Demo video — after Genie/Terminal is done

---

## PHASE 0 — Features to Build First
*Get these working in Golden Claw before website work.*

- [x] **0.1** Move DOCKER_PLAN.md out of Golden Claw back to Joe's build only. *(done 2026-04-02)*
- [x] **0.2** Build Braindump — voice/text brain dump that captures thoughts and routes them (tasks, memory, notes). **DONE.** *(2026-04-02)* Next: sync to Golden Claw, take screenshot, add to manifest + features.html.
- [ ] **0.3** Build The Genie — embedded terminal in the dashboard (xterm.js + tmux). **IN PROGRESS — Joe building.** Screenshot blocked until complete. Phase 2: remote control integration.
- [ ] **0.4** Build AI history ingestion — user exports their Claude or ChatGPT conversation history and imports it into All Sorted. System ingests it into memory/context so the AI already knows them on day one.

---

## PHASE 1 — Foundation Decisions
*Lock these in before writing website copy.*

- [x] **1.1 — Decide v1 page list** — done via PAGES_OVERVIEW.md *(2026-04-02)*. Cut list removed from Golden Claw nav. See V1 PAGE DECISIONS below.
- [ ] **1.2 — Lock in pricing** — research suggests $149/$299/$499 one-time (see CONTEXT.md > RESEARCH.md). Decide: one-time vs subscription? Self-hosted tier pricing? Joe to decide.
- [x] **1.3 — Write the All Sorted description** — done. See COPY.md for one-liner, paragraph, and full-page copy with tagline options. *(2026-04-02)*

---

## PHASE 2 — Page Descriptions & Research
*Information gathering before building the website.*

- [x] **2.1 — Write descriptions for all v1 pages** — done. All 80 pages have plain-English descriptions and SMB-focused website captions. See screenshots/SCREENSHOT_INDEX.md. *(2026-04-02)*
- [ ] **2.2 — Research competitor comparison pages** — find how Zapier, HubSpot, n8n, monday.com present their comparison pages. What do they compare? What works? Return with examples and notes.
- [ ] **2.3 — List all bundled integrations** — every integration that ships where the user just adds an API key and it works. Format: name, what it does, category. This becomes a trust section on the website.

---

## PHASE 3 — Screenshots & Video
*Capture the product visually.*

- [x] **3.1 — Pick top features to highlight** — done. P1 pages (01-29) are ordered by SMB impact in manifest.json. Top 10: Tasks, Content Autopilot, Content Creator, Guard Dog, Email Cleanup, WhatsApp, CRM, Stripe, SEO, Human Tasks. *(2026-04-02)*
- [x] **3.2 — Screenshots for all pages** — done. 80 screenshots captured from Golden Claw at port 3002. Saved to screenshots/pages/, indexed in manifest.json and SCREENSHOT_INDEX.md. features.html updated to use new paths. *(2026-04-02)*
- [ ] **3.3 — Demo video** — blocked until Braindump and The Genie are complete. Script will follow the P1 impact order. Add this to the session after 0.2 and 0.3 are done.

---

## PHASE 3.5 — Legal (Before Any Sales)
*Must resolve before taking money.*

- [x] **L.1 — Legal risk research** — done. Full analysis in LEGAL.md. *(2026-04-02)*
- [x] **L.2 — Draft Terms and Conditions** — done. See TERMS.md. *(2026-04-02)*
- [ ] **L.3 — Switch to Anthropic API key (not Claude subscription)** — Anthropic's ToS prohibits routing requests through a personal Claude Pro/Max subscription in a third-party product. Must require users to use an API key from console.anthropic.com instead. When doing this, add clear user-facing guidance covering: (1) how this works vs. a subscription, (2) that they are billed per token, and (3) the need for token management / budget controls. Not urgent for alpha — address before beta.
- [x] **L.4 — Remove WhatsApp + Instagram from Golden Claw** — WhatsApp page deleted from Golden Claw nav and app folder. Instagram was never in Golden Claw. Neither will be in the commercial product. *(2026-04-02)*
- [x] **L.5 — Write full legal purchase agreement** — done. See PURCHASE_AGREEMENT.md. Includes all 5 points Joe specified + inspirational opening + clear warnings. Ready for digital signature implementation. *(2026-04-03)*
- [ ] **L.6 — Add OAuth warning to setup guide + T&C** — users cannot use Claude subscription (OAuth) with All Sorted. Add clear warning in install docs and liability clause in TERMS.md. See memory: allsorted_oauth_warning.md.
- [ ] **L.7 — Optional: 1-hour SaaS lawyer review** — recommended before public launch at any price point above $149. Not urgent for private alpha. Have lawyer check: PURCHASE_AGREEMENT.md, TERMS.md, LEGAL.md, and privacy policy.

---

## PHASE 4 — Content & Copy
*Write the website content.*

- [ ] **4.1 — Section audit** — go through every section of index.html. Rate each by how excited the target SMB owner will actually be (1-5). Flag weak sections, missing sections, and anything that needs rewriting.
- [ ] **4.2 — Write FAQ** — handle main objections before they become support emails: "Do I need technical skills?", "What if I already use [tool]?", "Is my data safe?", "What if I cancel?", "How is this different from ChatGPT?"
- [ ] **4.3 — Write pricing copy** — headline, subhead, plan names, feature lists, CTA for each tier. Blocked on 1.2 (pricing decision). Draft skeleton exists in COPY.md.

---

## PHASE 5 — Website Updates
*Build and ship the missing pieces.*

- [ ] **5.1 — Add pricing section to index.html** — before the bottom CTA. Use output from 4.3.
- [ ] **5.2 — Build features.html** — full feature list with screenshots and descriptions from 3.2. One page per major feature group.
- [ ] **5.3 — Add FAQ section to index.html** — use output from 4.2.
- [ ] **5.4 — Add comparison table** — once competitor research (2.2) is done and framing is clear.
- [ ] **5.5 — Add integrations section** — use output from 2.3. "Works with what you already use."
- [ ] **5.6 — Create OG image** — 1200x630, required before any social sharing push.
- [ ] **5.7 — Set up waitlist confirmation email** — check waitlist automation. If not set up, add one.
- [ ] **5.8 — Mobile responsiveness pass** — full review on phone + tablet breakpoints.
- [ ] **5.9 — Add analytics** — confirm visitor tracking exists. Add Plausible or Fathom if not.

---

## FUTURE (Post-Beta)

- [ ] **Testimonials** — no users yet. Add once private alpha feedback comes in.

---

## FUTURE (Post-Beta)

- [ ] **Testimonials** — no users yet. Add once private alpha feedback comes in.

---

## V1 PAGE DECISIONS
*Go through this list and mark each: SHIP / HOLD / CUT*
*Joe to decide. Recommendations in brackets.*

### Core Operations
| Page | Route | Recommendation | Decision |
|------|-------|----------------|----------|
| Task Board | /tasks | SHIP — core product | |
| Paperclip (task executor) | /paperclip | SHIP — core product | |
| Daily Summary | /daily-summary | SHIP — core product | |
| Daily Briefing | /daily-briefing | HOLD — may overlap with Daily Summary | |
| Memory | /memory | SHIP — core product | |
| Backups | /backups | SHIP — core product | |
| Human Tasks | /human-tasks | SHIP — core product | |
| Calendar | /calendar | SHIP — core product | |
| System | /system | SHIP — infrastructure | |
| Logs | /logs | SHIP — infrastructure | |
| Settings | /settings | SHIP — required | |
| MC Settings | /mc-settings | HOLD — may be redundant with settings | |

### Security
| Page | Route | Recommendation | Decision |
|------|-------|----------------|----------|
| Guard-dog | /guard-dog | SHIP — major selling point | |
| Installed Skills | /installed-skills | SHIP — core UX | |
| Skills | /skills | HOLD — may overlap with installed-skills | |

### Sales & Client Management
| Page | Route | Recommendation | Decision |
|------|-------|----------------|----------|
| CRM | /crm | SHIP — core for SMBs | |
| Clients | /clients | HOLD — may overlap with CRM | |
| Apollo (prospect research) | /apollo | SHIP — outreach tool | |
| Email Cleanup | /email-cleanup | SHIP — clear value | |
| WhatsApp | /whatsapp | SHIP — huge for SMBs | |
| ManyChat Sync | /manychat-sync | SHIP — messaging automation | |
| ManyChat Giveaways | /manychat-giveaways | HOLD — niche feature | |
| TidyCal | /tidycal | SHIP — booking/scheduling | |
| Zoom | /zoom | SHIP — meeting integration | |
| Meeting Notes | /meeting-notes | SHIP — useful | |
| Form Builder | /form-builder | SHIP — intake/lead gen | |

### Finance & Billing
| Page | Route | Recommendation | Decision |
|------|-------|----------------|----------|
| Stripe | /stripe | SHIP — core billing | |
| Zoho Books | /zoho-books | SHIP — bookkeeping | |
| Bookkeeping | /bookkeeping | HOLD — may overlap with Zoho Books | |
| Currency | /currency | SHIP — lightweight, useful | |
| Scrooge | /scrooge | HOLD — unclear scope | |
| CashClaw | /cashclaw | HOLD — unclear scope for SMBs | |
| Affiliate Links | /affiliate-links | HOLD — niche | |

### Content & Marketing
| Page | Route | Recommendation | Decision |
|------|-------|----------------|----------|
| Content Autopilot | /content-autopilot | SHIP — major selling point | |
| Content Creator | /content-creator | SHIP — major selling point | |
| SEO | /seo | SHIP — valuable | |
| PostPilot (Blog) | /postpilot | HOLD — may rename to Blog | |
| Blog Service | /blog-service | SHIP — if this replaces PostPilot | |
| Postiz | /postiz | SHIP — social scheduling | |
| LinkedIn | /linkedin | SHIP — B2B outreach | |
| LinkedIn Images | /linkedin-images | HOLD — niche | |
| IG Video Transcriber | /ig-video-transcriber | SHIP — content repurposing | |
| Descript | /descript | SHIP — video editing | |
| Canva | /canva | SHIP — graphics | |
| Meta Ads | /meta-ads | SHIP — paid social | |
| X / Twitter | /x | SHIP — social | |
| YouTube | /youtube | SHIP — video | |
| Carousel Builder | /carousel-builder | SHIP — content creation | |
| Backlinks | /backlinks | HOLD — still building | |
| Nightcrawler | /nightcrawler | HOLD — unclear | |

### Business-Specific (Needs Decisions)
| Page | Route | Recommendation | Decision |
|------|-------|----------------|----------|
| Online Program / Cohorts | /cohorts | SHIP — program management | |
| Online Programs | /online-programs | HOLD — may overlap with /cohorts | |
| Websites | /websites | SHIP — website management | |
| Projects | /projects | SHIP — project management | |
| Business 1 | /business1 | HOLD — too generic/Joe-specific | |
| Business 2 | /business2 | HOLD — too generic/Joe-specific | |
| Iron Amethyst | /iron-amethyst | CUT — Joe's company | |
| Heliconia Cantik | /heliconia-cantik | CUT — Joe's company | |
| Investments | /investments | CUT — Joe's personal | |
| Personal Info | /personal-info | CUT — Joe's personal | |
| Bank Accounts | /bank-accounts | CUT — Joe's personal | |

### Integrations & Tools
| Page | Route | Recommendation | Decision |
|------|-------|----------------|----------|
| Google | /google | SHIP — Gmail/Drive/Sheets | |
| Dropbox | /dropbox | SHIP — file storage | |
| Vercel | /vercel | HOLD — dev-focused | |
| Slack | /slack | SHIP — team comms | |
| Airtable | /airtable | SHIP — data/spreadsheet | |
| Porkbun | /porkbun | HOLD — domain management (niche) | |
| Office | /office | HOLD — unclear scope | |

### Specialty / Niche
| Page | Route | Recommendation | Decision |
|------|-------|----------------|----------|
| Smart Home | /smart-home | HOLD — Philips Hue, not SMB core | |
| Spotify | /spotify | HOLD — nice to have | |
| WHOOP | /whoop | CUT — Joe's fitness tracker | |
| Kling | /kling | HOLD — AI video gen, not v1 | |
| Passive Ideas | /passive-ideas | HOLD — not core SMB | |
| Tokopedia | /tokopedia | CUT — Indonesian marketplace, too niche | |
| Venue Finder | /venue-finder | HOLD — niche | |
| Machine Learning | /machine-learning | HOLD — unclear for SMBs | |
| Story Engine | /story-engine | HOLD — unclear | |
| Remotion | /remotion | HOLD — dev-focused | |
| Stock Photo AI | /stock-photo-ai | HOLD — niche | |
| Pexel | /pexel | HOLD — niche | |
| Unsplash | /unsplash | HOLD — niche | |
| Smart Sync | /smart-sync | HOLD — unclear | |
| LittleBird | /littlebird | HOLD — unclear | |
| ClanForge | /clanforge | HOLD — unclear | |
| Santa | /santa | HOLD — unclear | |
| Pitch Deck | /pitch-deck | HOLD — niche | |
| Prompt Packs | /prompt-packs | HOLD — niche | |
| Video Processor | /video-processor | HOLD — niche | |
| Disk Cleaner | /disk-cleaner | HOLD — utility, not SMB core | |
| Housing Search | /housing-search | CUT — Joe's personal | |
| Villa Search | /villa-search | CUT — Joe's personal | |
| Rio | /rio | HOLD — WhatsApp copilot, may overlap | |
| Mentorships | /mentorships | HOLD — niche coaching use case | |

---

## Already Built (index.html)

- [x] Nav, hero, waitlist form (Supabase backend, live on Vercel)
- [x] Features section (3 cards)
- [x] Websites section
- [x] "How it works" (3 steps)
- [x] "Under the Hood" tech section
- [x] "Everything included" feature list
- [x] Deep-dives: Task Board, Guard-dog, Blog/SEO, Content/Social
- [x] "Who it's for" section
- [x] Security section
- [x] Bottom CTA + footer
- [x] 31 screenshots in /screenshots/
- [x] Design system locked in (DESIGN.md)

---

## Reference

- Site live on Vercel. Edits to ~/allsorted-web/ auto-deploy.
- Waitlist backend: Supabase. See WAITLIST.md.
- Design system: DESIGN.md. Do not deviate.
- Screenshots: /screenshots/ — 31 files.
- Product strategy: ~/.myos/workspace/projects/all-sorted/CONTEXT.md
- No em dashes in any copy.
