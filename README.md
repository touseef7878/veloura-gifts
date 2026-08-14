# The Veloura — Wrapped with Love

The Veloura is a refined, frontend-only website for a customized gifting business. It presents the brand story, occasion-based gift inspiration, authentic supplied post imagery, customer-provided social proof, and direct ordering paths through Instagram and WhatsApp.

The project is intentionally static. There is no database, authentication, payment processing, admin panel, product API, or server-side order storage. Customers are guided to contact the business directly so the owner can discuss the occasion, budget, delivery timing, and customization details personally.

> **Current published site:** [velouragft-e2krtk3j.manus.space](https://velouragft-e2krtk3j.manus.space/)

## 1. What is included

The current page is a single responsive lookbook-style landing page with a quiet-luxury visual direction. It includes an editorial hero section, occasion collections, a compact split gallery with six supplied post images and captions, smooth anchor scrolling, a scroll-progress indicator, IntersectionObserver fade-in reveals, reduced-motion support, a verified Instagram review section, a guided gift-brief selector, Instagram and WhatsApp contact CTAs, mobile navigation, metadata, and the supplied VeLoura logo.

The review section uses one customer message that was visible in the public Instagram “REVIEWS 🔥” highlight and is labelled as customer-provided content because no customer name was visible. Do not add invented names, ratings, testimonials, or review wording. Add new reviews only when the business has permission to publish them and the source can be identified.

## 2. Technology stack

| Area | Technology used | Project role |
| --- | --- | --- |
| UI framework | React 19 + React DOM [1] | Component-based page rendering and interactive state |
| Build tool | Vite 7 [2] | Local development server, HMR, and production bundling |
| Language | TypeScript | Typed React and project source code |
| Styling | Tailwind CSS 4 [3] plus project CSS tokens | Global theme, responsive layout, typography, motion, and brand styling |
| Components | shadcn/ui-style primitives and Radix UI packages | Reusable UI primitives supplied by the scaffold |
| Icons | lucide-react [4] | Instagram, WhatsApp, navigation, gift, arrow, and process icons |
| Routing | Wouter | Lightweight client-side route handling |
| Motion | IntersectionObserver + CSS transitions | Reveal animations, hover motion, scroll progress, and reduced-motion behavior |
| Hosting | Manus WebDev static hosting | Published static frontend with a project-managed domain |

The generated project also contains minimal `server/` and `shared/` compatibility files from the static scaffold. They do not provide application backend functionality. The editable website is in `client/`.

## 3. Requirements

Install the following before running the project locally:

| Requirement | Recommended version | Check command |
| --- | --- | --- |
| Node.js | 20 or newer | `node --version` |
| pnpm | 10.x, matching the project package manager | `pnpm --version` |
| Git | Any current version | `git --version` |

The project includes `pnpm-lock.yaml`, so use pnpm for the most reproducible install. If you prefer npm or yarn, regenerate the corresponding lockfile and test the build before committing it.

## 4. Local setup

From the project root, install dependencies:

```bash
pnpm install
```

Start the development server with hot reload:

```bash
pnpm dev
```

Open the local URL printed by Vite. In the standard project configuration it is:

```text
http://localhost:3000/
```

The page also works with the route used by the WebDev preview:

```text
http://localhost:3000/?from_webdev=1
```

Stop the development server with `Ctrl+C`.

## 5. Validation and production commands

Run the TypeScript check before sharing changes:

```bash
pnpm check
```

Create the production bundle:

```bash
pnpm build
```

Preview the Vite production output locally:

```bash
pnpm preview
```

The project also has a production start command:

```bash
pnpm start
```

Run `pnpm build` first because `pnpm start` serves the generated `dist/` output through the scaffold’s Express compatibility server. Format source files with:

```bash
pnpm format
```

The normal pre-delivery sequence is:

```bash
pnpm check && pnpm build
```

## 6. Project structure

```text
veloura-gifts/
├── client/
│   ├── index.html                 # Document title, SEO metadata, font loading, favicon
│   ├── public/                    # Small public configuration assets only
│   │   └── favicon.svg
│   └── src/
│       ├── App.tsx                # Theme provider, routing, and top-level layout
│       ├── index.css              # Global tokens, brand styles, responsive CSS, motion
│       ├── main.tsx                # React entry point
│       ├── pages/
│       │   ├── Home.tsx            # Main website content and interactions
│       │   └── NotFound.tsx        # Fallback route
│       ├── components/             # Shared UI and scaffold components
│       ├── contexts/               # Theme context
│       ├── hooks/                  # Reusable React hooks
│       └── lib/                    # Utility helpers
├── ideas.md                        # Chosen visual direction and brand decisions
├── todo.md                         # Enhancement and maintenance checklist
├── package.json                    # Scripts and dependencies
├── pnpm-lock.yaml                  # Locked dependency versions
├── server/                         # Static-template compatibility server only
└── shared/                         # Static-template compatibility types/constants
```

## 7. Where to customize the website

Most business-owner changes can be made in `client/src/pages/Home.tsx`. Use this map to find the right section quickly:

| What you want to change | File | What to edit |
| --- | --- | --- |
| Instagram profile link | `client/src/pages/Home.tsx` | Update `instagramUrl` |
| WhatsApp order link | `client/src/pages/Home.tsx` | Update `whatsappUrl` with the real international phone number |
| Gift-brief WhatsApp message | `client/src/pages/Home.tsx` | Update `briefUrl` or the selected brief options |
| Hero headline and intro copy | `client/src/pages/Home.tsx` | Edit the `hero-section` markup |
| Occasion collection cards | `client/src/pages/Home.tsx` | Edit the `collections` array |
| Supplied post captions and images | `client/src/pages/Home.tsx` | Edit the `orderGallery` array |
| Gallery filter names | `client/src/pages/Home.tsx` | Edit `galleryFilters` |
| Review quote and source link | `client/src/pages/Home.tsx` | Edit `reviewQuote` and the review highlight link |
| Brand colors, fonts, spacing, motion | `client/src/index.css` | Edit the Veloura variables and section classes |
| Page title and SEO description | `client/index.html` | Edit `<title>` and the description meta tag |
| Favicon | `client/index.html` and `client/public/favicon.svg` | Replace the favicon asset and update the link if needed |
| Routes and theme provider | `client/src/App.tsx` | Add or change public routes and theme settings |

### Updating the WhatsApp number

The current project keeps WhatsApp as a frontend contact action, but the generic link must be replaced before launch. Use the international number without spaces, brackets, or the leading `+` in the `wa.me` path:

```tsx
const whatsappUrl =
  "https://wa.me/923001234567?text=Hi%20The%20Veloura%2C%20I%27d%20love%20to%20create%20a%20gift%20with%20you.";
```

Update the same logic used by the guided gift brief if you want those messages to go to a specific business number as well.

### Adding a new post to the gallery

Add a new object to the `orderGallery` array. Every object should have a unique visual entry and a descriptive `alt` value:

```tsx
{
  category: "Birthday gifts",
  title: "A short editorial title.",
  caption: `The exact caption approved by the business.

Add a second paragraph when the original post contains one.`,
  image: "/manus-storage/your-uploaded-image.png",
  alt: "A concise description of the gift basket image",
  crop: "clean",
},
```

The card key is intentionally based on the category and array index so repeated post titles can render safely. If the gallery becomes data-driven later, replace that with a stable unique post ID.

## 8. Image, icon, and font workflow

All visual assets required by the website are now stored inside the repository so the project can be downloaded, cloned, and served without access to the Manus sandbox or a temporary asset host. The local asset structure is:

```text
client/public/
├── favicon/
│   ├── apple-touch-icon.png
│   ├── favicon.svg
│   └── veloura-logo.png
├── fonts/
│   ├── cormorant-*.ttf
│   └── manrope-*.ttf
└── images/
    ├── additional/
    ├── brand/
    ├── collections/
    ├── gallery/
    ├── hero/
    └── reviews/
```

In JSX and CSS, reference these assets with root-local paths such as:

```tsx
<img src="/images/gallery/veloura-post-1-snacks.png" alt="Customized snack basket" />
```

```css
src: url("/fonts/manrope-400.ttf") format("truetype");
```

The downloadable `veloura-asset-pack.zip` from the previous handoff remains useful as an original-source backup, but the website no longer depends on it at runtime. The project’s `ASSET_MANIFEST.md` lists every current local path and its purpose. When adding a new image, copy it into the appropriate `client/public/images/` subfolder and reference it with a local `/images/...` path. Do not use Manus storage paths, sandbox paths, placeholder services, or external image URLs in application code.

## 9. Design system and motion notes

The chosen visual direction is **Quiet-Luxury Gift Atelier**. The page uses warm ivory paper, Veloura Teal, champagne-gold accents, Cormorant Garamond for display type, and Manrope for utility copy. The design intentionally favors asymmetric editorial sections over a conventional centered e-commerce grid.

The main motion system is in `client/src/index.css` and `client/src/pages/Home.tsx`. On mount, the page observes `.reveal` elements with `IntersectionObserver` and adds `.is-visible` when they enter the viewport. CSS handles the opacity and transform transition. A `prefers-reduced-motion` media rule disables non-essential animation for users who request reduced motion. Keep future transitions focused on `opacity` and `transform` for smooth performance.

## 10. Accessibility and content responsibilities

Keep meaningful `alt` text on every product or post image. Decorative ribbon marks should retain an empty `alt` attribute or `aria-hidden="true"`. Preserve visible keyboard focus states when changing buttons or links. Keep color contrast readable against both ivory and teal surfaces.

The project does not verify ownership, permission, or accuracy of newly supplied content. Before publishing additional customer screenshots, reviews, names, or messages, confirm that the business has permission to display them. Never create synthetic reviews or imply that a product, delivery, or rating is guaranteed when the source does not support that claim.

## 11. Deployment notes

This project is configured for Manus WebDev static hosting. Saving a project checkpoint publishes the current project version when auto-publish is enabled. The current deployment domain is shown near the top of this document and may change if the project domain is modified in the management interface.

For a normal code handoff, commit the source files, `package.json`, `pnpm-lock.yaml`, and documentation. The `dist/` directory is generated by `pnpm build` and should not be edited manually. If you use another host, confirm that the host supports Vite’s built output and the project’s client-side fallback behavior.

## 12. Troubleshooting

| Symptom | Likely cause | What to try |
| --- | --- | --- |
| `pnpm` is not found | pnpm is not installed or is not on `PATH` | Enable/install pnpm 10, then rerun `pnpm install` |
| Images are missing | A local path is incorrect or the file is outside `client/public/` | Confirm the file exists under `client/public/` and use its root-local `/images/...` or `/favicon/...` path |
| The page is blank | A TypeScript or runtime error exists | Run `pnpm check`, inspect the browser console, and confirm the route is `/` |
| The page renders old code | Vite cache or stale development server | Stop and restart `pnpm dev`, then hard-refresh the browser |
| WhatsApp opens the wrong place | The placeholder link is still configured | Replace `whatsappUrl` and `briefUrl` with the real international number |
| A post disappears or duplicates | Gallery keys or filters are unstable | Keep the category/index key or add a stable unique post ID |
| Fonts look different | Google Fonts cannot be reached or the import was changed | Check the font links in `client/index.html` and keep the serif/body fallbacks |

## 13. Final handoff checklist

Before publishing a customized version, replace the placeholder WhatsApp number, confirm the Instagram URL, check that every supplied image has permission to be displayed, run `pnpm check && pnpm build`, and test the page at both mobile and desktop widths. Review the live hero, gallery filters, review source link, guided brief, and all contact buttons once with the business owner. For an offline handoff, also run the repository asset audit described in `ASSET_MANIFEST.md` and confirm there are no external image, icon, favicon, or font URLs in `client/`.

## References

[1]: https://react.dev/learn "React documentation"

[2]: https://vite.dev/guide/ "Vite documentation"

[3]: https://tailwindcss.com/docs/installation "Tailwind CSS documentation"

[4]: https://lucide.dev/guide/packages/lucide-react "Lucide React documentation"
