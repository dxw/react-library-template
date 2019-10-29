# React library template

TODO: Replace the above heading with the library name.

## Using this template

Search for `TODO` across the project to customise the template to a specific
library.

TODO: Change the `name` field of the [`package.json`](package.json) and run
`npm install` to update the [`package-lock.json`](package-lock.json).

TODO: Remove this section when all TODOs are resolved.

## Running the tests

To run the full test suite, including format checking, linting, and building:

```bash
npm test
```

## Formatting the code

We use [Prettier](https://prettier.io/) to format our code. There are lots of
[editor integrations](https://prettier.io/docs/en/editors.html) available, and
the style is enforced by a Git pre-commit hook.

To run the formatter:

```bash
npm run format
```

## Linting the code

We use [ESLint](https://eslint.org/), in addition to TypeScript's compiler, for
verifying correctness and maintainability of code.

To run the linter:

```bash
npm run lint
```

To run the linter in fix mode:

```bash
npm run lint:fix
```

## Architecture decision records

We use ADRs to document architecture decisions that we make. They can be found
in `docs/adr` and contributed to with
[adr-tools](https://github.com/npryce/adr-tools).

## Source

This repository was bootstrapped from dxw's
[`react-library-template`](https://github.com/dxw/react-library-template).
