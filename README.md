# AegisIQ Limited Corporate Site

Static corporate website for `aegisiqlimited.com`.

## Purpose

The site presents AegisIQ Limited and routes visitors to four focused financial applications:

- AegisIQ Equity — `aegisiqequity.ai`
- AegisIQ Stock Ledger — `aegisiqstockledger.com`
- AegisIQ Wealth Ledger — `aegisiqwealthledger.com`
- AegisIQ Investor Portal — `aegisiqfintech.com`

The corporate site explains the company, product family, AI operating model, and trust principles. Detailed product access, pricing, demonstrations, checkout, and product-specific disclosures remain on the applicable product site.

## Deployment

The project is a static site with no build command.

```text
Publish directory: .
Build command:     none
```

Netlify and Vercel configuration files are included.

## Main pages

```text
index.html
compare.html
pricing.html
equity.html
stock-ledger.html
wealth-ledger.html
investor-portal.html
```

## Home-page assets

```text
assets/home.css
assets/home.js
assets/aegisiq-financial-icon.webp
assets/aegisiq-og.jpg
```

Shared corporate assets remain in `assets/corporate.css`, `assets/corporate.js`, and `assets/visuals/`.

## Production checks

Before deployment:

1. Confirm every product, pricing, email, and legal URL.
2. Confirm current product-status language.
3. Run a broken-link and HTML validation check.
4. Review desktop, tablet, and mobile views.
5. Keep operational credentials, payment-account details, and internal implementation notes out of the publish directory.
6. Do not publish unimplemented cross-product integration or certification claims.
