# CARTER.EXE

An unofficial, browser-based fan project dedicated to CarterPCs.

CARTER.EXE has two independent goals:

- Create a respectful opportunity for Carter or someone in his audience to help with a development-laptop upgrade.
- Publish a substantial, working engineering project that demonstrates the ability to design and ship useful web experiences for prospective freelance clients.

The project is independent and is not affiliated with CarterPCs, Rakugo Media, or Lenovo. No endorsement is claimed.

## Current status

Phase 2: creator arcade.

Available routes and features:

- /play: choose the CarterPCs or KayJahoPC creator edition.
- /play/carterpcs: play the CarterPCs edition of Bench Rush.
- /play/kayjahopc: play the KayJahoPC edition of Bench Rush.
- Six timed PC component questions, touch and keyboard accessible controls, a three-strike limit, and a clear win/loss result.
- An optional letter available after either outcome, with a transparent laptop request and a link to the workstation support page.
- /support: target laptop specifications, inspection checklist, and direct support options.
- /hire: separate information for paid development enquiries.

The PC compatibility checker and sourced creator dossier remain planned. They will not be described as complete until implemented and tested.

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

~~~bash
npm install
npm run dev
~~~

Open http://localhost:3000.

## Verification

~~~bash
npm run lint
npm run typecheck
npm run test:unit
npm run build
~~~

Run browser tests separately:

~~~bash
npx playwright install chromium
npm run test:e2e
~~~

The production static export is generated in out/.

## Deployment

The repository is prepared for static deployment. The Vercel Git integration and production deployment will be configured after the hosting plan and project settings are confirmed.

## License

Released under the MIT License. See LICENSE.
