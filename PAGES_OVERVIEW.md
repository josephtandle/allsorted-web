# All Sorted — Pages Overview
*Last updated: 2026-04-02*

Every page in Mission Control / Golden Claw, with a description of what it does.
Use this to decide what ships in v1 and to write website copy and screenshots.

---

## Core Operations

### /tasks — Task Board
Pre-loaded Kanban board for managing clients and work. Ships with 33 cards across 7 columns covering the full client lifecycle: intake, proposals, active work, follow-ups, billing, done. Cards are created automatically from client intake, billing events, and meetings. Nothing falls through the cracks.
- Subpage: `/tasks/projects` — project-level view of tasks

### /paperclip — Autonomous Task Executor
The engine that runs automated jobs without being asked. Picks up tasks from the board, executes them, marks them done, and reports back. The agent that keeps everything moving 24/7 even when no one is watching.

### /daily-summary — Daily Summary
A digest generated every morning covering what happened yesterday: emails processed, tasks completed, agent activity, flagged items. One place to start the day.

### /daily-briefing — Daily Briefing
Similar to Daily Summary but forward-looking — what's on the calendar today, tasks due, alerts, and priorities. May overlap with Daily Summary; decision needed on whether both ship.

### /memory — Memory
Persistent notes and long-term context store. Agents write to it, you write to it, and everything that matters accumulates here. Think of it as the system's running memory — it knows your preferences, your clients, your context.

### /backups — Backups
Automatic daily backups of the entire workspace. Stores dated archives with metadata. No configuration needed — it just runs. View backup history, restore points, and storage usage.

### /human-tasks — Human Task Handler
The inbox for tasks that require a human decision before automation can proceed. When an agent hits something it can't handle alone, it lands here. Review, approve, reject, or redirect.

### /calendar — Calendar
Unified calendar view across all connected accounts. Shows scheduled meetings, automated job runs, cron schedules, and manual events. Connects to Google Calendar.

### /system — System Overview
Live status of all running agents and services. CPU, memory, disk, uptime, process health. The control panel for the whole system.

### /logs — Log Viewer
Full log output from all agents and automated jobs. Search, filter by agent, filter by severity. Essential for debugging and auditing.

### /settings — Settings
Global system settings: API keys, integrations, notifications, timezone, user preferences.

### /mc-settings — Mission Control Settings
Dashboard-specific configuration: theme, layout, port assignments, display preferences.
- Subpage: `/mc-settings/ports` — port management

---

## Security

### /guard-dog — Security Scanner
Nightly vulnerability scanner. Runs at 02:30 every morning, checking all packages and dependencies against CVE databases, CISA, NVD, and VirusTotal (70+ antivirus engines). Sends Telegram alerts for critical threats. You wake up knowing the system is clean.
- `/guard-dog/vulnerabilities` — list of all detected vulnerabilities
- `/guard-dog/projects` — which projects are affected by which vulnerabilities
- `/guard-dog/reports` — historical scan reports
- `/guard-dog/audit` — full audit trail of all security events
- `/guard-dog/settings` — configure scan schedule, alert thresholds, exclusions

### /installed-skills — Installed Skills
Manage all installed skills (integrations). Toggle each on or off with one click. Search and filter by category or status. The master switch panel for what the system can do.

### /skills — Skills Dashboard
Similar to installed-skills — may be a legacy or alternate view. Shows the skills registry and installation status.

---

## Sales & Client Management

### /crm — CRM
Customer relationship manager. Contact records, interaction history, deal stages, notes, tags. Connected to intake forms, email, and WhatsApp so every touchpoint is logged automatically.

### /clients — Clients
Client list and management. May overlap with CRM — decision needed on whether both ship or if they serve different purposes (CRM = prospects, Clients = active).

### /apollo — Apollo (Prospect Research)
Automated prospect research using the Apollo.io API. Feed it a company name or domain and it returns full contact details, company size, industry, tech stack, social profiles. Feeds the cold outreach pipeline.

### /email-cleanup — Email Cleanup (Emmy)
Automated inbox manager. Applies rules to incoming email: archive, label, forward, respond, or delete. Handles the repetitive email work so the inbox stays clear. Configure rules in plain English.

### /whatsapp — WhatsApp
WhatsApp integration for business messaging. Send and receive messages, manage conversations, automate responses, and connect contacts to CRM records. Core channel for SMBs who run their business on WhatsApp.

### /manychat-sync — ManyChat Sync
Syncs contact data and conversation state between ManyChat and the rest of the system. Keeps subscriber lists, tags, and custom fields current across platforms.

