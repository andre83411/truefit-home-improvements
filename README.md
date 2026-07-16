# TrueFit Home Improvements website

A responsive Next.js and TypeScript website for TrueFit Home Improvements. It includes local-search metadata, accessible navigation, editable content collections, a project gallery, legal pages, and a validated quote-request workflow with optional image uploads.

## Local setup

Requirements: Node.js 22.13 or newer and npm.

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local`.
3. Set `NEXT_PUBLIC_SITE_URL` to the canonical website URL.
4. Start locally with `npm run dev`.
5. Run `npm run lint` and `npm run build` before deployment.

## Required launch edits

Search the project for these placeholders and replace them with verified business information:

- `(000) 000-0000` and `+10000000000`
- `hello@example.com`
- `https://www.example.com`
- `Google review link placeholder`
- Owner and project photograph placeholders
- License and insurance details, only if TrueFit supplies current, verifiable information

Do not add claims about licensing, insurance, warranties, certifications, or years of experience without supplied evidence.

## Editing content

The main editable collections are in `data/`:

- `services.ts` — service names, descriptions, and examples
- `locations.ts` — cities and counties served
- `reviews.ts` — approved customer feedback
- `gallery.ts` — project titles, categories, descriptions, and future image references

Page copy is in `app/<page>/page.tsx`. Global colors and styling are in `app/globals.css`. Site-wide phone, email, navigation, and footer content are in `components/Header.tsx`, `components/Footer.tsx`, and `components/CTA.tsx`.

## Quote form configuration

The browser submits to `/api/quote`. The server validates required fields, email and ZIP formats, a hidden honeypot, a maximum of five files, and a 10 MB per-file limit. It then forwards the multipart request to the URL in `QUOTE_FORM_ENDPOINT`.

1. Create a multipart-capable form endpoint (Formspree is a simple option).
2. Add its endpoint URL as `QUOTE_FORM_ENDPOINT` in local and production environment settings.
3. Submit a real test with and without images after deployment.
4. Confirm delivery, reply-to behavior, and the provider’s retention settings.

If the endpoint is absent or rejects a request, the visitor sees an error and is directed to call or email. The interface also includes sending and success states.

### Recommended spam and upload protection

Before promoting the site, enable the form provider’s CAPTCHA or Turnstile support, rate limiting, notification rules, and file scanning. For higher volume, add Cloudflare Turnstile verification in the UI and validate its token in `/api/quote`. Consider direct uploads to a private object-storage bucket with expiring links rather than forwarding large attachments. Never publish customer-submitted project photos without permission.

## Deploying to Vercel

1. Import the repository in Vercel and select the Next.js framework preset.
2. Vercel uses `npm run vercel-build` from `vercel.json`.
3. Add `NEXT_PUBLIC_SITE_URL` and `QUOTE_FORM_ENDPOINT` in Project Settings → Environment Variables.
4. Deploy, then set `NEXT_PUBLIC_SITE_URL` to the final `https://` domain and redeploy so canonical URLs, sitemap, robots, and structured data are correct.
5. Test every navigation link, the quote form, phone/email links, sitemap, and the mobile menu on the production domain.

## Squarespace DNS to Vercel

Keep the domain registered at Squarespace and point only its DNS to Vercel:

1. In Vercel, open Project Settings → Domains and add the apex domain and `www` domain.
2. In Squarespace Domains, open the domain → DNS Settings.
3. Remove only conflicting web-hosting A, AAAA, and CNAME records. Do not remove MX, TXT, DKIM, SPF, or other email records.
4. Add the exact A/CNAME records Vercel currently displays for the domain. Vercel commonly asks for an apex A record and a `www` CNAME, but use the values shown in the Vercel dashboard because they can change.
5. Wait for DNS propagation and Vercel’s certificate issuance, then choose the preferred primary domain in Vercel and verify both apex and `www` redirect correctly.

DNS changes can temporarily interrupt the website. Export or screenshot the existing DNS records first, and schedule the change when a brief interruption is acceptable.

## SEO and legal notes

Every public page has a tailored title and description. `app/sitemap.ts`, `app/robots.ts`, and LocalBusiness JSON-LD are included. Replace the placeholder canonical URL, phone, and email before launch. Review the privacy policy and service disclaimer with the business and, when appropriate, qualified counsel; they are practical starting points, not legal advice.
