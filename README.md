# Campusify Blog Landing Page

A dynamic blog page built with Next.js 16 and Tailwind CSS

---

## Project Setup Instructions

### Prerequisites
- Node.js 18+
- npm

### How to Run

```bash
# Clone and install
git clone <repo-url>
cd symfor-assignment
npm install

# Development
npm run dev

# Production build
npm run build
npm start
```

The app runs at `http://localhost:3000`

### Project Structure

```
app/
  layout.js         - Root layout with header/footer
  page.js           - Home page
  globals.css       - Tailwind styles
  [slug]/page.js    - Dynamic blog pages

components/
  Header.jsx        - Navigation
  Footer.jsx        - Footer
  Sidebar.jsx       - Blog sidebar

lib/
  api.js            - WordPress API calls
  cleaner.js        - HTML sanitization
```

---

## CSS/Junk Removal Logic

WordPress content comes with a lot of inline styles and classes that mess up the design. I built a cleaner function to handle this.

### What I Did (`lib/cleaner.js`)

1. **Sanitize HTML** - Used `isomorphic-dompurify` to remove dangerous tags like `<script>` and `<iframe>`
2. **Remove style tags** - Stripped out `<style>` blocks completely
3. **Remove inline styles** - Got rid of `style="..."` attributes
4. **Remove WordPress classes** - Cleaned up classes like `wp-block-columns` that break the layout

### because

The raw WordPress content had hardcoded colors, weird spacing, and classes that conflicted with Tailwind. After cleaning, the content inherits the site's typography properly.

---

## Performance Optimization Approach

### Static Generation

I used `generateStaticParams` to pre-render all blog pages at build time. This means:
- Pages load instantly (no server wait time)
- Can be cached on CDN
- Better SEO since content is in the HTML

### Image Optimization

Configured `next.config.mjs` with:
- AVIF and WebP formats
- Optimized device sizes for mobile
- 30-day cache TTL

For the featured image, I used Next.js `Image` component with `priority` flag so it loads first (helps with LCP score).

### What I Targeted

- FCP under 1.5s
- LCP under 2.5s
- CLS of 0 (no layout shift)
- Mobile load under 3s

---

## SEO Implementation Details

I used Next.js `generateMetadata` function to set dynamic SEO for each blog post.

### What Gets Set

- **Title** - From WordPress `title.rendered`
- **Description** - From Yoast plugin data, or I generate it from the excerpt
- **Canonical URL** - Auto-generated from the slug
- **Open Graph** - Full OG tags for social sharing
- **Twitter Cards** - `summary_large_image` for nice Twitter previews

I also made sure the heading structure is correct (h1 for title, h2 for sections) for accessibility.

---

## Assumptions & Limitations

### Assumptions

1. The WordPress API at campusify.io stays public
2. The API response format doesn't change
3. Images are hosted on WordPress

### Limitations

1. **Inline images** - Images inside the WordPress content can't be optimized by Next.js since they're in `dangerouslySetInnerHTML`
2. **Cache control** - The WordPress server controls image caching its 7 days right now
3. **Lighthouse scores** - Can vary based on network and browser extensions

### Things I Would Add Later

- Image proxy for better optimization
- ISR for real-time content updates
- JSON-LD structured data
- Auto-generated sitemap

---

## Tech Stack

- Next.js 16.1.1
- Tailwind CSS 4
- Roboto font
- isomorphic-dompurify
- date-fns

---
