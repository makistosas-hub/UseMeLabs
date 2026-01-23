# Teisės draugas – AI legal-tech landing

Production-ready, local-first landing page for a Lithuanian AI legal assistant.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- next/font (Inter)
- lucide-react icons

## Local development (recommended for MVP testing)
1. Node.js 18+ (or 20+) installed.
2. `npm install`
3. Copy `.env.example` -> `.env.local`
4. `npm run dev`
5. Open `http://localhost:3000`

## Landbot chatbot
The Landbot widget is loaded globally from `components/LandbotEmbed.tsx`.
To change the bot, update the `configUrl` inside that component.

## Common local issues & fixes
- **Widget not appearing:** make sure `https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs` is not blocked.
- **Clipboard blocked in some browsers:** click the chip again or manually copy from the toast text.

## How to test intake templates end-to-end
1. Open the homepage and click a quick action chip.
2. Paste the template into the chat widget.
3. Confirm the `[TD:...]` header and `meta` footer are included.

## How intake chips work
- Each chip builds a structured Lithuanian template with a `[TD:...]` header.
- A meta footer is appended client-side: `path`, `timestamp`, and an anonymous session id.
- Templates are copied to clipboard for quick paste into the chatbot.

Edit templates in:
- `lib/templates.ts`

## Deploy to Vercel (optional)
1. Push the repo to GitHub.
2. Import into Vercel.
3. Add `NEXT_PUBLIC_SITE_URL` in the Vercel project settings.
4. Deploy.

## Scripts
- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`