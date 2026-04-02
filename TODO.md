# All Sorted Website — Master To-Do
*Last updated: 2026-04-02*

> **Every session working on the All Sorted website: read this file first.**
> Mark items done as completed. Delete when fully shipped.

---

## Launch Stages

- **Private Alpha** — girlfriend + close friends. Expect bugs. Set expectations low.
- **Closed Beta** — waitlist users. More polished. Invitation only.
- **Public Launch** — open to all.

---

## PHASE 0 — Housekeeping
*Quick admin tasks. Do these first.*

- [x] **0.1** Move DOCKER_PLAN.md out of Golden Claw back to Joe's build only. *(done 2026-04-02)*
- [ ] **0.2** Build AI history ingestion — user exports their Claude or ChatGPT conversation history and imports it into All Sorted. System ingests it into memory/context so the AI already knows them on day one.
- [ ] **0.3** Build terminal inside Mission Control — embedded terminal in the dashboard (xterm.js, connected to tmux per USER_INTERACTION.md spec). Phase 2: enable remote control via Claude Code CLI so users can also operate it from their own computer.

---

## PHASE 1 — Foundation
*Nothing else can be built or written until these decisions are made.*

- [ ] **1.1 — Decide v1 page list** — go through all 87 Golden Claw pages and mark each: SHIP / HOLD / CUT. See the full inventory below. This defines the product.
- [ ] **1.2 — Lock in pricing** — confirm or change the working direction ($99/$299/$999/mo). Decide: monthly subscription, one-time, or both? Self-hosted tier?
- [ ] **1.3 — Write the All Sorted description** — plain-English, versions: one sentence, one paragraph, full-page. Feeds everything: website copy, social, outreach, onboarding.

---

## PHASE 2 — Research & Inventory
*Information gathering before building.*

- [ ] **2.1 — Research competitor comparison pages** — find how Zapier, HubSpot, n8n, monday.com present their comparison pages. What do they compare? What works? Return with examples and notes.
- [ ] **2.2 — List all bundled integrations** — every integration that ships where the user just adds an API key and it works. Format: name, what it does, category. This becomes a trust section on the website.
- [ ] **2.3 — Audit the help section** — extract the existing descriptions of what each page does from the dashboard's help/docs. These feed the features page and screenshot captions.

---

## PHASE 3 — Content & Copy
*Build the actual website content.*

- [ ] **3.1 — Section audit** — go through every section of index.html. Rate each by how excited the target SMB owner will actually be (1–5). Flag weak sections, missing sections, and anything that needs rewriting.
- [ ] **3.2 — Screenshots for all v1 pages** — one clean screenshot per page from the v1 page list, with a caption explaining what the user is looking at and why it matters. 31 already exist in /screenshots/ — audit which are usable.
- [ ] **3.3 — Write FAQ** — handle main objections before they become support emails: "Do I need technical skills?", "What if I already use [tool]?", "Is my data safe?", "What if I cancel?", "How is this different from ChatGPT?"
- [ ] **3.4 — Write pricing copy** — headline, subhead, plan names, feature lists, CTA for each tier. Feeds the pricing section and pricing page.

---

## PHASE 4 — Website Updates
*Build and ship the missing pieces.*

- [ ] **4.1 — Add pricing section to index.html** — before the bottom CTA. Use output from 3.4.
- [ ] **4.2 — Build features.html** — full feature list with screenshots and descriptions from 3.2. One page per major feature group.
- [ ] **4.3 — Add FAQ section to index.html** — use output from 3.3.
- [ ] **4.4 — Add comparison table** — once competitor research (2.1) is done and framing is clear.
- [ ] **4.5 — Add integrations section** — use output from 2.2. "Works with what you already use."
- [ ] **4.6 — Create OG image** — 1200x630, required before any social sharing push.
- [ ] **4.7 — Set up waitlist confirmation email** — check Airtable automation. If not set up, add one.
- [ ] **4.8 — Mobile responsiveness pass** — full review on phone + tablet breakpoints.
- [ ] **4.9 — Add analytics** — confirm visitor tracking exists. Add Plausible or Fathom if not.

---

## ON HOLD

- [ ] **Demo video** — screencast of Golden Claw. Hold until Phase 3 content is done so we know what to show and in what order.

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

- [x] Nav, hero, waitlist form (Airtable backend, live on Vercel)
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
- Waitlist backend: Airtable (appMlPbIGYa1Z9Ded). See WAITLIST.md.
- Design system: DESIGN.md. Do not deviate.
- Screenshots: /screenshots/ — 31 files.
- Product strategy: ~/.openclaw/workspace/projects/all-sorted/CONTEXT.md
- No em dashes in any copy.