### /manychat-giveaways — ManyChat Giveaways
Manages giveaway campaigns run through ManyChat. Entry tracking, winner selection, delivery confirmation.

### /tidycal — TidyCal
Booking and scheduling integration. Connects to TidyCal to show upcoming bookings, sync to calendar, trigger follow-up automations when meetings are booked or completed.

### /zoom — Zoom
Zoom integration. Access meeting recordings, transcripts, and participant data. Feeds into meeting-notes and mentorship wrap-ups automatically.

### /meeting-notes — Meeting Notes
AI-generated notes from Zoom calls and other meetings. Summarizes key points, action items, and decisions. Auto-creates follow-up tasks on the board.

### /form-builder — Form Builder
Create and manage intake forms, surveys, and questionnaires. Shareable as standalone HTML pages. Responses feed directly into CRM and the task board.

---

## Finance & Billing

### /stripe — Stripe
Stripe payments dashboard. Revenue by day/week/month, recent transactions, subscription status, refund tracking. Also manages promo codes and coupons.

### /zoho-books — Zoho Books
Bookkeeping integration. Invoices, expenses, P&L, and tax reporting via Zoho Books. Connects to bank accounts and payment processors for automated reconciliation.

### /bookkeeping — Bookkeeping
Bookkeeping overview page. May be a simplified view of Zoho Books data or a separate ledger. Decision needed on whether both ship.

### /currency — Currency Converter
Live currency conversion. Useful for international invoicing, expense tracking in multiple currencies, and pricing decisions.

### /scrooge — Scrooge (AI Cost Tracker)
Tracks Claude / AI API usage and cost. Shows spend by model, by day/week/month, and identifies which tasks are most expensive. Helps optimize AI usage and budget.

### /cashclaw — CashClaw (Revenue Dashboard)
Revenue intelligence for Joe's services and products. Tracks earnings across multiple income streams (today/week/month/total), manages service pricing, and links to Stripe checkout. Designed for multi-product business owners.

### /affiliate-links — Affiliate Links
Manages affiliate program links and tracking. Records each program, commission rates, and link URLs. Useful for anyone running affiliate income alongside their main business.

---

## Content & Marketing

### /content-autopilot — Content Autopilot
Fully automated content pipeline. Researches what's working in your niche, drafts posts for Instagram, LinkedIn, TikTok, Twitter, and Pinterest, and publishes on a set schedule. Review-and-approve or hands-off — your choice.

### /content-creator — Content Creator
Manual content creation workspace. Draft posts, generate variations, apply brand voice, preview before publishing. For when you want more control than Autopilot provides.

### /seo — SEO
SEO monitoring and optimization. Tracks keyword rankings, crawl issues, page speed scores, and backlink health. Connected to Bing Webmaster and Google Search Console.

### /blog-service — Blog Service
The current blog management system. Manages posts across multiple websites, with per-site settings (brand voice, schedule, CMS config). Posts are generated by the PostPilot agent and land here for review before publishing.

### /postpilot — PostPilot (Legacy Blog)
The original blog automation tool. Manages multiple client/website blogs, keyword research, post generation, and publishing. Being superseded by blog-service for new architecture but still functional.
- `/postpilot/clients/[clientId]/blog` — blog posts for a specific site
- `/postpilot/clients/[clientId]/discoveries` — keyword and topic research
- `/postpilot/clients/[clientId]/setup` — configuration for a specific site
- `/postpilot/posts` — all posts across all sites

### /postiz — Postiz
Social media scheduling and publishing. Connects to all major platforms. Schedule posts, manage a content calendar, and track engagement. The publishing layer for content created by Autopilot or Creator.

### /linkedin — LinkedIn
LinkedIn automation and outreach. Send connection requests, follow-up messages, and content posts on a schedule. Feeds from Apollo prospect lists.

### /linkedin-images — LinkedIn Images
AI-powered LinkedIn image generator. Creates branded background images and overlays for LinkedIn posts and profile banners. Output auto-sized for LinkedIn specs.

### /ig-video-transcriber — IG Video Transcriber
Transcribes Instagram videos and Reels. Converts video content into text for repurposing as blog posts, captions, or email copy. Works with Descript for editing.

### /descript — Descript
Video editing integration. Access Descript projects, transcripts, and published clips from within the dashboard. Connects to IG video transcriber workflow.

### /canva — Canva
Canva integration. Create and access branded graphics, presentations, and social assets. Auto-applies brand colors, fonts, and templates.

### /meta-ads — Meta Ads
Facebook and Instagram advertising. Campaign overview, spend tracking, audience management, and creative performance. Connected to Meta Ads API.

