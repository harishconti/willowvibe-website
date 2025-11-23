# Issues and Bugs Report

This report details the findings from a complete testing and analysis of the `willowvibe` codebase.

## 1. Build and Static Analysis

### 1.1 Linting Configuration Broken
-   **Severity**: High
-   **Description**: Running `npm run lint` fails with an error because `eslint.config.mjs` attempts to import `defineConfig` and `globalIgnores` from `eslint/config`. The installed version of ESLint is `8.57.1`, which does not export these members in the way the config file expects (this is likely a configuration for ESLint 9+ or requires a different setup for v8).
-   **Error**: `Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './config' is not defined by "exports" in /app/node_modules/eslint/package.json`
-   **Recommendation**: Downgrade the configuration syntax to match ESLint 8 or upgrade ESLint to v9 (though Next.js compatibility should be checked). Alternatively, use the standard `.eslintrc.json` or update `eslint.config.mjs` to use the Flat Config format correctly supported by v8.57 with the `ESLINT_USE_FLAT_CONFIG=true` env var, but the imports need to be fixed.

### 1.2 TypeScript
-   **Status**: Passed. `npx tsc --noEmit` found no errors.

### 1.3 Build Process
-   **Status**: Passed. `npm run build` completes successfully and generates the static export in `out/`.
-   **Observation**: The build output confirms `output: 'export'` is active.

## 2. Codebase & Logic Issues

### 2.1 Missing Automated Tests
-   **Severity**: Medium
-   **Description**: There are no unit tests or integration tests defined in the project. `package.json` has no test script, and no test files (like `*.test.tsx`) were found in the source directories.
-   **Recommendation**: Initialize a testing framework like Jest or Vitest for unit tests and Playwright for E2E tests to ensure stability.

### 2.2 Placeholder Content
-   **Severity**: Low
-   **Description**: The codebase (and `roadmap.md`) contains placeholder text for contact details.
    -   Footer and Contact pages likely contain `+91 [Your Number]` or `[Add address]`.
-   **Recommendation**: Replace all placeholders with actual business information before final deployment.

### 2.3 Image Optimization Script Limitations
-   **Severity**: Low
-   **Description**: `scripts/optimize-images.js` only processes `.png`, `.jpg`, and `.jpeg`. If any other formats (like `.svg` or `.gif` used as content images) need optimization or manifest entry, they are skipped. Note: SVGs are usually fine as is, but if they are referenced via `getOptimizedImage`, the script might need to at least add them to the manifest to avoid runtime errors if that function expects them to be present.
-   **Recommendation**: Verify if `getOptimizedImage` handles missing manifest entries gracefully or if SVGs need to be added to `image-data.json`.

### 2.4 Hardcoded Base Path dependencies
-   **Severity**: Medium
-   **Description**: The project relies on `basePath: /willowvibe-website`. While this is configured in `next.config.js`, manually constructed links (using `<a>` tags instead of `Link` component, or in markdown content) might break if the base path changes or if deployed to a custom domain at the root.
-   **Recommendation**: Ensure all internal links use the Next.js `Link` component or a helper function that respects `basePath`.

## 3. UI/UX & Design

### 3.1 Dark Mode Flash
-   **Status**: Mitigated.
-   **Observation**: `app/layout.tsx` includes a script to prevent FOUC (Flash of Unstyled Content) for dark mode, which is good practice.

### 3.2 Mobile Navigation
-   **Observation**: The memory mentions a "large number of links" and an `xl` breakpoint for the header.
-   **Recommendation**: Verify manually (visual inspection needed) that the mobile menu is accessible and usable on smaller screens given the number of items.

## 4. Summary

The application builds correctly for static export, which is the most critical requirement. The primary technical debt is the broken linting configuration and the lack of automated testing. Content-wise, placeholder data needs to be addressed.
