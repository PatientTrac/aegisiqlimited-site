# AegisIQ — The Financial Intelligence Network

Corporate / parent marketing site for **AegisIQ Limited**, marketing the product family:
AegisIQ Equity, Stock Ledger, Wealth Ledger, and the Investor Portal.

Static site — plain HTML/CSS/JS, no build step, no dependencies. Deploys anywhere.

## Structure

```
aegisiq-site/
├── index.html            # Homepage — the network, company, apps, governance, roadmap, contact
├── equity.html           # AegisIQ Equity        (aegisiqequity.ai)
├── stock-ledger.html     # AegisIQ Stock Ledger  (aegisiqstockledger.com)
├── wealth-ledger.html    # AegisIQ Wealth Ledger (aegisiqwealthledger.com)
├── investor-portal.html  # AegisIQ Investor Portal (aegisiqfintech.com)
├── assets/
│   ├── styles.css        # Shared stylesheet (all pages)
│   ├── site.js           # Scroll-reveal animation
│   └── logo.svg          # Brand mark (placeholder — replace with production asset)
├── netlify.toml          # Netlify config
├── vercel.json           # Vercel config
├── robots.txt
└── .gitignore
```

## Run locally

No build needed. Either open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Before going live — replace these placeholders

1. **Logo** — `assets/logo.svg` is a recreated placeholder of the AegisIQ mark. Drop in the real asset (keep the filename, or update references in the `<img>` tags and the `<svg><defs>` gradients).
2. **Parent domain** — the wordmark/footer use `aegisiqlimited.com`. Switch to `aegisiqlimited.com` if that's the chosen parent (search the files for `aegisiqlimited.com`).
3. **Contact form** — `index.html` uses a Formspree placeholder: `action="https://formspree.io/f/your-form-id"`. Create a form at [formspree.io](https://formspree.io) (or Netlify Forms / Basin) and paste your endpoint. Submissions are intended to reach `hello@aegisiqfintech.com`.
   - To use **Netlify Forms** instead: add `netlify` and `name="contact"` attributes to the `<form>` and remove the Formspree action.
4. **Company timeline** — `index.html` `#company` section has a timeline with `20XX` placeholders. Replace with AegisIQ Limited's real founding year and milestones.
5. **Legal links** — footer Privacy / Terms / Disclosures point to `#`. Link real pages.
6. **Language toggle** — EN/ES/FR in the nav is display-only. Wire up real localization if needed (Colombia/UK footprint makes ES worthwhile).

## Deploy — GitHub → Netlify (same workflow as the other AegisIQ sites)

Static site, no build step. Code lives in GitHub; Netlify builds and deploys from the connected repo on every push to `main`; DNS is managed in Netlify.

### 1. Push the code to GitHub
```bash
cd aegisiq-site
git init
git add .
git commit -m "AegisIQ corporate site (aegisiqlimited.com)"
git branch -M main
git remote add origin https://github.com/<your-org>/aegisiqlimited-site.git
git push -u origin main
```

### 2. Connect the repo in Netlify
- Netlify → **Add new site → Import an existing project → GitHub** → pick `aegisiqlimited-site`.
- Build settings (Netlify reads these from `netlify.toml`, so just confirm):
  - **Build command:** *(none)*
  - **Publish directory:** `.` (repository root)
- Deploy. Every push to `main` now auto-builds and publishes; PRs get deploy previews — same as the other sites.

### 3. Domain & DNS in Netlify (aegisiqlimited.com)
Matches the pattern used for the other AegisIQ domains (registrar Joker.com → Netlify DNS):
- Netlify → **Domain management → Add a domain** → `aegisiqlimited.com`, and choose **Netlify DNS** (creates the DNS zone).
- Netlify shows four nameservers in the `dnsN.pXX.nsone.net` form. At **Joker.com**, replace the domain's nameservers with those four (same nameserver-swap you did for the other sites).
- Netlify auto-provisions TLS once the nameservers propagate. Set `aegisiqlimited.com` as the primary domain and let Netlify redirect `www` ↔ apex.
- Verify propagation from the authoritative side (same approach as before):
  ```bash
  pip install dnspython
  python -c "import dns.resolver; r=dns.resolver.Resolver(); r.nameservers=['8.8.8.8','1.1.1.1']; print([x.to_text() for x in r.resolve('aegisiqlimited.com','NS')])"
  ```

### Notes
- `netlify.toml` maps extensionless paths (`/pricing`, `/legal`, `/refund`, `/legal/refund`, etc.) to the `.html` files and sets security headers — no other config needed.
- Contact form currently posts to a Formspree placeholder. To use **Netlify Forms** instead: add `netlify` and `name="contact"` to the `<form>` in `index.html` and remove the Formspree `action`.
- `vercel.json` is included as an alternative host config but isn't needed for Netlify.

## Notes

- Fonts load from Google Fonts (Spectral / IBM Plex Sans / IBM Plex Mono).
- App-page visuals are inline SVG — no image files to manage.
- Product links open the live product domains in a new tab; the "Full details" links stay in-site.
- Accessibility: keyboard focus states, reduced-motion support, responsive to mobile.

© 2026 AegisIQ Limited.

---

## Pricing page (`pricing.html`)

Built from the authoritative billing handoff (`AEGISIQ_BILLING_HANDOFF.md`, v2026-07-11.1).
Public plan family: **AegisIQ Balance** — Foundation / Owner / Group / Global, plus add-ons and
one-time services. All amounts USD, exactly per the catalog.

### Naming flag — resolve before launch
The billing catalog names the product **AegisIQ Balance** ("Entity & Wealth Accounting"), while the
marketing site brands the same app **AegisIQ Wealth Ledger** (aegisiqwealthledger.com). The pricing
page currently presents **AegisIQ Balance** for the plans and links back to the Wealth Ledger page.
Decide the public relationship (rename to Balance, keep Wealth Ledger, or "Wealth Ledger — powered by
Balance") and align both pages.

### This page is marketing only — not live billing
Per the handoff, live billing requires **explicit owner approval** and Stripe **test mode first**.
The plan CTAs currently point to `#` (self-service) or Contact (Global). Before go-live:
- Wire self-service CTAs to real **Stripe Checkout** (bill by Stripe **Price ID**, never a client amount).
- Keep **Global** sales-assisted — do **not** create a generic live Checkout price for it.
- Do **not** publish AI/document allowance numbers (open decision) — omitted here by design.
- Do **not** display or hard-code any Stripe/Airwallex fee percentage.
- Confirm the open items in §26 of the handoff (refund policy, annual cancellation, grace period,
  tax/Stripe Tax, portal permissions, founding-customer promo) before stating them publicly.

### Legal / entity (now corrected site-wide on pricing + footers)
> AegisIQ Balance is operated by AegisIQ Limited, a private company limited by shares incorporated in
> Hong Kong. BRN / UBI 79570488.

The homepage/product footers still read a generic "AegisIQ Limited" — update them to the Hong Kong
line above for consistency if you want it site-wide (currently applied on the pricing page).

---

## Languages (i18n)

Seven languages via a lightweight client-side engine (`assets/i18n.js`):
**EN · ES · PT-BR · FR · DE · RU · ZH**. A language `<select>` sits in the nav on every page;
choice persists (localStorage) and sets `<html lang>`. Auto-detects the browser language on first visit.

### What's translated now
- **Site chrome on every page:** nav links, Investor Portal CTA, footer column headers, footer tagline.
- **Homepage hero (fully):** eyebrow, headline, lead paragraph, feature pills, both CTAs.

### What's intentionally still English
- Long-form marketing body copy on the homepage sections and product/pricing pages.
- **All legal and financial seller copy** (the "operated by AegisIQ Limited… BRN/UBI 79570488" line,
  payment terms, disclosures). Machine-translating legal/financial copy across seven languages is not
  safe to ship — have these professionally/natively reviewed before enabling them per language.

### How to translate more
1. Add the string's key + translations to each language block in `assets/i18n.js`.
2. Tag the element in the HTML: `data-i18n="key"` (text), `data-i18n-html="key"` (headings with
   inline `<span class="em">`), or `data-i18n-ph="key"` (input placeholders).
The engine falls back to English for any missing key, so partial translations render safely.

> The provided ES/PT-BR/FR/DE/RU/ZH strings are a solid first pass for UI chrome and the hero — have a
> native speaker review before launch, especially anything customer-committing.

## Legal identity (applied site-wide)

Every footer now carries:
> AegisIQ Limited, a private company limited by shares incorporated in Hong Kong. BRN / UBI 79570488.

The pricing page additionally carries the product-specific line required by the billing handoff:
> AegisIQ Wealth Ledger is operated by AegisIQ Limited, a private company limited by shares
> incorporated in Hong Kong. BRN / UBI 79570488.
