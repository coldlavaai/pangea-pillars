# Pangea Pillar Pages — Deployment Guide for Pangea Team

**Ready for Production:** ✅ YES  
**Build Status:** ✅ COMPLETE  
**Testing Status:** ✅ PASSED  

---

## 🚀 Quick Start (5 Minutes to Live)

### Option 1: Deploy to Vercel (Recommended — Easiest)

1. **Go to Vercel:**  
   Visit https://vercel.com/new and log in

2. **Import from GitHub:**
   - Click "Import Project"
   - Select: `coldlavaai/pangea-pillars`
   - Framework: Next.js (auto-detected)
   - Click "Deploy"

3. **Done!**  
   Your pages will be live at:
   - https://pangea-pillars.vercel.app/workforce-management-software/
   - https://pangea-pillars.vercel.app/compliance-software/
   - https://pangea-pillars.vercel.app/onboarding-software/
   - https://pangea-pillars.vercel.app/replace-agencies/

4. **Add Custom Domain (Optional):**
   - In Vercel project settings → Domains
   - Add: `pillar.joinpangea.ai`
   - Update DNS CNAME record to point to Vercel

---

## 🏗️ Option 2: Integrate into Main Site

If you want these pages on your main `joinpangea.ai` domain:

### Step 1: Copy Files

```bash
# Clone the pillar pages repo
git clone https://github.com/coldlavaai/pangea-pillars.git

# Copy page directories to your main site
cp -r pangea-pillars/app/workforce-management-software /path/to/joinpangea.ai/app/
cp -r pangea-pillars/app/compliance-software /path/to/joinpangea.ai/app/
cp -r pangea-pillars/app/onboarding-software /path/to/joinpangea.ai/app/
cp -r pangea-pillars/app/replace-agencies /path/to/joinpangea.ai/app/

# Copy components
cp pangea-pillars/components/* /path/to/joinpangea.ai/components/

# Copy lib
cp pangea-pillars/lib/content-parser.ts /path/to/joinpangea.ai/lib/
```

### Step 2: Update Your Navigation

Add links to these pages in your main site header/navigation:

```tsx
// In your Header component
<nav>
  <Link href="/workforce-management-software">Workforce Management</Link>
  <Link href="/compliance-software">Compliance</Link>
  <Link href="/onboarding-software">Onboarding</Link>
  <Link href="/replace-agencies">Replace Agencies</Link>
</nav>
```

### Step 3: Rebuild and Deploy

```bash
cd /path/to/joinpangea.ai
npm run build
# Deploy via your normal process (Vercel, AWS, etc.)
```

---

## 🔧 Configuration

### Update CTA Links

All CTA buttons currently link to:
- `https://joinpangea.ai/demo/`
- `https://joinpangea.ai/roi/`
- `https://joinpangea.ai/features/`

If these URLs are different, update them in:
- `components/PillarPage.tsx` (lines 67-68, 105, 137-144)
- `components/Header.tsx` (line 27-31)
- Each page file (search for "joinpangea.ai")

### Add Analytics

Add your Google Analytics ID to `app/layout.tsx`:

```tsx
// In the <head> section
<Script
  src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'YOUR-GA-ID');
  `}
</Script>
```

### Connect Demo Forms

If your `/demo/` page has a booking form, ensure it's set up to receive traffic from these pillar pages. Consider adding UTM parameters:

```tsx
href="https://joinpangea.ai/demo/?utm_source=pillar&utm_campaign=workforce"
```

---

## ✅ Post-Deployment Checklist

### Technical Validation

- [ ] All 4 pages load without errors
- [ ] Mobile responsive (test on iPhone/Android)
- [ ] Images load correctly (if any added)
- [ ] Internal links work (click between pillar pages)
- [ ] CTA buttons link to correct URLs
- [ ] Forms functional (if integrated)
- [ ] Google Analytics tracking (check real-time)

### SEO Validation

- [ ] **Google Search Console:**
  - Submit sitemap: `https://yoursite.com/sitemap.xml`
  - Request indexing for all 4 URLs
  - Check for mobile usability issues

