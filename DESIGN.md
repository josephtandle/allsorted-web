# All Sorted — Design System

> Last updated: 2026-03-28
> Status: Production-ready. Use this as the single source of truth for all UI decisions.

---

## Brand Essence

All Sorted is the phrase a British tradesman uses when the job is done and the customer can stop worrying. That's the emotional core: relief, competence, closure. The design system must feel like handing someone a completed checklist — dark, serious, professional, with a single warm signal that says "done."

Target users are not startups. They are an HVAC owner in Manchester who works 10-hour days, a dentist in Edinburgh managing a four-chair practice, a plumber in Birmingham who's drowning in WhatsApp messages. They trust brands that look established, not experimental.

---

## 1. Color Palette

### The Primary Accent Choice: Warm Amber Gold

**Choice: Amber Gold (#D4870A / #F0A030)**

**Justification:** The alternatives — teal, forest green, deep amber — each have a problem for this audience. Teal reads as "tech SaaS." Forest green reads as "eco brand" or "finance." Deep amber alone is too dark and muted on dark backgrounds. Warm amber gold is the one color that universally means "complete," "premium," and "earned." Think a gold tick on a completed invoice, the patina of a well-run business, a brass plate on a solicitor's door. It reads as confident authority without feeling cold or startup-ish. It also provides strong contrast against a near-black background, making CTAs unmissable.

### Full Palette

| Role | Name | Hex |
|------|------|-----|
| Background | Graphite Night | `#0F1117` |
| Surface 1 | Deep Slate | `#171C27` |
| Surface 2 | Card Surface | `#1E2535` |
| Border | Subtle Border | `#2A3347` |
| Border Hover | Border Highlight | `#3A4A66` |
| Primary Accent | Amber Gold | `#F0A030` |
| Accent Hover | Amber Bright | `#F5B84A` |
| Accent Muted | Amber Dim | `#B07820` |
| Secondary Accent | Slate Blue | `#4A7AAF` |
| Secondary Muted | Slate Blue Dim | `#2E5A8A` |
| Text Primary | Warm White | `#F2F0EC` |
| Text Secondary | Cool Grey | `#9BA8BE` |
| Text Muted | Dim Grey | `#5E6B82` |
| Success | Sorted Green | `#3DAA6E` |
| Danger | Alert Red | `#E05252` |
| Overlay | Dark Scrim | `rgba(10, 12, 18, 0.75)` |

**Background rationale:** `#0F1117` is not pure black. It has a barely-perceptible cool blue undertone that gives depth and prevents the "void" feeling of `#000000`. It photographs well in marketing screenshots. It is darker than typical "dark mode" greys, which signals premium.

**Secondary accent rationale:** A slate blue (`#4A7AAF`) provides breathing room without fighting the gold. It is used for links, secondary badges, and informational UI — never for CTAs. Think of it as the business suit to gold's tie.

---

## 2. Typography

### Heading Font: Libre Baskerville (Google Fonts)

**Why not a geometric sans-serif:** Geometric fonts (DM Sans, Plus Jakarta Sans, Space Grotesk) all read as "YC-backed startup." SMB owners associate them subconsciously with apps they had to be talked into using. Libre Baskerville is a serif with warmth and authority — it looks like the masthead of a trade publication or a firm's letterhead. It says "established."

**Why not a heavy grotesque like Outfit or Barlow:** Those read as gym brands or logistics companies.

**Body Font: Inter (Google Fonts)**

Inter is the correct choice for body copy at this stage: it is optimised for screens, universally legible at 14–16px, pairs well with Baskerville without competing, and loads fast. It is not trendy — it is infrastructure. SMB owners do not notice Inter, which is exactly right.

### Font Sizes (rem base 16px)

| Token | Size | Usage |
|-------|------|-------|
| `--text-xs` | 0.75rem / 12px | Captions, badges, legal |
| `--text-sm` | 0.875rem / 14px | Small labels, metadata |
| `--text-base` | 1rem / 16px | Body copy |
| `--text-md` | 1.125rem / 18px | Lead paragraph, card body |
| `--text-lg` | 1.25rem / 20px | H3, section subheadings |
| `--text-xl` | 1.5rem / 24px | H2 |
| `--text-2xl` | 2rem / 32px | H1 (mobile) |
| `--text-3xl` | 2.75rem / 44px | H1 (tablet) |
| `--text-4xl` | 3.75rem / 60px | H1 (desktop) |
| `--text-5xl` | 5rem / 80px | Hero display (use sparingly) |

### Font Weights

| Token | Weight | Usage |
|-------|--------|-------|
| `--weight-normal` | 400 | Body, descriptions |
| `--weight-medium` | 500 | Labels, nav items, card titles |
| `--weight-semibold` | 600 | Subheadings, button text |
| `--weight-bold` | 700 | H2, H3 |
| `--weight-black` | 800 | H1, hero headline |

### Line Heights

| Token | Value |
|-------|-------|
| `--leading-tight` | 1.15 |
| `--leading-snug` | 1.35 |
| `--leading-normal` | 1.6 |
| `--leading-loose` | 1.75 |

H1–H2 use `--leading-tight`. Body uses `--leading-normal`. Captions use `--leading-snug`.

---

## 3. Spacing & Layout

### Max Content Width

`--max-width-content: 1160px`

Not 1280px or 1440px — those feel like enterprise dashboards. 1160px keeps copy columns at a readable line length (~70 characters at desktop) and feels intentional and contained. Marketing sections use this width with `margin: 0 auto`.

A narrower prose width is available for text-heavy sections: `--max-width-prose: 720px`.

### Section Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `--section-padding-y` | 96px | Standard section top/bottom |
| `--section-padding-y-lg` | 128px | Hero section |
| `--section-padding-y-sm` | 64px | Tight sections (testimonials) |
| `--section-padding-x` | 24px | Mobile horizontal padding |
| `--section-padding-x-lg` | 40px | Tablet+ horizontal padding |

### Spacing Scale (8px base)

| Token | Value |
|-------|-------|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 20px |
| `--space-6` | 24px |
| `--space-8` | 32px |
| `--space-10` | 40px |
| `--space-12` | 48px |
| `--space-16` | 64px |
| `--space-20` | 80px |
| `--space-24` | 96px |

### Border Radius

**Style: Slightly rounded — not sharp, not pill-shaped.**

`--radius-sm: 4px` — used on badges, tags, small chips
`--radius-md: 8px` — used on cards, inputs
`--radius-lg: 12px` — used on large cards, modal panels
`--radius-xl: 16px` — used on feature blocks, hero cards
`--radius-pill: 999px` — used on primary CTA buttons only

**Rationale:** Sharp corners (0px) read as government forms or legacy enterprise software. Pill buttons only on CTAs creates a strong visual focal point — the one rounded thing draws the eye. Cards with 8px radius feel clean without looking like a fintech product.

---

## 4. Component Style Direction

### CTA Button

**Primary CTA:** Amber gold background, near-black text, pill-shaped (999px radius), bold weight, 14px letter-spacing on uppercase label. No border.

```
background: var(--color-accent)
color: #0F1117
border-radius: var(--radius-pill)
padding: 14px 32px
font-weight: var(--weight-semibold)
font-size: var(--text-base)
```

Hover state: background shifts to `--color-accent-hover` (#F5B84A), adds a subtle gold box-shadow (`0 0 20px rgba(240, 160, 48, 0.35)`).

**Secondary CTA:** Transparent background, amber gold border (1.5px), amber gold text. Same shape. Hover: fills to amber at 15% opacity.

**Ghost CTA:** No border, `--text-secondary` color, underline on hover. Used for "learn more" type links only.

### Card Style

Cards are the primary content container. Style:

- Background: `--color-surface-2` (`#1E2535`)
- Border: 1px solid `--color-border` (`#2A3347`)
- Border radius: `--radius-lg` (12px)
- Padding: `--space-8` (32px)
- Hover: border color transitions to `--color-accent-muted` (#B07820), optionally with a very subtle amber glow on bottom edge

No drop shadows by default — the border does the work. Shadows feel lifted and floating; borders feel grounded, which is correct for this audience.

Feature/highlight cards can use a top border accent:
```
border-top: 2px solid var(--color-accent)
```

### Divider / Section Break Style

Avoid heavy full-width `<hr>` lines — they feel dated.

Preferred options in order of preference:

1. **Implicit spacing only** — white space between sections is the divider. Most sections use this.
2. **Narrow centered rule** — a `1px solid --color-border` line, 80px wide, centered, with large margin above and below. Used for testimonial transitions.
3. **Gold dot cluster** — three amber dots (`·  ·  ·`) centered, 24px apart, `--color-accent-muted`. Used sparingly, max once per page. Signals "more to come" without being a decoration.

No gradients as horizontal dividers. No decorative zigzags or patterns.

### Gradient Direction

One gradient is permitted for the hero section only:

**Hero background gradient:**
```
background: radial-gradient(ellipse at 60% 0%, rgba(240, 160, 48, 0.08) 0%, transparent 60%), #0F1117
```

This creates a very subtle warmth at the top-right — like light through an amber window — without being flashy. It says "there is something warm here" without announcing itself.

A second gradient can be used for the CTA section at the bottom of the page:
```
background: radial-gradient(ellipse at 50% 100%, rgba(240, 160, 48, 0.06) 0%, transparent 70%), #0F1117
```

No linear gradients on backgrounds. No gradient text. No animated gradients. This is a credibility product, not a VC pitch deck.

### Icons

Use a single icon library, no mixing. Recommended: Lucide React (clean, consistent, not cartoonish). All icons at 20px or 24px. Icon color: `--color-accent` for primary icons, `--color-text-secondary` for structural UI icons.

---

## 5. CSS Custom Properties

Ready to paste into a stylesheet. Import Libre Baskerville and Inter from Google Fonts before using.

```css
/* =========================================
   ALL SORTED — CSS Design Tokens
   Version: 1.0.0 | 2026-03-28
   ========================================= */

:root {

  /* --- Colors: Backgrounds --- */
  --color-bg:           #0F1117;
  --color-surface-1:    #171C27;
  --color-surface-2:    #1E2535;
  --color-overlay:      rgba(10, 12, 18, 0.75);

  /* --- Colors: Borders --- */
  --color-border:       #2A3347;
  --color-border-hover: #3A4A66;

  /* --- Colors: Primary Accent (Amber Gold) --- */
  --color-accent:       #F0A030;
  --color-accent-hover: #F5B84A;
  --color-accent-muted: #B07820;
  --color-accent-dim:   rgba(240, 160, 48, 0.12);

  /* --- Colors: Secondary Accent (Slate Blue) --- */
  --color-secondary:       #4A7AAF;
  --color-secondary-hover: #5A8FCA;
  --color-secondary-muted: #2E5A8A;
  --color-secondary-dim:   rgba(74, 122, 175, 0.12);

  /* --- Colors: Text --- */
  --color-text:         #F2F0EC;
  --color-text-secondary: #9BA8BE;
  --color-text-muted:   #5E6B82;
  --color-text-inverse: #0F1117;

  /* --- Colors: Status --- */
  --color-success:      #3DAA6E;
  --color-success-dim:  rgba(61, 170, 110, 0.12);
  --color-danger:       #E05252;
  --color-danger-dim:   rgba(224, 82, 82, 0.12);

  /* --- Typography: Font Families --- */
  --font-heading: 'Libre Baskerville', Georgia, 'Times New Roman', serif;
  --font-body:    'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono:    'JetBrains Mono', 'Fira Code', 'Courier New', monospace;

  /* --- Typography: Font Sizes --- */
  --text-xs:   0.75rem;     /* 12px */
  --text-sm:   0.875rem;    /* 14px */
  --text-base: 1rem;        /* 16px */
  --text-md:   1.125rem;    /* 18px */
  --text-lg:   1.25rem;     /* 20px */
  --text-xl:   1.5rem;      /* 24px */
  --text-2xl:  2rem;        /* 32px */
  --text-3xl:  2.75rem;     /* 44px */
  --text-4xl:  3.75rem;     /* 60px */
  --text-5xl:  5rem;        /* 80px */

  /* --- Typography: Font Weights --- */
  --weight-normal:   400;
  --weight-medium:   500;
  --weight-semibold: 600;
  --weight-bold:     700;
  --weight-black:    800;

  /* --- Typography: Line Heights --- */
  --leading-tight:  1.15;
  --leading-snug:   1.35;
  --leading-normal: 1.6;
  --leading-loose:  1.75;

  /* --- Typography: Letter Spacing --- */
  --tracking-tight:  -0.03em;
  --tracking-normal: 0em;
  --tracking-wide:   0.04em;
  --tracking-wider:  0.08em;

  /* --- Spacing --- */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;
  --space-8:  32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;

  /* --- Layout --- */
  --max-width-content: 1160px;
  --max-width-prose:   720px;
  --max-width-narrow:  560px;

  --section-padding-y:    96px;
  --section-padding-y-lg: 128px;
  --section-padding-y-sm: 64px;
  --section-padding-x:    24px;
  --section-padding-x-lg: 40px;

  /* --- Border Radius --- */
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   12px;
  --radius-xl:   16px;
  --radius-pill: 999px;

  /* --- Shadows --- */
  --shadow-card:    0 1px 3px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.3);
  --shadow-accent:  0 0 24px rgba(240, 160, 48, 0.25);
  --shadow-hover:   0 4px 16px rgba(0, 0, 0, 0.5);

  /* --- Transitions --- */
  --transition-fast:   150ms ease;
  --transition-normal: 250ms ease;
  --transition-slow:   400ms ease;

  /* --- Z-Index Scale --- */
  --z-below:   -1;
  --z-base:     0;
  --z-raised:   10;
  --z-overlay:  100;
  --z-modal:    200;
  --z-toast:    300;
  --z-top:      400;
}
```

---

## 6. Design Rules (Non-Negotiable)

1. **One accent color per page.** Gold is the only warm color. Everything else is cool-neutral. Do not introduce orange, yellow, or bronze anywhere.

2. **Headlines in Libre Baskerville.** All h1–h3 elements use `--font-heading`. Never use Inter for display text — it kills the authority signal.

3. **CTAs always in amber gold.** Never use slate blue for a primary action. Blue secondary CTAs are only for genuinely secondary actions (e.g., "view docs," "watch demo").

4. **No white backgrounds.** Every surface is a shade of the dark palette. Even if a section needs visual separation, use `--color-surface-1` not white.

5. **No more than two gradients per page.** Hero top, CTA section bottom. Both are radial, subtle, and amber-tinted.

6. **Spacing is generous.** Compress nothing. SMB owners do not need information density; they need clarity. If a section feels too airy, it is probably correct.

7. **No decorative illustrations or abstract shapes.** No blobs, no grid patterns, no floating geometric elements. Credibility comes from restraint.

8. **Success states use green, not gold.** Amber is the accent, not the status signal. `--color-success` (#3DAA6E) is used exclusively for completed states, confirmations, and checkmarks.

---

## 7. Voice Reflected in Visual Design

The brand copy is direct British English: "Your whole business, handled." "Nothing left to sort." The visual design should carry the same register — serious, warm, done. Not playful. Not minimalist-cold. Not enterprise-grey.

When in doubt: would a well-run accountancy firm put this on their wall? If yes, it is right for All Sorted.
