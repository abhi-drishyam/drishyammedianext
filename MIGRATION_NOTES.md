# Migration Notes

## Original Project Structure
- Homepage: original-html-backup/index.html
- About: original-html-backup/about.html
- Services/Pricing: original-html-backup/pricing.html
- Graphic Portfolio: original-html-backup/graphic.html
- Video Portfolio: original-html-backup/video.html
- Reviews: original-html-backup/reviews.html
- Blog Listing: original-html-backup/blog.html
- Blog Post: original-html-backup/blog-post-ads.html
- Contact: original-html-backup/contact.html

## CSS Files
- css/main.css (~1900 lines) — shared styles, CSS variables, nav, footer
- css/pages/index.css — homepage
- css/pages/about.css — about page
- css/pages/blog.css — blog listing
- css/pages/blog-post.css — blog article
- css/pages/contact.css — contact page
- css/pages/graphic.css — graphic portfolio
- css/pages/video.css — video portfolio
- css/pages/pricing.css — pricing/services
- css/pages/reviews.css — reviews page

## JavaScript Files
- js/main.js — hamburger nav, active tab, portfolio dropdown
- js/pages/index.js — ATA timeline animation, tab switcher
- js/pages/contact.js — form submission handler
- js/pages/filter-pills.js — filter pills + scroll-spy (graphic & video pages)
- js/pages/reviews.js — drag-to-scroll testimonial carousel
- js/pages/video.js — video page interactions
- js/pages/graphic.js — graphic page interactions

## Pages to Migrate
1. Homepage → app/page.tsx
2. About → app/about/page.tsx
3. Services → app/services/page.tsx
4. Graphic Portfolio → app/portfolio/graphic/page.tsx
5. Video Portfolio → app/portfolio/video/page.tsx
6. Reviews → app/reviews/page.tsx
7. Blog Listing → app/blog/page.tsx
8. Blog Post → app/blog/[slug]/page.tsx
9. Contact → app/contact/page.tsx

## Components Needed
### Layout
- Navbar (sticky, blur backdrop, mobile drawer, portfolio dropdown)
- Footer (CTA headline, 3-col nav, social icons, copyright)

### UI
- HeroSection (gradient bg + grain overlay, variants per page)
- GradText (.grad-text utility)
- SectionHeader (h2 + description)
- CTAStrip (full-width CTA banner)
- FilterPills (category pills + scroll-spy)

### Cards
- GalleryCard (image/video + hover overlay)
- BlogCard (image + metadata + title + excerpt)
- TestimonialCard (quote + avatar + name/role)
- TeamCard (photo + name + role)
- LocationCard (office location)
- VideoCard (autoplay/loop/muted + overlay)

### Sections (all "use client")
- GalleryCarousel (infinite scroll track)
- ATATimeline (rAF-based animation)
- WebsiteShowcase (tab switcher)
- ContactForm (form state + submission)
- TestimonialCarousel (drag scroll)

## Third-Party Libraries
- Google Fonts (Manrope) — migrate to next/font/google
- No JS frameworks (vanilla JS only)
- No CSS frameworks (pure custom CSS)
- All icons are hand-coded inline SVGs

## CSS Strategy
- Use CSS Modules (closest to current setup, lowest migration effort)
- Port CSS variables and reset into styles/globals.css

## Migration Order
1. Scaffold + Navbar + Footer + globals.css
2. About page (simplest)
3. Contact page (introduces "use client")
4. Blog listing + Blog post (introduces dynamic routes)
5. Graphic + Video portfolio pages
6. Reviews page
7. Pricing/Services page
8. Homepage (most complex — last)
9. Optimization (next/image, metadata, SEO)

## Key Decisions
- CSS Strategy: CSS Modules
- Blog Content: Static data for now (MDX/CMS later if needed)
- Deployment: TBD (Vercel recommended)
- Images/Videos: public/ folder for now (CDN later if needed)

## Notes
- index.html is the most complex page — migrate it last
- graphic.html and video.html share components (FilterPills, GalleryCarousel)
- All interactive components need "use client" directive in Next.js