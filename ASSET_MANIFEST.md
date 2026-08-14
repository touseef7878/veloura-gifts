# The Veloura — Asset Manifest

All visual assets are self-hosted in `client/public/`. The site references root-local paths and has no runtime dependency on any external image host or CDN.

---

## Images in use

| Path in code | Local file | Purpose |
|---|---|---|
| `/images/hero/veloura-hero.webp` | `client/public/images/hero/veloura-hero.webp` | Hero section — gift box with ribbon |
| `/images/brand/veloura-logo.png` | `client/public/images/brand/veloura-logo.png` | Header and footer logo mark |
| `/images/collections/veloura-birthday.jpg` | `client/public/images/collections/veloura-birthday.jpg` | Birthday collection card |
| `/images/collections/veloura-romance.webp` | `client/public/images/collections/veloura-romance.webp` | Romance collection card + story section |
| `/images/collections/veloura-corporate.jpg` | `client/public/images/collections/veloura-corporate.jpg` | Corporate gifting collection card |
| `/images/gallery/veloura-post-1-snacks.webp` | `client/public/images/gallery/veloura-post-1-snacks.webp` | Gallery post 1 — snack basket |
| `/images/gallery/veloura-post-2-luxury-setup.png` | `client/public/images/gallery/veloura-post-2-luxury-setup.png` | Gallery post 2 — luxury birthday setup |
| `/images/gallery/veloura-post-3-snack-basket.png` | `client/public/images/gallery/veloura-post-3-snack-basket.png` | Gallery post 3 — snack hamper |
| `/images/gallery/veloura-post-4-handbag.png` | `client/public/images/gallery/veloura-post-4-handbag.png` | Gallery post 4 — birthday basket with handbag |
| `/images/gallery/veloura-post-5-notes.png` | `client/public/images/gallery/veloura-post-5-notes.png` | Gallery post 5 — basket with notes |
| `/images/gallery/veloura-post-6-blue-birthday.webp` | `client/public/images/gallery/veloura-post-6-blue-birthday.webp` | Gallery post 6 — blue ribbon birthday basket |
| `/images/reviews/veloura-review-message.png` | `client/public/images/reviews/veloura-review-message.png` | Customer review screenshot |

## Favicon and PWA icons

| Path in code | Local file | Purpose |
|---|---|---|
| `/favicon/favicon.svg` | `client/public/favicon/favicon.svg` | Primary SVG favicon |
| `/favicon/veloura-logo.png` | `client/public/favicon/veloura-logo.png` | PNG favicon fallback |
| `/favicon/apple-touch-icon.png` | `client/public/favicon/apple-touch-icon.png` | Apple touch icon (180×180) |
| `/site.webmanifest` | `client/public/site.webmanifest` | Web app manifest |

## Fonts

All fonts are self-hosted in `client/public/fonts/` and loaded via `@font-face` in `client/src/index.css`. No external font service is used.

| File | Family | Weight | Style |
|---|---|---|---|
| `cormorant-normal-400.ttf` | Cormorant Garamond | 400 | Normal |
| `cormorant-normal-500.ttf` | Cormorant Garamond | 500 | Normal |
| `cormorant-normal-600.ttf` | Cormorant Garamond | 600 | Normal |
| `cormorant-italic-400.ttf` | Cormorant Garamond | 400 | Italic |
| `cormorant-italic-500.ttf` | Cormorant Garamond | 500 | Italic |
| `manrope-400.ttf` | Manrope | 400 | Normal |
| `manrope-500.ttf` | Manrope | 500 | Normal |
| `manrope-600.ttf` | Manrope | 600 | Normal |
| `manrope-700.ttf` | Manrope | 700 | Normal |
| `manrope-800.ttf` | Manrope | 800 | Normal |

## Staged assets (not currently rendered)

The `client/public/images/additional/` folder contains supplementary imagery available for future use but not currently referenced in code.

| File | Description |
|---|---|
| `veloura-birthday-basket.webp` | Birthday basket — alternate angle |
| `veloura-birthday-setup.png` | Birthday setup — wider composition |
| `veloura-gift-basket.webp` | General gift basket |
| `veloura-snack-basket-clean.png` | Snack basket — clean background |
| `veloura-snack-basket-color.webp` | Snack basket — with color props |
| `veloura-snack-basket-pink.webp` | Snack basket — pink ribbon variant |
| `veloura-snack-basket-ribbon.webp` | Snack basket — ribbon detail |

---

## Adding new assets

1. Place the file in the appropriate `client/public/images/` subfolder.
2. Reference it with a root-local path: `/images/category/filename.ext`
3. Add a row to this manifest.
4. Always include a descriptive `alt` attribute in the JSX.
