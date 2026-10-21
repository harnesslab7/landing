# slashworkspace.com

Landing page for /workspace. Next.js 15 (App Router), TypeScript, plain CSS, no UI library.

## Run locally

```bash
npm install
cp .env.example .env.local   # fill in WAITLIST_WEBHOOK_URL
npm run dev                  # http://localhost:3000
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel: Add New > Project > import the repository. Framework is detected as Next.js, no settings to change.
3. Project > Settings > Environment Variables: add `WAITLIST_WEBHOOK_URL` (and `WAITLIST_WEBHOOK_SECRET` if you set one in the script below) for Production and Preview.
4. Deploy. Then Project > Settings > Domains: add `slashworkspace.com` and `www.slashworkspace.com`, and set the DNS records Vercel shows at your registrar.

Every push to the default branch redeploys production.

## Waiting list storage

The form posts to `/api/waitlist`, which validates the input and forwards one JSON record to `WAITLIST_WEBHOOK_URL`. The simplest target is a Google Sheet behind an Apps Script web app, on the slashworkspace.com Google Workspace account:

1. Create a Sheet with the header row: `submitted_at`, `email`, `team_size`, `tools`.
2. Extensions > Apps Script, replace the code with:

```js
const SECRET = ""; // same value as WAITLIST_WEBHOOK_SECRET, or leave empty

function doPost(e) {
  const d = JSON.parse(e.postData.contents);
  if (SECRET && d.secret !== SECRET) {
    return ContentService.createTextOutput("forbidden").setMimeType(ContentService.MimeType.TEXT);
  }
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  sheet.appendRow([d.submitted_at, d.email, d.team_size, d.tools]);
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}
```

3. Deploy > New deployment > Web app. Execute as: Me. Who has access: Anyone. Copy the web app URL into `WAITLIST_WEBHOOK_URL`.

The route handler also drops submissions where the hidden `website` field is filled (a bot trap) and returns 503 with a mailto fallback when the variable is not set, so the page never fails silently.

## Placeholders still in the page

- `[LEGAL ENTITY NAME]` in the footer (`app/page.tsx`).

## Structure

```
app/
  layout.tsx            Google Fonts link (Inter, JetBrains Mono, Nunito), metadata
  globals.css           all styles
  page.tsx              the page
  components/
    WaitlistForm.tsx    client form
  api/waitlist/route.ts POST handler
```
