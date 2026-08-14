# The Veloura — Local Asset Manifest

Every visual asset used by the application is stored inside `client/public/`. The frontend references root-local paths, so the site does not require Manus storage, sandbox files, placeholder services, or external image URLs at runtime.

| Code path | Local file | Usage |
| --- | --- | --- |
| `/images/hero/veloura-hero.webp` | `client/public/images/hero/veloura-hero.webp` | Hero gift-box visual |
| `/images/brand/veloura-logo.png` | `client/public/images/brand/veloura-logo.png` | Header and footer mark |
| `/images/collections/veloura-birthday.jpg` | `client/public/images/collections/veloura-birthday.jpg` | Birthday collection |
| `/images/collections/veloura-romance.webp` | `client/public/images/collections/veloura-romance.webp` | Romance collection/story visual |
| `/images/collections/veloura-corporate.jpg` | `client/public/images/collections/veloura-corporate.jpg` | Corporate gifting collection |
| `/images/gallery/veloura-post-1-snacks.webp` | `client/public/images/gallery/veloura-post-1-snacks.webp` | Snack basket post 1 |
| `/images/gallery/veloura-post-2-luxury-setup.png` | `client/public/images/gallery/veloura-post-2-luxury-setup.png` | Luxury setup post 2 |
| `/images/gallery/veloura-post-3-snack-basket.png` | `client/public/images/gallery/veloura-post-3-snack-basket.png` | Snack hamper post 3 |
| `/images/gallery/veloura-post-4-handbag.png` | `client/public/images/gallery/veloura-post-4-handbag.png` | Handbag birthday post 4 |
| `/images/gallery/veloura-post-5-notes.png` | `client/public/images/gallery/veloura-post-5-notes.png` | Notes birthday post 5 |
| `/images/gallery/veloura-post-6-blue-birthday.webp` | `client/public/images/gallery/veloura-post-6-blue-birthday.webp` | Blue birthday post 6 |
| `/images/reviews/veloura-review-message.png` | `client/public/images/reviews/veloura-review-message.png` | Customer review evidence |
| `/favicon/favicon.svg` | `client/public/favicon/favicon.svg` | Browser SVG favicon |
| `/favicon/veloura-logo.png` | `client/public/favicon/veloura-logo.png` | PNG fallback favicon |
| `/favicon/apple-touch-icon.png` | `client/public/favicon/apple-touch-icon.png` | Apple touch icon |
| `/site.webmanifest` | `client/public/site.webmanifest` | Local PWA icon metadata |

The `client/public/images/additional/` folder contains staged images from earlier iterations that are not currently rendered but are kept locally for future reuse. The `client/public/fonts/` folder contains all Cormorant Garamond and Manrope font files referenced by `client/src/index.css`.
