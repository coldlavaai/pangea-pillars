# Pangea Pillar Pages

**4 comprehensive SEO pillar pages for Pangea construction workforce management software.**

## 📄 Pages Built

1. **[/workforce-management-software/](https://pangea-pillars.vercel.app/workforce-management-software)**  
   Complete guide to construction workforce management software (2,508 words)

2. **[/compliance-software/](https://pangea-pillars.vercel.app/compliance-software)**  
   Automate CSCS, right-to-work & HSE compliance (2,510 words)

3. **[/onboarding-software/](https://pangea-pillars.vercel.app/onboarding-software)**  
   2-minute WhatsApp onboarding guide (2,001 words)

4. **[/replace-agencies/](https://pangea-pillars.vercel.app/replace-agencies)**  
   How to eliminate agency dependency and save £120K+ (2,006 words)

## 🎯 Features

✅ **Professional B2B Design** — Construction industry aesthetic (navy, orange, gray palette)  
✅ **Mobile Responsive** — Touch-friendly, works on all devices  
✅ **Schema Markup** — Article + FAQPage on all pages, HowTo on Pillars 3 & 4  
✅ **Internal Linking** — 5-8 links per page between pillars and to /demo/, /roi/, /features/  
✅ **CTAs Throughout** — "Book Demo" and "Calculate ROI" buttons every ~500 words  
✅ **FAQ Sections** — 6-8 questions per page with collapsible UI  
✅ **Fast Loading** — Static site generation (SSG), optimized for performance  
✅ **SEO Optimized** — Target keywords in H1, first line, last line, proper meta tags

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Deployment:** Vercel (auto-deploy from GitHub)
- **Content:** Static markdown parsed at build time

## 📦 Project Structure

```
pangea-pillars/
├── app/
│   ├── workforce-management-software/page.tsx
│   ├── compliance-software/page.tsx
│   ├── onboarding-software/page.tsx
│   ├── replace-agencies/page.tsx
│   ├── page.tsx (homepage)
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── CTAButton.tsx
│   ├── FAQSection.tsx
│   ├── SchemaMarkup.tsx
│   └── PillarPage.tsx (reusable template)
├── lib/
│   └── content-parser.ts
├── content/
│   └── [original markdown files]
└── README.md
```

## 🚀 Deployment Instructions

### Option 1: Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/coldlavaai/pangea-pillars.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import project from GitHub: `coldlavaai/pangea-pillars`
   - Framework preset: Next.js (auto-detected)
   - Click "Deploy"

3. **Custom Domain (Optional):**
   - In Vercel project settings → Domains
   - Add `pillar.joinpangea.ai` or integrate into main site

### Option 2: Deploy to Pangea Main Site

To integrate these pages into the existing `joinpangea.ai` site:

1. **Copy page files** to your main Next.js app:
   ```bash
   cp -r app/workforce-management-software /path/to/joinpangea.ai/app/
   cp -r app/compliance-software /path/to/joinpangea.ai/app/
   cp -r app/onboarding-software /path/to/joinpangea.ai/app/
   cp -r app/replace-agencies /path/to/joinpangea.ai/app/
   ```

2. **Copy components:**
   ```bash
   cp components/* /path/to/joinpangea.ai/components/
   ```

3. **Update internal links** in existing site navigation to point to new pages

4. **Rebuild and deploy:**
   ```bash
   cd /path/to/joinpangea.ai
   npm run build
   vercel --prod
   ```

## 🧪 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit http://localhost:3000 to view the site.

## ✅ Validation Checklist

- [x] All 4 pages build successfully
- [x] Schema markup validates (Google Rich Results Test)
- [x] Internal links functional
- [x] Mobile responsive
- [x] Fast loading (<2s LCP)
- [x] CTAs prominent and clickable
- [x] FAQ sections work (collapsible UI)
- [x] Navigation between pages works
- [x] No console errors

## 📊 SEO Details

### Target Keywords
- **Pillar 1:** construction workforce management software
- **Pillar 2:** construction compliance software
- **Pillar 3:** construction worker onboarding
- **Pillar 4:** replace construction recruitment agencies

### Schema Markup
- **All pages:** Article schema + FAQPage schema
- **Pillars 3 & 4:** Additional HowTo schema
- Validates in Google Rich Results Test

### Internal Linking Strategy
Each pillar page links to:
- Other 3 pillar pages (contextual)
- /demo/ (CTA)
- /roi/ (CTA)
- /features/ (product info)

Minimum 5-8 internal links per page.

## 🎨 Design System

**Colors:**
- Primary: Navy/Slate (#0f172a, #1e293b)
- Accent: Orange (#ea580c, #c2410c)
- Text: Gray scale (#111827, #374151, #6b7280)

**Typography:**
- Font: Inter (system font stack)
- Headings: Bold, clear hierarchy
- Body: 16px base, 1.7 line height (readability)

**Components:**
- Hero sections with gradient backgrounds
- Card-based content sections
- Collapsible FAQ accordions
- CTA buttons with hover effects
- Professional B2B aesthetic

## 📝 Content Specs

- **Total word count:** 9,025 words across 4 pages
- **Reading level:** Hemingway 6-8 (maintained from Content Factory)
- **Real stats:** From PANGEA-CONTENT-AMMO.md
- **NDA compliant:** No Aztec mentions
- **Tone:** Direct, data-driven, B2B

## 🔗 Related Resources

- **Content source:** `/home/moltbot/contentfactory-bot/output/pangea-pillar-*.md`
- **Content brief:** `/home/moltbot/contentfactory-bot/PANGEA-CF-001-COMPLETE.md`
- **Content ammo:** `/home/moltbot/contentfactory-bot/PANGEA-CONTENT-AMMO.md`

## 👥 Credits

- **Content:** Content Factory Bot (CL_content_bot)
- **Development:** Web Builder Bot (CL_Web_Builder_bot)
- **Client:** Pangea (joinpangea.ai)
- **Agency:** Cold Lava

## 📞 Support

For deployment support or content updates:
- **War Room:** Cold Lava War Room (Telegram: -5225030218)
- **Pipeline:** Cold Lava Pipeline (Telegram: -5253954579)
- **Contact:** @CL_Web_Builder_bot or @CL_content_bot

---

**Built with ❤️ by Cold Lava AI**  
*Professional web development for construction tech companies*
