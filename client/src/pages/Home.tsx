/* The Veloura style: asymmetric boutique lookbook composition, warm ivory negative space, editorial serif moments, and calm tactile interactions. */

import { useEffect, useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Gift,
  Heart,
  Instagram,
  Menu,
  MessageCircle,
  Sparkles,
  X,
} from "lucide-react";

const instagramUrl = "https://www.instagram.com/the_veloura77/";
const whatsappUrl =
  "https://wa.me/?text=Hi%20The%20Veloura%2C%20I%27d%20love%20to%20create%20a%20gift%20with%20you.";

function RibbonMark({ className = "" }: { className?: string }) {
  return (
    <span className={`ribbon-mark ${className}`} aria-hidden="true">
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.8 5.4C19.5 1.8 10.4 3.5 8.9 9.3c-1.2 4.7 3 8.3 7.5 6.3 3.2-1.4 4.5-5.7 1.7-7.8-3-2.3-8.7-.2-10.5 4.2-1.9 4.6.9 10.3 5.8 11.1 4.3.7 8.6-2 10.1-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M21.6 18.6c2.7 2.3 4.6 4 6 7.7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    </span>
  );
}

const collections = [
  {
    label: "01 / Celebrate",
    title: "Birthday, made personal.",
    description: "Bright little details, wrapped around the person who makes life sweeter.",
    image: "/manus-storage/veloura-birthday_39b99753.jpg",
    alt: "A blush and ivory birthday gift arrangement",
    accent: "blush",
  },
  {
    label: "02 / Remember",
    title: "Anniversaries with a little more feeling.",
    description: "Romantic, considered, and finished with the kind of detail they keep.",
    image: "/manus-storage/veloura-romance_129204c5.jpg",
    alt: "A romantic anniversary gift box with a ribbon",
    accent: "teal",
  },
  {
    label: "03 / Appreciate",
    title: "A thoughtful thank-you.",
    description: "Quietly elevated gift sets for teams, clients, and the people behind the work.",
    image: "/manus-storage/veloura-corporate_514cf6a7.jpg",
    alt: "A refined corporate appreciation gift set",
    accent: "gold",
  },
];

const orderGallery = [
  {
    category: "Snack baskets",
    title: "The gift everyone secretly wants.",
    description: "A custom snack basket packed with their favorites, a little softness, and a lot of care.",
    image: "/manus-storage/veloura-snack-basket-pink_4442c60d.png",
    alt: "Pink snack basket with a teddy bear and chocolates",
  },
  {
    category: "Birthday",
    title: "A birthday worth remembering.",
    description: "A celebration built around the details that make their day feel entirely theirs.",
    image: "/manus-storage/veloura-birthday-basket_9e64508e.png",
    alt: "Colorful birthday snack basket with candles and gift notes",
  },
  {
    category: "Surprise",
    title: "Packed around their favorites.",
    description: "Thoughtful treats, playful color, and one very personal reason to smile.",
    image: "/manus-storage/veloura-snack-basket-color_5e39f782.png",
    alt: "Colorful customized snack basket",
  },
  {
    category: "Snack baskets",
    title: "Beautifully packed, ready to surprise.",
    description: "A ribboned hamper that makes the reveal feel just as good as what is inside.",
    image: "/manus-storage/veloura-snack-basket-ribbon_2cf3f896.png",
    alt: "Ribbon-wrapped snack basket with colorful treats",
  },
  {
    category: "Birthday",
    title: "A little celebration in a basket.",
    description: "Personal notes, favorite snacks, and the kind of color that belongs to birthdays.",
    image: "/manus-storage/veloura-birthday-setup_199874b3.png",
    alt: "Birthday gift basket with handwritten cards and blue ribbons",
  },
  {
    category: "Surprise",
    title: "The details do the talking.",
    description: "A customized hamper made to say what a quick message cannot.",
    image: "/manus-storage/veloura-gift-basket_d9615e18.png",
    alt: "Gold-ribbon gift basket with snacks and a birthday card",
  },
];

