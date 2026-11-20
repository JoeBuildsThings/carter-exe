# CARTER.EXE

An unofficial, browser-based fan project dedicated to CarterPCs.

CARTER.EXE is being built around two goals:

- Create a respectful opportunity for Carter or someone in his audience to help with a development-laptop upgrade.
- Publish a substantial, working engineering project that demonstrates the ability to design and ship useful web experiences for prospective freelance clients.

The project is independent and is not affiliated with CarterPCs, Rakugo Media, or Lenovo. No endorsement is claimed.

## Current status

Phase 1: project foundation.

Planned product areas include a lightweight browser game, a PC compatibility checker, a sourced creator dossier, a dedicated support page, and a separate freelance-hiring page. These features are not represented as complete until they are implemented and tested.

## Stack

- Next.js App Router with static export
- React and strict TypeScript
- Tailwind CSS
- Vitest for unit tests
- Playwright for browser tests
- GitHub Actions for continuous integration

The site is designed as a static browser experience. It does not require an application backend, database, authentication, or payment processing.

## Local development

Requirements: Node.js 22.13 or newer in the 22.x line and npm 10 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Verification

```bash
npm run lint
npm run typecheck
npm run test:unit
npm run build
```

Run browser tests separately:

```bash
npx playwright install chromium
npm run test:e2e
```

The production static export is generated in `out/`.

## Deployment

The repository is prepared for static deployment. The Vercel Git integration and production deployment will be configured after the hosting plan and project settings are confirmed.

## License

Released under the MIT License. See [LICENSE](./LICENSE).
