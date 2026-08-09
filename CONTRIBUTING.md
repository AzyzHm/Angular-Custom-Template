# Contributing

Thanks for taking the time to contribute! This document covers how to set up the project
locally and the conventions to follow when submitting changes.

## Getting Started

```bash
git clone https://github.com/AzyzHm/Angular-Custom-Template.git
cd Angular-Custom-Template
npm install
npm run prepare   # sets up the git hooks (husky)
npm start
```

The app will be available at `http://localhost:4200`.

## Branching

- Branch off `main`
- Use a descriptive branch name: `feat/short-description`, `fix/short-description`,
  `chore/short-description`, `docs/short-description`

## Commit Messages

This project loosely follows [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add truncate pipe
fix: correct disabled state on app-button
docs: update README getting started section
test: add integration test for home counter
chore: bump eslint to v9
```

## Running Tests Before You Push

```bash
# Lint + format check
npm run lint
npm run format:check

# Unit + integration tests (with coverage)
npm run test:coverage

# End-to-end tests
npm run e2e
```

All of the above run automatically in CI on every push and pull request please make sure
they pass locally first. `lint-staged` also runs ESLint and Prettier automatically on
staged files via a pre-commit hook.

## Adding a New Feature

A typical new feature (e.g. `Products`) touches these layers:

1. `src/app/features/products/` the feature's components + `products.routes.ts`
2. `src/app/core/services/` any new API service, built on top of `ApiService`
3. `src/app/core/models/` TypeScript interfaces for the feature's data
4. Register the lazy route in `src/app/app.routes.ts`
5. Tests:
   - `tests/unit/` isolated component/pipe/service logic
   - `tests/integration/` component + real child rendering, no mocking of collaborators
   - `tests/e2e/` user-facing flows through Playwright

## Code Style

- Standalone components only, no `NgModule`s
- `OnPush` change detection on every component
- Prefer Angular Signals for local component state
- Keep components thin; push logic into services
- SCSS variables/mixins live in `src/styles/`, reuse them instead of hardcoding values

## Pull Requests

- Keep PRs focused on a single concern
- Fill out the PR template, including the checklist
- Link any related issue with `Closes #123`
- A maintainer will review and may request changes before merging

## Reporting Bugs / Requesting Features

Please use the issue templates under **New Issue** rather than opening a blank issue, they
help make sure we get the information needed to act on it.

## Code of Conduct

This project follows a [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are
expected to uphold it.
