# Ponchik Monchik — Website Plan (Revised)

A cozy, appetizing, trilingual (Armenian / Russian / English) café website with a clean admin panel so you can update hours, menu items, and gallery yourself.

## Brand & Visual Direction

- **Palette**: cream `#FBF6EE`, milk white, caramel `#C68A4A`, chocolate brown `#3B2415`, strawberry pink `#E8859A`, muted gold accent
- **Typography**: warm serif for headlines (Fraunces / Playfair), clean sans for body (Inter)
- **Feel**: rounded cards, soft shadows, generous spacing, subtle grain, dessert-inspired details (sprinkles, glaze curves as accents)
- **Mobile-first**, then tablet, then desktop

## Site Structure

```text
/              Home
/menu          Menu (Quick Picks + categorized + filterable)
/about         Our Story
/gallery       Photo gallery (lightbox)
/reviews       Customer Love
/contact       Location & Contact (map, hours, call)
/faq           FAQ

/admin         Admin login + dashboard (protected)
  ├─ hours, contact info, "best time to visit" windows
  ├─ menu items (category, popular tag, show-on-homepage flag, image)
  ├─ gallery images
  ├─ FAQ entries
  └─ reviews
```

Each page gets its own SEO-optimized title, description, and OG tags.

## Trilingual Support (HY / RU / EN)

- Language switcher in the sticky header (HY · RU · EN), default Armenian
- Selection persists in `localStorage`
- All UI strings + content fields stored in three languages
- SEO: hreflang tags for all three locales

## Homepage Sections (Revised)

1. **Sticky header** — logo, nav, language switcher, Call + Directions buttons
2. **Hero (stronger)** —
   - Large appetizing photo
   - Headline: "Fresh ponchiks, warm coffee, cozy moments."
   - Subheadline: warm one-liner about Yerevan café experience
   - **Urgency line** under CTAs: "Open today until 23:30 · Best enjoyed warm — freshly fried every hour"
   - Primary CTA: **View Menu** · Secondary: **Call Now** · Tertiary: **Get Directions**
3. **Featured products** — items flagged "show on homepage" in admin (default 6: 3 ponchiks, monchik, pie, savory)
4. **How to enjoy ponchiks** *(new)* — small playful 3-step strip with icons:
   - "Order while warm" → "Pair with our coffee" → "Share, or don't — we won't judge"
   - Light, friendly tone; adds brand personality
5. **Brand story snippet** — short emotional text + cozy interior photo, link to /about
6. **Why people love us** — 4 icon cards (Fresh & tasty, Cozy atmosphere, Friendly service, Heart of Yerevan)
7. **Best time to visit** *(new)* — calm, helpful section addressing the "busy at peak" theme:
   - 3 time-of-day cards: **Quiet mornings (09:00–11:30)** · **Relaxed afternoons (14:30–17:30)** · **Lively evenings (after 19:00)**
   - Each card shows vibe + tip ("perfect for breakfast", "great for a calm coffee", "cozy but busier — come a little earlier")
   - Time windows editable in admin
8. **Reviews preview (improved)** —
   - **Summary line above cards**: "Guests come back for the warm ponchiks, the cozy interior, and the friendly welcome. Here's what they say:"
   - 3 quote cards
   - Gentle trust note: "Popular spots can get busy at peak hours — visit a little earlier for the most relaxed experience."
9. **Gallery teaser** — 6-tile masonry, link to full gallery
10. **Location & hours** — embedded map, address, hours, call button
11. **FAQ teaser** — 3 most common Q&As, link to full FAQ
12. **Footer** — address, hours, phone, social placeholders, language switcher

## Menu Page (Revised)

- **Quick Picks** *(new, top of page)* — horizontal row of 4–6 must-try items (curated, marked "popular" in admin), big images, tap to scroll to category
- Category tabs below: Sweet Ponchiks · Monchiks · Pies & Patties · Breakfast · Coffee & Drinks · Desserts · Savory
- Search input filters within current category
- "Popular" badge on cards
- Card: image, name, short description, optional "best enjoyed warm" note
- Empty price slot on each card (ready for prices later)

## Floating Mobile Action Bar

Fixed bottom bar on mobile: **Call · Directions · Menu**.

## Gallery, Reviews, Contact, FAQ

- **Gallery**: masonry, hover zoom, lightbox with prev/next + caption, lazy loaded
- **Reviews page**: full wall with the same warm summary line at top + honest peak-hours tip
- **Contact**: address, tap-to-call, hours, embedded Google Map + open-in-maps buttons, Instagram/Facebook placeholders, dine-in/takeaway badges
- **FAQ**: dine-in, takeaway, busiest hours, vegetarian options, coffee+dessert combos, savory items

## Admin Panel (Revised)

- Login at `/admin` (email + password, single owner account)
- Editable content (all text fields support HY/RU/EN tabs):
  - **Café info**: hours per day, phone, address, social links
  - **Best time to visit**: 3 windows (label + tip per window)
  - **Menu items**: image, name, description, category, **Popular** flag, **Show on homepage** flag, sort order
  - **Gallery**: image upload, caption, sort order, show/hide
  - **FAQ**: question + answer, sort order
  - **Reviews**: quote text, attribution, show/hide
- Changes go live immediately on the public site

## SEO & Structured Data

- Per-page title, meta description, OG title/description/image
- JSON-LD `Restaurant` / `LocalBusiness` schema with address, geo, hours, phone, sameAs
- hreflang for hy / ru / en
- Sitemap + robots
- OG image set to hero photo

## Performance & A11y

- Image lazy loading + responsive images
- Smooth (not flashy) transitions
- Keyboard navigation, focus rings, sufficient contrast
- SSR for fast first paint and SEO

## Technical Notes

- TanStack Start with separate route files per page (SSR + SEO)
- **Lovable Cloud** for: admin auth (email/password), database, image storage
- Roles in a separate `user_roles` table; admin gated by `has_role()` security definer function
- Public pages read content via SSR loaders; admin uses authenticated server functions
- shadcn components for forms, tabs, dialogs in admin
- Placeholder food photos initially; replaceable via admin

## Out of Scope (per your earlier choices)

- No online ordering or reservation form — primary CTAs are Call + Directions
- No prices on menu cards yet (clean empty slot)
- No multi-branch page

After approval, I'll build the public site first (Home → Menu → Gallery → About → Reviews → Contact → FAQ in HY/RU/EN), then the admin panel.
