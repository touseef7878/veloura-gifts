# The Veloura — Design System

Brand identity, visual direction, and design decisions for the website.

---

## Brand identity

**The Veloura** is a customized gifting business with a focus on birthdays, anniversaries, and personal celebrations. The brand promise is:

> *Wrapped with love, delivered with care.*

The tone is warm, discerning, and personal. Every gift is presented as considered and one-of-a-kind — not off-the-shelf. The primary customer contact path is Instagram DM, with WhatsApp as a secondary channel.

**Instagram:** [@the_veloura77](https://www.instagram.com/the_veloura77/)

---

## Visual direction

**Quiet-Luxury Gift Atelier** — editorial asymmetry, generous white space, and tactile material cues over a conventional e-commerce grid. The reference world is boutique packaging studios, independent fashion lookbooks, and fine stationery brands.

### Core principles

1. **Thoughtful over loud** — texture, whitespace, and material cues communicate premium quality without shouting.
2. **Asymmetric rhythm** — editorial offsets, cropped imagery, and generous margins prevent a template feel.
3. **Humanized luxury** — refined typography paired with warm microcopy so the brand feels personal, not distant.
4. **Clear next step** — every major section resolves into an Instagram or WhatsApp contact action.

---

## Color palette

| Name | Value | Usage |
|---|---|---|
| Veloura Teal | `#0D4D4A` | Primary brand color — header, CTAs, accents |
| Warm Ivory | `oklch(0.982 0.008 75)` | Page background — the unwrapped tissue paper feeling |
| Champagne Gold | `#C9A96E` | Occasion accents, hairline rules |
| Muted Blush | `#E8C9C1` | Birthday collection softener |
| Deep Ink | `#1A1612` | Primary text |
| Warm Stone | `#6B6560` | Supporting copy, labels |

Veloura Teal is the signature color. It is deep and calm against warm neutrals — ownable beyond generic blush-and-gold gifting palettes.

---

## Typography

| Role | Typeface | Style |
|---|---|---|
| Display headlines | Cormorant Garamond | Italic for emotional emphasis, regular for editorial titles |
| Navigation, body, labels, CTAs | Manrope | Regular, medium, semibold |

Both typefaces are self-hosted in `client/public/fonts/` via `@font-face` in `index.css`.

**Usage rules:**
- Oversized italic serif phrases appear sparingly as emotional punctuation, never as full body text.
- Small uppercase labels (`eyebrow` class) are used as packaging annotations — section numbering, category labels, source credits.
- Body copy is Manrope at a comfortable reading size with relaxed line height.

---

## Brand mark

A **ribbon-loop symbol** (custom SVG, the `RibbonMark` component) serves as the primary visual mark. It appears as:

- A favicon stamp
- A hero badge
- A section divider motif
- A closing section ornament

The wordmark treatment is `Ve<span>L</span>oura` — the capital L creates a subtle visual break that mirrors the ribbon detail. Paired with a small uppercase descriptor: `gift atelier`.

---

## Layout

The page is a one-page editorial story:

1. **Topline bar** — announcement strip with Instagram handle
2. **Header** — logo lockup, navigation, contact CTA
3. **Hero** — split composition: headline left, gift image right, ribbon stamp
4. **Intro band** — single brand statement with ribbon mark
5. **Collections** — three staggered cards (birthday, romance, corporate)
6. **Gallery** — filterable split-card feed of real orders
7. **Process** — three-step dark section
8. **Story** — brand narrative with secondary image
9. **Review** — quoted customer message with screenshot evidence
10. **Gift brief** — interactive brief selector → WhatsApp pre-fill
11. **Closing** — final contact invitation
12. **Footer** — logo, nav links, copyright

---

## Motion

All motion is CSS-based via `opacity` and `transform` only — no JavaScript animation libraries for page transitions.

- **Reveal on scroll:** `.reveal` elements are observed by `IntersectionObserver`. The `.is-visible` class triggers the CSS transition.
- **Staggered delays:** `.reveal--delay-1/2/3` offsets cards within the same viewport entry.
- **Hover states:** Images lift with `scale(1.03)` and slight brightness increase. Buttons press with `translateY(1px)`.
- **Scroll progress:** A hairline progress bar at the top of the page tracks scroll position via a CSS custom property `--scroll-progress`.
- **Reduced motion:** A `@media (prefers-reduced-motion: reduce)` rule disables all non-essential transitions.

---

## Imagery

All imagery is self-hosted. No external CDN or placeholder service.

**Photography direction:**
- Warm ivory paper surfaces
- Champagne and blush ribbon details
- Soft natural light, no harsh shadows
- Real baskets and hampers — not staged studio stock

**Gallery posts** are real order photographs from the business, presented with the original social captions. No invented customer claims or composite imagery.

---

## Voice and copy

| Context | Tone |
|---|---|
| Headlines | Intimate and confident — speaks to the recipient, not at them |
| CTAs | Invitation to co-create — "Create this feeling", "Tell us who it's for" |
| Microcopy | Specific and reassuring — no vague marketing filler |
| Labels | Packaging-style annotation — uppercase, minimal, precise |

**Example lines:**
- *"Make the moment look like them."*
- *"Choose a feeling. We'll wrap the rest."*
- *"Tell us who it's for."*
- *"We believe the best gifts are not just opened — they are remembered."*

---

## Accessibility standards

- All product and post images carry descriptive `alt` text.
- Decorative elements (`RibbonMark`, rules) use `aria-hidden="true"`.
- Gallery filters use `role="tab"`, `aria-selected`, and `aria-controls`.
- Gallery results use `aria-live="polite"`.
- All interactive elements have visible focus states.
- Color contrast meets WCAG AA against both ivory and teal surfaces.
- Navigation is fully keyboard accessible.
