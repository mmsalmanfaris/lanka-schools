# Contributing to lanka-schools

Thank you for your interest in contributing to `lanka-schools`. This project is an open-source initiative providing reliable administrative and geographical school datasets for developers in Sri Lanka.

Whether you are fixing a typo, updating contact details for a Zonal Education Office, adding new tests, or improving documentation, your contributions are welcome.

---

## Branching Strategy

We follow a two-branch workflow:

- **`main`**: The stable, production-ready release branch. Releases and npm publications are tagged and published strictly from `main`. Direct commits or PRs to `main` are not permitted.
- **`development`**: The active integration branch. **All feature branches, bug fixes, and Pull Requests (PRs) must be branched from and targeted against `development`.**

### Branch Naming Conventions

When creating your branch from `development`, use descriptive prefixes:

- `feat/feature-name` (e.g. `feat/search-by-postal-code`)
- `fix/bug-description` (e.g. `fix/zone-contact-update`)
- `docs/doc-update` (e.g. `docs/improve-readme-examples`)
- `test/test-description` (e.g. `test/add-zone-boundary-tests`)

---

## Local Development Setup

### 1. Prerequisites

- **Node.js**: v18.0.0 or later (v20+ recommended)
- **npm**: v9.0.0 or later (or `pnpm` / `yarn`)
- **Python**: v3.9+ (optional, only needed if you modify and rebuild the ETL pipeline in `scripts/build-data.py`)
- **Git**

### 2. Fork and Clone

```bash
# Clone your fork (replace with your username)
git clone https://github.com/<your-username>/lanka-schools.git
cd lanka-schools

# Switch to the development branch
git checkout development

# Create your feature branch from development
git checkout -b feat/my-awesome-feature
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Build and Test

```bash
# Build TypeScript bundles (ESM, CJS, and .d.ts declarations)
npm run build

# Run unit tests
npm run test

# Run tests in watch mode during development
npm run test:watch
```

---

## Dataset Guidelines

If you are proposing updates to the dataset (e.g., updating a school name, zone contact, or phone number):

1. **Cite Official Sources**: Any dataset modifications must reference an official Sri Lankan government source (such as the Ministry of Education website, Department of Census and Statistics, or official gazette/circular).
2. **Re-run the ETL pipeline**: If you modify source data in `raw/` or `scripts/build-data.py`, recompile all artifacts using:
   ```bash
   npm run data:build
   ```
3. **Verify Integrity**: Ensure all CSV, JSON, and SQLite outputs remain consistent and pass tests.

---

## Testing Guidelines

- We use **Vitest** for unit testing.
- Any new utility or lookup function must be accompanied by unit tests in `tests/`.
- Ensure tests pass with 100% green before submitting your PR:
  ```bash
  npm run test
  ```

---

## Submitting a Pull Request (PR)

1. **Commit your changes**: Write clear, semantic commit messages (e.g., `feat: add Tamil medium search filter`, `fix: update Horana zonal office phone number`).
2. **Push to your fork**:
   ```bash
   git push origin feat/my-awesome-feature
   ```
3. **Open a Pull Request**:
   - In GitHub, create a Pull Request.
   - **Important**: Ensure the **Base branch** is set to `development` (NOT `main`).
   - Fill out the PR description template describing what you changed, why, and any citations.
4. **Code Review**: A maintainer will review your PR, suggest any adjustments, and merge it into `development`. Once tested in `development`, changes will be merged into `main` for the next version release on npm.

---

## Code of Conduct

Please be respectful, courteous, and constructive in all discussions, issues, and code reviews. We are committed to building an inclusive and supportive open-source developer community in Sri Lanka.
