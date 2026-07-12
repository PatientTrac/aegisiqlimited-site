# AegisIQ Limited Corporate Site

Static corporate website for `aegisiqlimited.com`.

## Purpose

This site explains AegisIQ Limited and routes visitors to four distinct applications:

- AegisIQ Equity — `aegisiqequity.ai`
- AegisIQ Stock Ledger — `aegisiqstockledger.com`
- AegisIQ Wealth Ledger — `aegisiqwealthledger.com`
- AegisIQ Investor Portal — `aegisiqfintech.com`

Detailed plan pricing remains on each product site. The corporate pricing page is a directory.

## Deployment

The project is a static Netlify site with no build command.

```text
Publish directory: .
Build command:     none
```

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

## Design assets

New corporate assets are located in:

```text
assets/corporate.css
assets/corporate.js
assets/visuals/
```

The existing legal pages and their legacy stylesheet are retained to avoid changing approved policy wording during this design update.

## Review documentation

```text
docs/SITE_REVIEW.md
docs/CORPORATE_SITE_HANDOFF.md
```

## Required production checks

Before deployment:

1. Confirm every product and pricing URL.
2. Confirm the status wording for AegisIQ Wealth Ledger.
3. Run a broken-link check.
4. Review desktop and mobile views.
5. Confirm the legal contact and sales addresses.
6. Do not publish unimplemented cross-product integration claims.
