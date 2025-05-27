# Playwright Snapshot Testing Demo (TypeScript)

This demo project shows how to use Playwright with TypeScript for Snapshot (Visual regression) testing.

## What is Snapshot Testing?
Snapshot testing captures a screenshot of a page or UI element and compares it with a previously stored version. If there are visual differences, the test will fail. This helps catch unintended UI changes early.

## Project Structure
playwright-snapshot-demo/
├── src/
│   └── tests/
│       └── snapshot.spec.ts     # Snapshot test cases
├── playwright.config.ts         # Playwright configuration
├── package.json
├── tsconfig.json
├── README.md                    # This file

## Setup Instructions

1. Clone the repository:

   git clone https://github.com/osandadeshan/playwright-snapshot-demo.git
   cd playwright-snapshot-demo

2. Install dependencies:

   npm install
   npx playwright install

3. Run the tests:

   npx playwright test

4. View the HTML test report (optional):

   npx playwright show-report

## Test Coverage
- Full-page snapshot of https://playwright.dev
- Element snapshot of the Playwright logo

## Configuration Highlights
- Visual diff threshold: 0.2 (adjustable)
- Baseline snapshots are stored under: tests/__screenshots__
- Failing snapshots show visual differences for debugging

## Tech Stack
- Playwright
- TypeScript
- Node.js
