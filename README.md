# fabtasticgames

Studio website for **Fabtastic Games** — plain HTML + CSS, no build step, published with GitHub Pages at https://fabtasticgames.com.

## Preview locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

(Use a local server rather than opening the files directly: the legal pages use root-relative links.)

## Structure

| Path | What it is |
| --- | --- |
| `index.html` | Home page: hero, how to play, featured game, coming next, follow on itch.io, press, about |
| `impressum.html`, `datenschutz.html` | Legal pages (placeholders — fill in before going live) |
| `404.html` | Not-found page (GitHub Pages uses it automatically) |
| `assets/css/style.css` | All styles. Change `--accent` in `:root` to re-colour the site |
| `assets/fonts/` | Self-hosted Bungee + Rubik (SIL OFL), no Google Fonts requests |
| `assets/img/` | Favicon; put screenshots, key art and the og-image here |
| `CNAME` | Custom domain for GitHub Pages |
| `.nojekyll` | Serve files as-is, no Jekyll processing |

Search `TODO` and `[` in `index.html` for the placeholders to replace.

## Publishing on GitHub Pages

1. Push to GitHub, then **Settings → Pages → Deploy from a branch → `main` / root**.
2. At your DNS provider, point `fabtasticgames.com` to GitHub Pages (A records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) and add a `www` CNAME to `<your-user>.github.io`.
3. Back in **Settings → Pages**, wait for the domain check, then tick **Enforce HTTPS**.

## Phone clients

Each game's phone client lives on its own subdomain (its own repo and `CNAME`, plus a DNS CNAME to `<your-user>.github.io`). This site doesn't link to them yet; players use the address shown on the TV. Games are never started from here.
