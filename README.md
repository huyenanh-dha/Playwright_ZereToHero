# Playwright_ZereToHero

Playwright UI tests (TypeScript) written while following the course *Playwright: Web Automation Testing From Zero to Hero*.

## Project structure

| Path | Description |
| --- | --- |
| `tests/` | Test specs (`test-with-page-objects.spec.ts` is the main one) |
| `page-object/` | Page objects and `PageManager` |
| `fixture.ts` | Custom `test` with a `pom` fixture (opens `/` and provides a `PageManager`) |
| `playwright.config.ts` | Playwright config: timeouts, retries, projects, env loading |
| `.env`, `.env.qa` | Environment variables per environment |
| `screenshots/` | Screenshots saved by tests |

## Setup

```bash
npm install
npx playwright install
```

## Environment variables

Variables are loaded with `dotenv` from `.env`, or from `.env.<TEST_ENV>` when `TEST_ENV` is set.

```
URL=<base url of the app under test>
TEST_USER_EMAIL=<email>
TEST_USER_PASSWORD=<password>
```

## Running tests

```bash
npm run po-test-chromium       # chromium, uses .env
npm run po-test-chromium:qa    # chromium, uses .env.qa (TEST_ENV=qa)
npm run po-test-firefox        # firefox
npm run po-test-all            # chromium + firefox
npx playwright show-report     # open the HTML report
```

## Config highlights

- Test timeout 10s, expect timeout 5s, global timeout 60s
- 1 retry, trace on first retry, video off
- Projects: chromium, firefox, webkit