### /x — X / Twitter
Twitter/X automation. Schedule posts, track engagement, manage replies. Content drafted by the Autopilot agent or manually in Content Creator.

### /youtube — YouTube
YouTube channel management. Video performance, upload status, and transcript access for content repurposing.

### /carousel-builder — Carousel Builder
Creates multi-slide carousel posts for Instagram and LinkedIn. Input a topic or paste content and it generates a formatted carousel ready to publish.

### /backlinks — Backlinks (Growth Engine)
Automated backlink outreach pipeline. Finds relevant forums, communities, and publications, drafts helpful replies and guest post pitches, and tracks the full pipeline from prospect to placed link.

### /nightcrawler — Nightcrawler
Nightly research agent. Runs overnight to scan sources, gather intelligence, and produce a morning report. Tracks run history, success/failure, and skills added during each run.

### /santa — Santa
Similar to Nightcrawler — a nightly runner that performs research and skill discovery while the system is idle. May be a newer version or a parallel agent with a different focus. Run history, reports, and skill additions tracked.

---

## Online Program / Cohorts

### /cohorts — Cohorts (Online Program Management)
Full management suite for running a cohort-based online program or mastermind. Participants, sessions, onboarding, cold outreach for enrollment, Q&A, wrap-ups, blog, and settings — all in one place.
- `/cohorts/participants` — participant list and status
- `/cohorts/onboarding` — onboarding flow for new participants
- `/cohorts/cold-outreach` — outreach campaigns for enrollment
- `/cohorts/blog` — program blog
- `/cohorts/discoveries` — content research for the program
- `/cohorts/favor-bank` — tracks favors and reciprocal relationships among participants
- `/cohorts/questions` — Q&A management
- `/cohorts/settings` — program configuration
- `/cohorts/wrap-up` — session wrap-up and follow-up tools

### /online-program — Online Program
Alternate/parallel version of the cohort management suite. Same subpages plus a `/session-prep` page for preparing upcoming sessions. Decision needed on which one ships.

### /online-programs — Online Programs List
Top-level list of all programs. Parent page to individual program pages.

### /mentorships — Mentorships
1:1 mentorship client management. Track each client's session history, notes, progress, and payments. Auto-generates session wrap-up summaries from Zoom transcripts.
- `/mentorships/[clientId]` — individual client overview
- `/mentorships/[clientId]/sessions/[sessionId]/wrap-up` — session summary and follow-up

---

## Business / Entities

### /websites — Websites
Manage all connected websites. Tracks domain expiry, SSL expiry, monthly visitors, last published date, and tech stack per site. The hub for all website-related activity including blog, SEO, and deployment.

### /projects — Projects
Project management beyond the task board. Longer-running initiatives with goals, milestones, and linked resources.

### /business1 — Business 1 (placeholder)
Landing page for a business entity. Links out to the relevant Notion workspace and Slack channel. In Joe's build, this was Rio/WhatsApp Copilot. In Golden Claw, it is a sanitized placeholder for any business a customer runs.

### /business2 — Business 2 (placeholder)
Business entity page for a second company. Shows investments/assets held under the entity with example data. Designed to be customized for the customer's actual business structure.

### /iron-amethyst — Iron Amethyst (CUT)
Joe's holding company. Not for shipping.

### /heliconia-cantik — Heliconia Cantik (CUT)
Joe's Indonesian PT company. Not for shipping.

### /investments — Investments (CUT)
Joe's personal investment portfolio. Not for shipping.

### /personal-info — Personal Info (CUT)
Joe's personal contact info, addresses, and travel documents. Not for shipping.

### /bank-accounts — Bank Accounts (CUT)
Joe's personal bank account database. Not for shipping.

---

## Integrations

### /google — Google
Google Workspace integration hub. Access Gmail, Google Drive, Google Sheets, and Google Calendar from one place. Uses the `gog` CLI under the hood.

### /dropbox — Dropbox
Dropbox file browser and sync management. Browse folders, view recent activity, and manage sync status.

### /slack — Slack
Slack integration. Send messages to channels, manage notifications, and route alerts from agents to the right Slack channel.

### /airtable — Airtable
Airtable integration. Browse bases and tables, sync data, and use Airtable as a backend for custom workflows.

### /vercel — Vercel
Vercel deployment management. View deployment status, environment variables, and build logs for connected projects.

### /porkbun — Porkbun
Domain management via Porkbun API. View registered domains, renewal dates, DNS records, and transfer status.

---

## Specialty / Niche

### /smart-home — Smart Home
Philips Hue smart lighting control. Toggle lights, set scenes, and automate lighting based on time or system events.

