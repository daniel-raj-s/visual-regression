# Playwright Visual Regression Testing (VRT) Blueprint
> A production-ready TypeScript automation framework demonstrating cross-browser visual comparisons, multi-device layout checks, and locator-based dynamic content masking.

---

## 🎯 The Business Value
Traditional E2E functional testing checks if buttons are present or input fields are writable, but completely misses rendering bugs, layout breakages, and CSS styling regressions. This blueprint establishes a **visual regression audit pipeline** designed to:
*   **Catch UI Regressions Instantly:** Assert pixel-perfect visual state comparison on every change.
*   **Enable Cross-Viewport Layout Consistency:** Audit landing grids, navigations, and card blocks under specific viewports (Desktop, Tablet, and Mobile devices).
*   **Ignore Dynamic Text with Element Masking:** Bypasses price tags, user descriptions, dates, or other content variables to audit layout frameworks without visual noise.
*   **Automatic Animation Freezing:** Disables transitions and animations during snapshot capture to eliminate baseline visual instability.

---

## 🛠️ Visual Auditing Use-Cases Demonstrated

### 1. Full-Page Snapshot Comparisons
Captures complete visual layouts (unauthenticated landing screens and catalog lists) across multiple browser projects.
*   **Implementation:** [full-page.spec.ts](./tests/visual/full-page.spec.ts)

### 2. Element-Level Snapshots & Masking
Focuses assertions on a single button/locator, and masks dynamic text/price fields to prove layout stability under content changes.
*   **Implementation:** [element-masking.spec.ts](./tests/visual/element-masking.spec.ts)

### 3. Programmatic Cross-Device Resizes
Resizes the viewport dynamically (Desktop, Tablet, Mobile) to audit grid layouts and responsive margins.
*   **Implementation:** [cross-device.spec.ts](./tests/visual/cross-device.spec.ts)

---

## 📂 Repository Structure

```text
├── .github/workflows/
│   └── visual-regression.yml     # Executes visual check suite on PR/commits
├── src/
│   └── pages/
│       ├── SwagHomePage.ts       # Page Object Model for landing views
│       └── SwagInventoryPage.ts  # Page Object Model for product feeds
├── tests/
│   └── visual/
│       ├── full-page.spec.ts     # Login & catalog layouts comparisons
│       ├── element-masking.spec.ts # Element snapshots & masked elements
│       └── cross-device.spec.ts  # Viewport size layout checks
├── playwright.config.ts          # Configurations (VRT threshold, freeze animations, browsers)
└── package.json                  # Dependencies (Playwright, TypeScript)
```

---

## 🚀 How to Run Locally

### Prerequisites
*   Node.js v18+

### Setup & Generate Baselines
Since visual regression compares screenshots against pre-saved baseline files, you must first initialize your baselines:

```bash
# Install package dependencies
npm install

# Initialize visual baseline screenshots
npm run test:update
```

### Run Visual Assertions
Once baselines exist, run the visual check suite:

```bash
# Execute pixel-comparison checks
npm run test
```

---

> [!TIP]
> You can manually trigger a full visual regression check and baseline update on GitHub Actions at any time using the **"Run workflow"** button inside the repository's Actions tab.
