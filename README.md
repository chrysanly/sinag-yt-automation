# Sinag YTAutomation: website

The public website for **Sinag YTAutomation**, a private desktop app its owner uses to turn their own
long videos into short vertical clips and post them to their own TikTok and YouTube accounts.

Live: **https://chrysanly.github.io/sinag-yt-automation/**

| Page | Path |
|---|---|
| Home | `/` |
| Terms of Service | `/terms.html/` |
| Privacy Policy | `/privacy.html/` |
| TikTok sign-in bridge (only for a Web-platform TikTok app) | `/tiktok/callback/` |
| Security contact (RFC 9116) | `/.well-known/security.txt` |

## How it's built

Plain HTML and one stylesheet, hosted free on GitHub Pages (no build step, no server, no cost).

- **No tracking:** no cookies, analytics or third-party scripts; nothing is loaded from other sites.
- **Security headers:** a Content-Security-Policy and `no-referrer` on every page (as `<meta>` tags,
  since GitHub Pages can't set headers). No inline scripts.
- **Verification files:** the `tiktok*.txt` files are TikTok's site-verification signatures. They
  are copied into each verified path (`/`, `/privacy.html/`, `/terms.html/`, `/tiktok/`,
  `/tiktok/callback/`); keep them byte-for-byte (`.gitattributes` stops line-ending changes).
- `privacy.html/` and `terms.html/` are folders on purpose: TikTok verifies a URL by looking for its
  file *inside* that URL.

## Editing

Change the HTML, commit and push to `main`; GitHub Pages republishes in about a minute. Update the
"Last updated" date on Terms or Privacy whenever their content changes.