### /spotify — Spotify
Spotify playback and playlist management. Mostly ambient — play music, browse recently played, control from the dashboard.

### /kling — Kling
AI video generation via the Kling API. Generate short video clips from text prompts or image inputs.

### /passive-ideas — Passive Ideas
Passive income idea tracker. Log ideas with status (new / researching / validated / building / live / rejected), notes, revenue estimates, and AI research assistance. Tracks the pipeline from idea to live product.

### /tokopedia — Tokopedia (CUT)
Indonesian e-commerce marketplace integration. Not relevant outside Indonesia.

### /venue-finder — Venue Finder
Searches for venues based on location, capacity, and requirements. Useful for event organizers and hospitality businesses.

### /machine-learning — Machine Learning (Self-Improvement Engine)
The system's self-improvement layer. Tracks a "personality radar" (how the AI behaves), feedback loops, knowledge base growth, error clusters, and evolution over time. Genes table shows active behavioral traits. Candidates table shows traits being tested. Essentially: the system learning from its own mistakes and successes.

### /story-engine — Story Engine
AI story generator for children. Input a child's name, age, theme, challenge, and moral — outputs a custom bedtime story with estimated reading time. Very Joe-specific, unlikely to ship broadly.

### /remotion — Remotion
Programmatic video generation using Remotion (React-based video framework). For creating animated data visualizations and branded video content.

### /stock-photo-ai — Stock Photo AI
AI-generated stock photos. Input a description and generate on-brand photography without licensing fees.

### /pexel — Pexels
Browse and import free stock photos from Pexels directly into the dashboard for use in content and design work.

### /unsplash — Unsplash
Browse and import free stock photos from Unsplash.

### /smart-sync — Smart Sync
The OpenClaw → Golden Claw synchronization tool. Manages the sync manifest: route renames, text replacements, label renames, and paths to skip. This is what powers the sanitization pipeline. Not a customer-facing feature — internal tooling.

### /littlebird — LittleBird
Market intelligence and research reports. Aggregates reports from external sources, stores them with titles and dates, and makes them searchable. Think of it as a private research feed.

### /clanforge — ClanForge
GameFi / NFT project analytics. Tracks game economy metrics, token performance, image assets, and palette data. Very niche — relevant only to gaming/Web3 projects.

### /santa — (see Content & Marketing section above)

### /nightcrawler — (see Content & Marketing section above)

### /office — Office
Agent registry viewer and team overview. Shows all running agents, their status, and uptime. Also includes a "lollipop" reward system — a fun counter that tracks positive outcomes from agent activity.

### /pitch-deck — Pitch Deck
AI-assisted pitch deck creation. Generate investor or sales presentation slides from a brief.

### /prompt-packs — Prompt Packs
Library of saved prompt templates. Organize, tag, and reuse prompts for common tasks. Useful for teams who want consistency in how they interact with AI agents.

### /video-processor — Video Processor
Video file processing pipeline. Compress, transcode, trim, or extract audio from video files.

### /disk-cleaner — Disk Cleaner
Disk space management utility. Identifies large files, old downloads, and cleanable caches. Frees up space on the host machine.

### /housing-search — Housing Search (CUT)
Joe's property search tool. Not for shipping.

### /villa-search — Villa Search (CUT)
Joe's Bali villa search tool. Not for shipping.

### /rio — Rio (WhatsApp AI Copilot)
The original WhatsApp AI Copilot product — a standalone business built on top of this system. In Golden Claw it appears as Business1. The page links to the Rio Notion workspace for full product context. Included as a template for how a customer could build their own product on All Sorted.
- `/rio/icps` — ideal customer profiles
- `/rio/store-leads` — lead database
- `/rio/waba-setup` — WhatsApp Business API setup

### /whoop — WHOOP (CUT)
Joe's personal health tracker integration. Not for shipping.

### /scrooge — (see Finance section above)

---

## Total Page Count

- **Top-level pages:** 87
- **Subpages:** ~40
- **Recommended CUT (Joe-specific):** iron-amethyst, heliconia-cantik, investments, personal-info, bank-accounts, tokopedia, housing-search, villa-search, whoop, story-engine, smart-sync
- **Recommended HOLD (niche/unclear):** clanforge, santa/nightcrawler (overlap), business1/business2 (needs customization), venue-finder, remotion, kling, passive-ideas, machine-learning, littlebird, office, disk-cleaner, cashclaw, scrooge, stock-photo-ai, pexel, unsplash, prompt-packs, video-processor, pitch-deck, mc-settings, bookkeeping (may overlap zoho)
- **Recommended SHIP:** everything else (~45 pages)
