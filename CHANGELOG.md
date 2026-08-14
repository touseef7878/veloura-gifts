# Changelog

All notable changes to this project are documented here.

---

## v1.0.0 — Initial release

### Added

- Single-page lookbook website with quiet-luxury editorial visual direction
- Responsive hero section with split layout, ribbon stamp, and scroll-progress indicator
- Occasion collections — Birthday, Romance, Corporate — with staggered editorial cards
- Real-orders gallery with six authentic post images, original captions, and client-side occasion filters
- IntersectionObserver fade-in reveal system with staggered delays and `prefers-reduced-motion` support
- Three-step process section explaining the ordering flow
- Brand story section with secondary imagery
- Customer review section using a verified Instagram highlight message with screenshot evidence
- Interactive gift-brief selector that pre-fills a WhatsApp message without storing any data
- Instagram and WhatsApp contact CTAs throughout all major sections
- Mobile navigation with accessible open/close toggle
- Self-hosted Cormorant Garamond and Manrope fonts via `@font-face`
- All imagery self-hosted in `client/public/images/` — no external CDN dependency
- Full PWA manifest, SVG favicon, PNG fallback, and Apple touch icon
- SEO metadata in `index.html`
- Tailwind CSS 4 design token system with Veloura brand colors, typography scale, and spacing
- Accessible gallery filters using `role="tab"`, `aria-selected`, and `aria-live`
- Production build pipeline via Vite 7 with TypeScript type checking
- Minimal Express server for production static serving