const galleryFilters = ["All", "Birthday", "Snack baskets", "Surprise"];

const reviewQuote =
  "10/10 for this amazing basket! The packaging is super cute and presentable. Loved how they added personal notes + snacks + bag all in one basket. It looked premium but still felt personal. Good work with gd packaging thank you so much @VeLoura";

function ContactButton({ type = "instagram", compact = false }: { type?: "instagram" | "whatsapp"; compact?: boolean }) {
  const isInstagram = type === "instagram";
  return (
    <a
      className={`contact-button ${compact ? "contact-button--compact" : ""} ${isInstagram ? "contact-button--dark" : "contact-button--light"}`}
      href={isInstagram ? instagramUrl : whatsappUrl}
      target="_blank"
      rel="noreferrer"
    >
      {isInstagram ? <Instagram size={compact ? 15 : 17} /> : <MessageCircle size={compact ? 15 : 17} />}
      <span>{isInstagram ? "Message on Instagram" : "Chat on WhatsApp"}</span>
      <ArrowUpRight className="contact-button__arrow" size={compact ? 15 : 17} />
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeOccasion, setActiveOccasion] = useState("All");
  const [brief, setBrief] = useState("Birthday surprise");

  const filteredOrders = useMemo(
    () => activeOccasion === "All" ? orderGallery : orderGallery.filter((order) => order.category === activeOccasion),
    [activeOccasion],
  );

  useEffect(() => {
    document.documentElement.classList.add("motion-ready");
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    revealItems.forEach((item) => observer.observe(item));

    const updateScrollProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      document.documentElement.style.setProperty("--scroll-progress", `${progress}%`);
    };
    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateScrollProgress);
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const briefUrl = `https://wa.me/?text=${encodeURIComponent(`Hi The Veloura, I would love help creating a ${brief.toLowerCase()}.`)}`;

  return (
    <div className="site-shell">
      <div className="scroll-progress" aria-hidden="true" />
      <div className="topline">
        <p>Customized gifting, wrapped with love</p>
        <a href={instagramUrl} target="_blank" rel="noreferrer">
          @the_veloura77 <ArrowUpRight size={13} />
        </a>
      </div>

      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="The Veloura home">
          <img src="/manus-storage/veloura-logo_a1f2b98f.png" alt="The Veloura logo" className="brand-lockup__mark" />
          <span className="brand-lockup__name">Ve<span>L</span>oura</span>
          <span className="brand-lockup__descriptor">gift atelier</span>
        </a>

        <nav className={`site-nav ${menuOpen ? "site-nav--open" : ""}`} aria-label="Main navigation">
          <a href="#gallery" onClick={closeMenu}>The edit</a>
          <a href="#collections" onClick={closeMenu}>Collections</a>
          <a href="#process" onClick={closeMenu}>Our process</a>
          <a href="#story" onClick={closeMenu}>The Veloura story</a>
          <a href="#reviews" onClick={closeMenu}>Reviews</a>
          <div className="site-nav__mobile-contact">
            <ContactButton compact type="instagram" />
          </div>
        </nav>

        <div className="header-actions">
          <ContactButton compact type="instagram" />
          <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow"><Sparkles size={14} /> Curated for the moment</p>
            <h1>Make the moment <em>look like them.</em></h1>
            <p className="hero-copy__body">Personalized gifts with a little more feeling. Thoughtfully curated, beautifully wrapped, and delivered with care.</p>
            <div className="hero-actions">
              <ContactButton type="instagram" />
              <a className="text-link" href="#collections">Explore the edit <ArrowDownRight size={18} /></a>
            </div>
            <div className="hero-note">
              <span className="hero-note__line" />
              <p>For birthdays, anniversaries<br />and every beautiful in-between.</p>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-visual__frame">
              <img src="/manus-storage/veloura-hero_b45c66e8.png" alt="An ivory gift box with a champagne ribbon and soft florals" />
            </div>
            <div className="hero-stamp"><RibbonMark className="ribbon-mark--stamp" /><span>Made<br />memorable</span></div>
            <p className="hero-visual__caption">01 — The Veloura edit</p>
          </div>
        </section>

        <section className="intro-band" aria-label="Brand statement">
          <div className="intro-band__symbol"><RibbonMark className="ribbon-mark--section" /></div>
          <p>We believe the best gifts are not just opened — <em>they are remembered.</em></p>
          <span className="intro-band__rule" />
        </section>

        <section className="collections-section section-shell" id="collections">
          <div className="section-heading">
            <div>
              <p className="eyebrow">The occasion edit</p>
              <h2>Choose a feeling.<br /><em>We’ll wrap the rest.</em></h2>
            </div>
            <p className="section-heading__aside">From one-of-one surprises to thoughtful sets, every Veloura gift begins with the person it is for.</p>
          </div>

          <div className="collection-list">
            {collections.map((collection) => (
              <article className={`collection-card collection-card--${collection.accent}`} key={collection.label}>
                <div className="collection-card__image-wrap">
                  <img src={collection.image} alt={collection.alt} className="collection-card__image" />
                  <span className="collection-card__index">{collection.label}</span>
                </div>
                <div className="collection-card__content">
                  <h3>{collection.title}</h3>
                  <p>{collection.description}</p>
                  <a href={instagramUrl} target="_blank" rel="noreferrer" className="card-link">Create this feeling <ArrowUpRight size={16} /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="gallery-section section-shell reveal" id="gallery">
          <div className="section-heading gallery-heading">
            <div>
              <p className="eyebrow">Real orders, real details</p>
              <h2>Made for their<br /><em>kind of joy.</em></h2>
            </div>
            <p className="section-heading__aside">A closer look at the baskets, hampers, notes, ribbons, and small surprises shared from the Veloura edit.</p>
          </div>
          <div className="occasion-filters" role="tablist" aria-label="Filter gift inspiration by occasion">
            {galleryFilters.map((filter) => (
              <button key={filter} type="button" role="tab" aria-selected={activeOccasion === filter} className={activeOccasion === filter ? "is-active" : ""} onClick={() => setActiveOccasion(filter)}>{filter}</button>
            ))}
          </div>
          <div className="order-gallery">
            {filteredOrders.map((order, index) => (
              <article className={`order-card reveal reveal--delay-${(index % 3) + 1}`} key={order.title}>
                <div className="order-card__image-wrap"><img src={order.image} alt={order.alt} className="order-card__image" /><span>{order.category}</span></div>
                <div className="order-card__content"><h3>{order.title}</h3><p>{order.description}</p></div>
              </article>
            ))}
          </div>
          <a className="text-link gallery-link" href={instagramUrl} target="_blank" rel="noreferrer">See more on Instagram <ArrowUpRight size={18} /></a>
        </section>

        <section className="process-section" id="process">
          <div className="section-shell process-layout">
            <div className="process-intro">
              <p className="eyebrow eyebrow--light">A little ritual</p>
              <h2>Tell us who<br /><em>it’s for.</em></h2>
              <p>We’ll turn your story, style, and occasion into something they cannot wait to open.</p>
              <ContactButton type="whatsapp" />
            </div>
            <div className="process-steps">
              <div className="process-step">
                <span className="process-step__number">01</span>
                <div><Gift size={24} strokeWidth={1.4} /><h3>Share the moment</h3><p>Send us a DM with the occasion, your budget, and a few clues about them.</p></div>
              </div>
              <div className="process-step">
                <span className="process-step__number">02</span>
                <div><Heart size={24} strokeWidth={1.4} /><h3>We curate the feeling</h3><p>We suggest a thoughtful edit, tailored to their personality and your story.</p></div>
              </div>
              <div className="process-step">
                <span className="process-step__number">03</span>
                <div><Check size={24} strokeWidth={1.4} /><h3>It arrives, wrapped</h3><p>Your gift is finished with the details that make the reveal feel like a moment.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="story-section section-shell" id="story">
          <div className="story-visuals">
            <div className="story-visuals__main"><img src="/manus-storage/veloura-romance_129204c5.jpg" alt="A romantic gift styled with ribbon and botanicals" /></div>
            <div className="story-visuals__note"><BriefcaseBusiness size={19} /><span>Private gifting<br />for teams, too.</span></div>
          </div>
          <div className="story-copy">
            <p className="eyebrow">The Veloura story</p>
            <h2>Small details.<br /><em>Big feeling.</em></h2>
            <p>Veloura was made for the people who pause before they choose. The ones who notice a favorite color, remember the tiny ritual, and believe the wrapping is part of the gift.</p>
            <p>Every box is assembled with that same care — a little personal, a little unexpected, and entirely theirs.</p>
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="text-link">Meet us on Instagram <ArrowUpRight size={18} /></a>
          </div>
        </section>

        <section className="review-section section-shell reveal" id="reviews">
          <div className="review-copy">
            <p className="eyebrow">From the REVIEWS highlight</p>
            <h2>A note that<br /><em>stayed with us.</em></h2>
            <blockquote>“{reviewQuote}”</blockquote>
            <p className="review-source">Customer message shared via Instagram<br />No customer name was visible in the source.</p>
            <a className="text-link" href="https://www.instagram.com/stories/highlights/17884806108459291/" target="_blank" rel="noreferrer">View the review highlight <ArrowUpRight size={18} /></a>
          </div>
          <figure className="review-card"><img src="/manus-storage/veloura-review-message_b7b05a3e.png" alt="Customer message praising The Veloura gift basket and packaging" /><figcaption>Shared from the public REVIEWS highlight on Instagram.</figcaption></figure>
        </section>

        <section className="gift-brief-section section-shell reveal" id="brief">
          <div className="gift-brief-intro">
            <p className="eyebrow">Not sure where to start?</p>
            <h2>Build the brief<br /><em>in three taps.</em></h2>
            <p>Choose the feeling. We’ll help you turn it into a beautiful, personal order conversation.</p>
          </div>
          <div className="brief-panel">
            <p className="brief-panel__label">I’m looking for a</p>
            <div className="brief-options">
              {["Birthday surprise", "Anniversary gesture", "Snack hamper", "Just because"].map((option) => (
                <button type="button" key={option} className={brief === option ? "is-active" : ""} onClick={() => setBrief(option)}>{option}</button>
              ))}
            </div>
            <div className="brief-result"><span>Start with</span><strong>{brief}</strong><p>Share the occasion, their favorite things, your budget, and when the moment needs to arrive.</p><a href={briefUrl} target="_blank" rel="noreferrer" className="card-link">Send this brief on WhatsApp <ArrowUpRight size={16} /></a></div>
          </div>
        </section>

        <section className="closing-section section-shell">
          <div className="closing-section__ornament"><RibbonMark className="ribbon-mark--closing" /></div>
          <p className="eyebrow">Your next beautiful reason</p>
          <h2>Let’s make it<br /><em>unforgettable.</em></h2>
          <p>Tell us the story behind the gift. We’ll take it from there.</p>
          <div className="closing-section__actions">
            <ContactButton type="instagram" />
            <ContactButton type="whatsapp" />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__top section-shell">
          <a className="brand-lockup brand-lockup--footer" href="#top">
            <img src="/manus-storage/veloura-logo_a1f2b98f.png" alt="The Veloura logo" className="brand-lockup__mark" />
            <span className="brand-lockup__name">Ve<span>L</span>oura</span>
            <span className="brand-lockup__descriptor">gift atelier</span>
          </a>
          <p>Wrapped with love,<br />delivered with care.</p>
          <div className="site-footer__links"><a href="#collections">Collections</a><a href="#process">Our process</a><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={14} /></a></div>
        </div>
        <div className="site-footer__bottom section-shell"><span>© {new Date().getFullYear()} The Veloura</span><span>Customized · Premium · Memorable</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </div>
  );
}
