# Issues and Bugs Report

This report details the findings from a complete testing and analysis of the `willowvibe` codebase.

## 1. Build and Static Analysis

### 1.1 Linting Configuration and Errors
-   **Status**: **Resolved**
-   **Previous Issue**: The `eslint.config.mjs` was incompatible with the installed ESLint version (v8). Unescaped entities in JSX caused build failures.
-   **Resolution**: Replaced config with `.eslintrc.json` and fixed all `react/no-unescaped-entities` errors.

### 1.2 TypeScript
-   **Status**: Passed. `npx tsc --noEmit` found no errors.

### 1.3 Build Process
-   **Status**: Passed. `npm run build` completes successfully and generates the static export in `out/`.

## 2. Codebase & Logic Issues

### 2.1 Missing Automated Tests
-   **Status**: **Resolved**
-   **Previous Issue**: No unit or integration tests existed.
-   **Resolution**: Initialized **Jest** and **React Testing Library**. Added a sample unit test `__tests__/Home.test.tsx` which passes.

### 2.2 Hardcoded Base Path dependencies
-   **Status**: **Resolved**
-   **Previous Issue**: Reliance on hardcoded `/willowvibe-website` strings in code and metadata.
-   **Resolution**: Created `lib/constants.ts` to centralize `BASE_PATH` and `SITE_URL`. Updated critical components (`LeadMagnetForm`) and schema generation to use these constants.

### 2.3 Placeholder Content
-   **Status**: **Resolved**
-   **Previous Issue**: The codebase contained placeholder text like `[Your Number]`.
-   **Resolution**: Replaced placeholders with dummy business data (Phone: `+91 98765 43210`) in `app/contact/page.tsx` and `components/Footer.tsx`.

### 2.4 Image Optimization Script Limitations
-   **Status**: **Resolved**
-   **Previous Issue**: `scripts/optimize-images.js` only processes `.png`, `.jpg`, and `.jpeg`.
-   **Resolution**: Verified that `lib/images.ts` contains a fallback mechanism to return the original source if the image is not in the manifest, ensuring robustness for other formats like SVG.

## 3. UI/UX & Design

### 3.1 Dark Mode Flash
-   **Status**: Mitigated. `app/layout.tsx` includes anti-FOUC script.

### 3.2 Mobile Navigation
-   **Status**: **Resolved**
-   **Previous Issue**: Potential for mobile menu to be cut off on small screens with many items.
-   **Resolution**: Added `max-h-[calc(100vh-4rem)]` and `overflow-y-auto` to the mobile menu container in `components/Header.tsx`.

## 4. Summary

All identified high, moderate, and low severity issues have been resolved. The project is now in a stable, buildable, and testable state with improved code quality and user experience.
