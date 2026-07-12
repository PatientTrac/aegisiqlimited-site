# AegisIQ Limited Corporate Site Revamp Handoff

## Approved site architecture

- `aegisiqlimited.com` is the corporate and product-family site.
- Each application site owns its detailed features, current plan table, checkout, and product-specific legal disclosures.
- The corporate `pricing.html` page is a pricing directory, not a duplicate plan table.
- The corporate site contains an overview, feature summary, comparison, and pricing link for every application.

## Product domains

- AegisIQ Equity: `https://aegisiqequity.ai`
- AegisIQ Stock Ledger: `https://aegisiqstockledger.com`
- AegisIQ Wealth Ledger: `https://aegisiqwealthledger.com`
- AegisIQ Investor Portal: `https://aegisiqfintech.com`

## Files replaced

- `index.html`
- `equity.html`
- `stock-ledger.html`
- `wealth-ledger.html`
- `investor-portal.html`
- `pricing.html`
- `sitemap.xml`
- `netlify.toml`

## Files added

- `compare.html`
- `assets/corporate.css`
- `assets/corporate.js`
- `assets/logo-mark.svg`
- `assets/logo-mark-mono.svg`
- `assets/app-icon.svg`
- `assets/visuals/network-command-center.svg`
- `assets/visuals/equity-workspace.svg`
- `assets/visuals/stock-ledger-workspace.svg`
- `assets/visuals/wealth-ledger-workspace.svg`
- `assets/visuals/investor-portal-workspace.svg`
- `assets/visuals/security-control-plane.svg`

## Design direction

The redesign intentionally avoids stock-photo memes, stick figures, and decorative clip art. It uses premium product-interface illustrations, an orbital financial network visual, deep navy surfaces, gold confidence cues, and product-specific accent colors.

## Important product-status rule

Do not claim that a cross-product data integration is live unless it has been implemented and tested. Corporate copy may explain the designed product family and operating fit, but implementation status must remain accurate.

## Pricing rule

Do not copy plan prices into the corporate site. Product pricing pages are the source of truth. Exact prices may appear on the corporate site only when a shared content source prevents drift.

## Claude Code instruction

1. Review all changed HTML, CSS, JavaScript, SVG, Netlify, sitemap, and documentation files.
2. Preserve the existing legal-policy text unless separately approved.
3. Confirm each external product and pricing URL before production deployment.
4. Run link checks, HTML parsing, accessibility checks, and a mobile/desktop visual review.
5. Commit as: `feat(corporate): launch AegisIQ application family site`
