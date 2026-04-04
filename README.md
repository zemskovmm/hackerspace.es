# Hackerspace.es — Community Landing Page

The official landing page for **Hackerspace.es**, the Spanish hackerspace community. A place for hackers, makers, developers, and creative technologists across Spain to find each other, share what they're building, and get involved.

---

## What is Hackerspace.es?

Hackerspace.es is a community of curious people who like to take things apart, build new things, and share what they learn. We run workshops, hacknights, talks, and irregular gatherings in Madrid, Barcelona, Valencia, Málaga, and online.

If you're into hardware, software, open source, electronics, 3D printing, biohacking, radio, retrocomputing, or anything adjacent — you're in the right place.

---

## Community contacts

| Channel | Link |
|---|---|
| Telegram (main chat) | [t.me/hackerspace_es](https://t.me/hackerspace_es) |
| GitHub (projects) | [github.com/hackerspace-es](https://github.com/hackerspace-es) |
| Matrix / Element | [#hackerspace-es:matrix.org](https://matrix.to/#/#hackerspace-es:matrix.org) |
| Mastodon | [@hackerspace_es@mastodon.social](https://mastodon.social/@hackerspace_es) |

The Telegram group is the most active day-to-day channel. Matrix is bridged to it if you prefer to stay off proprietary platforms.

---

## Contributing to this site

This page is community-maintained. If an event is wrong, a project is missing, or a link is dead — open a PR or ping someone in the Telegram.

### Running locally

```bash
npm install
npm run dev
```

Open [localhost:5173](http://localhost:5173).

### Building

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build
```

---

## Stack

One runtime dependency. That's it.

| | Package | Purpose |
|---|---|---|
| Runtime | `vue` | UI framework |
| Dev | `vite` + `@vitejs/plugin-vue` | Build tool |

No CSS framework. No component library. No router. No state manager. No utility belt. All styles are hand-written plain CSS with custom properties, split into per-component files. The whole thing builds in under 100ms and ships ~77 KB of JS (gzipped: ~31 KB).

The goal was to keep the site easy for any community member to pick up and edit without needing to know a specific framework's conventions.

---

## License

Content: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
Code: [MIT](https://opensource.org/licenses/MIT)
