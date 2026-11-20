# CREATOR ARCADE

An independent, browser-based PC creator arcade.

The project has two goals:

- Give PC and tech communities a small, playable experience inspired by featured creators.
- Ship a substantial, reviewable web product that demonstrates real engineering work.

The project is unofficial and independent. It is not affiliated with or endorsed by any featured creator, their partners, or Lenovo.

## Current lineup

- CarterPCs: @carterpcs on TikTok.
- KayJayOhPCs: @kayjayohpcs on TikTok.

Creator details and links are kept in src/lib/creators.ts, separate from the reusable game engine. New creator editions can be added to the roster without duplicating the gameplay component.

## Current features

- /play: choose a creator edition.
- /play/carterpcs: CarterPCs edition of Bench Rush.
- /play/kayjayohpcs: KayJayOhPCs edition of Bench Rush.
- /support: development-laptop specifications, inspection guidance, and direct support options.
- /hire: separate information for paid development enquiries.

Bench Rush contains six timed PC hardware decisions, accessible touch and keyboard controls, answer feedback, a three-strike limit, and a clear result. The optional letter can be opened after either a win or a loss. There is no payment collection.

The PC compatibility checker and sourced creator dossier remain planned. They will not be represented as complete until implemented and tested.

## Stack

- Next.js App Router with static export
- React and strict TypeScript
- Tailwind CSS
- Vitest for unit tests
- Playwright for browser tests
- GitHub Actions for continuous integration

The site is a static browser experience. It does not require an application backend, database, authentication, or payment processing.

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

The project is prepared for static deployment. Production deployment settings remain separate from this feature branch.

## License

Released under the MIT License. See LICENSE.
