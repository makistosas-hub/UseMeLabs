# Teisės draugas – AI legal-tech landing

Production-ready, local-first landing page for a Lithuanian AI legal assistant. The primary interaction is Chatlio -> Slack.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- next/font (Inter)
- lucide-react icons

## Local development (recommended for MVP testing)
1. Node.js 18+ (or 20+) installed.
2. `npm install`
3. Copy `.env.example` -> `.env.local`
4. Paste the Chatlio embed code (see below).
5. `npm run dev`
6. Open `http://localhost:3000`

## Chatlio setup
### Option A: full embed snippet (recommended)
1. Open `.env.local`
2. Set:

```bash
NEXT_PUBLIC_CHATLIO_EMBED_CODE="<!-- paste Chatlio script here -->"
```

### Option B: widget ID only
If you only have a widget ID:

```bash
NEXT_PUBLIC_CHATLIO_WIDGET_ID="your-widget-id"
```

### Localhost notes
If Chatlio blocks localhost:
- Allowlist `localhost` in Chatlio settings (if available), or
- Use a local domain alias like `teises-draugas.local` in your hosts file, or
- Keep the placeholder panel (the site still renders fully).

## Common local issues & fixes
- **Chat not appearing:** confirm `.env.local` is set and restart `npm run dev`.
- **Script blocked on localhost:** use the allowlist or local domain alias above.
- **Clipboard blocked in some browsers:** click the chip again or manually copy from the toast text.

## How to test intake templates end-to-end
1. Open the homepage and click a quick action chip.
2. If Chatlio supports prefill, the message appears in the chat. Otherwise it copies to clipboard.
3. Paste into Chatlio and send.
4. Check Slack for the message header `[TD:...]` and the meta footer.

## Confirming messages arrive in Slack
- Send a test message in the Chatlio widget.
- Verify the Slack channel receives the text with the `[TD:...]` header and the `meta` footer line.

## How intake chips work
- Each chip builds a structured Lithuanian template with a `[TD:...]` header.
- A meta footer is appended client-side: `path`, `timestamp`, and an anonymous session id.
- The app tries to prefill the Chatlio message via JS API. If not available, it copies to clipboard.

Edit templates in:
- `lib/templates.ts`

## Deploy to Vercel (optional)
1. Push the repo to GitHub.
2. Import into Vercel.
3. Add environment variables from `.env.local` in the Vercel project settings.
4. Deploy.

## Scripts
- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`