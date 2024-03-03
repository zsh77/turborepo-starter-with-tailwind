# Turborepo starter

This is my Turborepo starter.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by the `web` application
- `@repo/utils`: a typescript library shared by the `web` application and `ui` package
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Tailwindcss](https://tailwindcss.com/) for styling
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

(If it's for the first time don't forget to run `pnpm i`)

```
cd turborepo-starter-with-tailwind
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

(If it's for the first time don't forget to run `pnpm i`)

```
cd turborepo-starter-with-tailwind
pnpm dev
```

## How to run it with npm?

Follow these steps:

1. remove `pnpm-lock.yaml` and `pnpm-workspace.yaml` from root.
2. add this to the root package.json :

```
"workspaces": [
  "apps/*",
  "packages/*"
]
```

3. while you're in the root package.json, change `packageManager`'s value to `npm@your_npm_version`. You can get your npm version by running `npm -v`.
4. replace every `workspace:*` in each package.json with `*`.
5. now run `npm i` to install your dependencies and it's done!
