# Deployment

The public content is in `README.md`, rendered by `index.html`.

```sh
npm ci
npm run dev
```

Cloudflare Workers serves only the three public assets copied into `dist/`.

```sh
npm run deploy:check
npm run deploy
```

The Worker is named `shawmakesmagic` in the personal Cloudflare account:
https://shawmakesmagic.shawmakesmagic.workers.dev/

Authenticate Wrangler with the personal account before CLI deployment. The
account ID is pinned in `wrangler.jsonc` to prevent publishing to another account.
The initial deployment was uploaded through the Cloudflare dashboard. Automatic
deployment from GitHub is not connected. To enable Cloudflare Workers Builds,
connect `lalalune/website`, branch `main`, with build command `npm run build`
and deploy command `npx wrangler deploy`.

The existing `CNAME` is retained for the previous GitHub Pages site.
The new `shawmakesmagic.com` domain must be registered and connected as a
Worker custom domain before it can serve this deployment.
