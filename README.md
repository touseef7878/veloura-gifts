# The Veloura

A refined, single-page marketing website for a customized gifting business. The site presents the brand story, occasion-based collections, a real-orders gallery, social proof, and direct contact paths via Instagram and WhatsApp.

The project is intentionally static — no database, no authentication, no payment processing. All ordering happens through a direct conversation with the business owner.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite 7 |
| Styling | Tailwind CSS 4 + custom CSS design tokens |
| UI primitives | Radix UI / shadcn-style components |
| Icons | Lucide React |
| Routing | Wouter |
| Package manager | pnpm 10 |

---

## Getting started

**Prerequisites:** Node.js 20+, pnpm 10+

```bash
# Install dependencies
pnpm install

# Start development server (http://localhost:3000)
pnpm dev

# Type check
pnpm check

# Production build → dist/public/
pnpm build

# Preview production build locally
pnpm preview

# Format source files
pnpm format
```

---

## Project structure

```
veloura-gifts/
├── client/
│   ├── index.html          # Page title, meta tags, favicon links
│   ├── public/
│   │   ├── favicon/        # SVG favicon, PNG fallback, Apple touch icon
│   │   ├── fonts/          # Self-hosted Cormorant Garamond + Manrope
│   │   └── images/         # All site imagery (brand, hero, collections, gallery, reviews)
│   └── src/
│       ├── App.tsx          # Router, theme provider, top-level layout
│       ├── index.css        # Design tokens, brand styles, responsive layout, motion
│       ├── main.tsx         # React entry point
│       ├── pages/
│       │   ├── Home.tsx     # All page sections and interactions
│       │   └── NotFound.tsx # 404 fallback
│       ├── components/      # Shared UI components (Radix-based primitives)
│       ├── contexts/        # Theme context
│       ├── hooks/           # Reusable React hooks
│       └── lib/             # Utility helpers
├── server/                  # Minimal Express server for production serving
├── shared/                  # Shared type definitions
├── DESIGN.md                # Brand identity, design system, and visual direction
├── ASSET_MANIFEST.md        # Every local asset path with its purpose
├── CHANGELOG.md             # Version history and feature log
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## Customization reference

All content changes live in `client/src/pages/Home.tsx`.

| What to change | Location | What to edit |
|---|---|---|
| Instagram URL | `Home.tsx` top | `instagramUrl` constant |
| WhatsApp number | `Home.tsx` top | `whatsappUrl` — use international format without `+` |
| Hero headline and body copy | `Home.tsx` | `hero-section` JSX |
| Collection cards | `Home.tsx` | `collections` array |
| Gallery posts and captions | `Home.tsx` | `orderGallery` array |
| Gallery filter labels | `Home.tsx` | `galleryFilters` array |
| Review quote | `Home.tsx` | `reviewQuote` constant and review highlight link |
| Gift brief options | `Home.tsx` | The brief options array in the `gift-brief-section` |
| Colors, fonts, spacing | `client/src/index.css` | Veloura CSS custom properties |
| Page title and SEO meta | `client/index.html` | `<title>` and `<meta name="description">` |
| Favicon | `client/index.html` + `client/public/favicon/` | Replace assets and update `<link>` tags |

### WhatsApp number

Replace the placeholder in `whatsappUrl` with the real business number before going live. Use the international format without spaces or the leading `+`:

```tsx
const whatsappUrl =
  "https://wa.me/923001234567?text=Hi%20The%20Veloura%2C%20I%27d%20love%20to%20create%20a%20gift%20with%20you.";
```

Apply the same number to the `briefUrl` logic so guided brief messages also route correctly.

### Adding a gallery post

Append a new entry to the `orderGallery` array in `Home.tsx`:

```tsx
{
  category: "Birthday gifts",      // must match a value in galleryFilters
  title: "Short editorial title.",
  caption: `Full post caption here.

Second paragraph if the original post had one.`,
  image: "/images/gallery/your-image.webp",
  alt: "Descriptive alt text for the image",
  crop: "clean",
},
```

Copy the image into `client/public/images/gallery/` and use a root-local `/images/...` path. Never use external image URLs in application code.

---

## Images and assets

All assets are self-hosted inside `client/public/`. See `ASSET_MANIFEST.md` for the full list of paths and their purpose.

When adding images, place them in the appropriate subfolder under `client/public/images/` and reference them with a root-local path:

```tsx
<img src="/images/gallery/your-image.webp" alt="..." />
```

Fonts are self-hosted in `client/public/fonts/` and loaded via `@font-face` in `index.css`.

---

## Design system

The visual direction is **Quiet-Luxury Gift Atelier** — warm ivory surfaces, Veloura Teal (`#0D4D4A`), champagne-gold accents, and an editorial serif/sans type pairing. See `DESIGN.md` for the full brand and design specification.

Motion uses `IntersectionObserver` + CSS `opacity`/`transform` transitions. A `prefers-reduced-motion` rule disables non-essential animation for users who request it.

---

## Deployment

Run `pnpm build` to generate the production bundle in `dist/public/`. Deploy that folder to any static host — Netlify, Vercel, Cloudflare Pages, or a custom server. Configure the host to serve `index.html` as the fallback for all routes to support client-side navigation.

```bash
pnpm check && pnpm build
```

---

## Accessibility

- All images carry meaningful `alt` text. Decorative elements use `aria-hidden="true"`.
- Gallery filters use `role="tab"` and `aria-selected` for screen reader support.
- The gallery results container uses `aria-live="polite"`.
- Keyboard focus states are visible across all interactive elements.
- Color contrast is maintained against both ivory and teal backgrounds.

---

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| `pnpm` not found | pnpm not installed | Install pnpm 10: `npm i -g pnpm` |
| Images not loading | Wrong path or file missing from `public/` | Check `ASSET_MANIFEST.md` and confirm the file is in `client/public/` |
| Blank page | TypeScript or runtime error | Run `pnpm check` and inspect the browser console |
| Old code showing | Stale Vite cache | Restart `pnpm dev` and hard-refresh |
| WhatsApp opens wrong number | Placeholder link not updated | Replace `whatsappUrl` with the real international number |
| Fonts look wrong | Font file path issue | Check `@font-face` declarations in `index.css` |

---

## References

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide React](https://lucide.dev/)