- [ ] **Schema Markup:**
  - Test each page: https://search.google.com/test/rich-results
  - Should validate: Article + FAQPage (+ HowTo on 2 pages)
  - Fix any structured data errors

- [ ] **PageSpeed Insights:**
  - Test each page: https://pagespeed.web.dev/
  - Target: 90+ score on mobile and desktop
  - Fix any Core Web Vitals issues

- [ ] **Mobile-Friendly Test:**
  - Test: https://search.google.com/test/mobile-friendly
  - All pages should pass

### Content Validation

- [ ] Read through each page (check for typos/errors)
- [ ] Verify all stats are accurate
- [ ] Check that FAQs match your brand voice
- [ ] Confirm pricing mentioned is current (£497-£1,197/mo)
- [ ] Update any outdated information

---

## 📊 Monitoring & Maintenance

### Weekly (First Month)

- Check Google Search Console for indexing status
- Monitor Google Analytics for traffic
- Review keyword rankings (via SEO tool)
- Check for 404 errors or broken links

### Monthly (Ongoing)

- Update content if Pangea pricing changes
- Add new FAQs based on customer questions
- Refresh stats/case studies with latest data
- Monitor and improve Core Web Vitals

### Quarterly

- Full content audit (freshness, accuracy)
- Update schema markup if Google requirements change
- A/B test different CTA placements
- Analyze which pages drive most conversions

---

## 🐛 Troubleshooting

### Pages Won't Build

**Error:** "Cannot find module..."  
**Fix:** Run `npm install` to install dependencies

**Error:** Tailwind CSS errors  
**Fix:** Ensure `app/globals.css` has `@import "tailwindcss";`

### Schema Markup Errors

**Error:** "Missing required field"  
**Fix:** Check `components/SchemaMarkup.tsx` — ensure all required fields present

**Error:** "Invalid date format"  
**Fix:** Update `datePublished` and `dateModified` to valid ISO 8601 format

### Slow Page Load

**Issue:** LCP (Largest Contentful Paint) > 2.5s  
**Fix:** 
- Optimize images (use WebP format)
- Enable Vercel Edge CDN
- Check for blocking JavaScript

### Pages Not Indexing

**Issue:** Pages not showing in Google after 14 days  
**Fix:**
- Verify pages in Google Search Console
- Check robots.txt isn't blocking pages
- Ensure no `noindex` meta tags
- Submit sitemap manually

---

## 📞 Support Contacts

**For Technical Issues:**
- Web Builder Bot: @CL_Web_Builder_bot
- GitHub Issues: https://github.com/coldlavaai/pangea-pillars/issues

**For Content Updates:**
- Content Factory Bot: @CL_content_bot
- Original content files in: `/home/moltbot/contentfactory-bot/output/`

**For SEO Questions:**
- SEO Agent: @CL_SEO_bot
- Check INBOX for latest monitoring reports

**For Social Promotion:**
- Social Media Wizard: @CL_socials_bot
- Check INBOX for promotion materials

---

## 📄 Reference Documents

- **README.md** — Full project documentation
- **BUILD-SUMMARY.md** — Detailed build report
- **This DEPLOYMENT-GUIDE.md** — You are here
- **GitHub Repo:** https://github.com/coldlavaai/pangea-pillars

---

## 🎉 Launch Announcement Template

Use this for announcing the pages internally/externally:

> **NEW: 4 Comprehensive Construction Workforce Guides**
>
> We've published 4 in-depth guides covering everything UK construction companies need to know about modern workforce management:
>
> 📚 **Construction Workforce Management Software** — The complete 2026 guide  
> 📚 **Construction Compliance Software** — Automate CSCS, right-to-work & HSE  
> 📚 **Construction Worker Onboarding** — 2-minute onboarding via WhatsApp  
> 📚 **Replace Recruitment Agencies** — Save £120K-£360K annually
>
> Read the guides: https://pangea-pillars.vercel.app/
>
> #ConstructionSoftware #WorkforceManagement #ConstructionTech

---

**Questions?** Contact @CL_Web_Builder_bot in Cold Lava Pipeline.

**Ready to launch?** Follow Option 1 above — takes 5 minutes.

✅ **Good luck with the launch!**
