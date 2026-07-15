# FashionFlow AI

**AI-powered fashion commerce & growth platform.**

FashionFlow AI is a multi-tenant SaaS platform for clothing stores, fashion brands, boutique owners, and online fashion businesses. It unifies product management, inventory, POS, order management, CRM, marketing automation, analytics, and generative AI into one operating system for fashion commerce — replacing the 4–6 disconnected tools (Shopify/Square for POS, Meta Ads/Mailchimp for marketing, Canva/freelancers for content, spreadsheets for CRM) that fashion retailers stitch together today.

Full product spec: [`docs/PRD.md`](docs/PRD.md).

## What it does

- **Store & catalog** — multi-branch stores, products with size/color variant matrices, categories/brands/collections, CSV import/export.
- **Inventory & suppliers** — per-branch stock tracking, low-stock alerts, purchase orders, full transaction audit trail.
- **Orders & POS** — unified order pipeline across online storefront and in-person POS, refunds, coupons, invoices.
- **CRM** — customer profiles, purchase history, automatic segmentation (New/Frequent/VIP/Inactive).
- **Marketing** — campaigns (seasonal, flash sale, discount), promo codes, audience targeting from CRM segments.
- **Storefront & landing pages** — public storefront and campaign-specific landing pages, no web developer required.
- **Messaging center** — unified inbox across WhatsApp and email.
- **Analytics** — fashion-specific dashboards: sales, slow-moving stock, customer LTV, campaign ROI, storefront traffic funnels.
- **AI module** (first-class, not a bolt-on): AI Product Writer, AI Fashion Designer, AI Campaign Generator, AI Store Assistant, AI Customer Insights, AI Inventory Forecasting, AI Recommendation Engine.
- **Real-time** — live order/inventory/messaging/campaign updates via WebSockets.

## Roles

`Platform Admin` (cross-tenant platform staff) · `Store Owner` (full control of owned stores) · `Manager` (elevated access within assigned branches) · `Employee` (Sales or Warehouse sub-type, scoped to one branch). See `docs/PRD.md` §4 for the full permission matrix.

## Tech stack

| Layer | Current | Target (per PRD) |
|---|---|---|
| Backend | Laravel 13, PHP 8.3 | Laravel 12+, PHP 8.2+ |
| Database | SQLite | MySQL |
| Frontend | Vue 3, TypeScript, Inertia.js v3 | same, + SSR |
| State | Pinia | Pinia |
| i18n | vue-i18n (English; Arabic/RTL planned) | English + Arabic, full RTL |
| Styling | Tailwind CSS v4 | Tailwind CSS v4, shadcn-vue |
| Icons | lucide-vue-next | — |
| Queues/jobs | Laravel Queues | + Laravel Horizon |
| Real-time | — | Laravel Reverb (WebSockets) |
| Cache/queue backend | database driver | Redis |
| File storage | local disk | AWS S3 |
| Monitoring | — | Sentry, Laravel Pulse |
| Charts | — | Chart.js |

The app is being built up toward this target stack incrementally; see [`CLAUDE.md`](CLAUDE.md) for what's actually implemented right now versus planned.

## Getting started

```bash
composer install && npm install
cp .env.example .env && php artisan key:generate
php artisan migrate
composer run dev   # server + queue listener + log tail + Vite, via `php artisan dev`
```

Run tests: `php artisan test --compact`. Full command reference (lint, format, type-check, CI check) is in `CLAUDE.md`.

## Architecture principles

The codebase follows a domain-oriented architecture: Service Layer, Action classes, DTOs, Form Requests, Policies & Gates, Events & Listeners, Jobs & Queues, Eloquent API Resources, thin controllers, and dependency injection via the Laravel service container. Multi-tenancy is a shared database/shared schema design — every store-scoped entity is filtered by `store_id` at the service/repository layer (never left to controllers), and cross-aggregate consistency (e.g. an Order decrementing Inventory) flows through domain events rather than direct cross-aggregate writes. See `docs/PRD.md` §15–18 for the full domain model, and `CLAUDE.md` for AI-agent-facing conventions.
