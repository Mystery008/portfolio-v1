# Hybrid Recruiter Lab Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade the portfolio into a polished AI/ML + MLOps recruiter-lab experience.

**Architecture:** Keep the current Next.js one-page app and update existing section components. Centralize content in `lib/portfolio-data.ts`, then render recruiter proof, lifecycle skills, case-study projects, and sharper contact/experience copy through the existing component structure.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, lucide-react, existing custom components.

---

## File Structure

- Modify `lib/portfolio-data.ts`: sharpen profile copy and add recruiter scorecard, proof points, lifecycle skill groups, project case-study fields, and ticker labels.
- Modify `components/hero-section.tsx`: add role positioning, recruiter scorecard, status panel, better CTAs, and lab-style proof details.
- Modify `components/marquee-ticker.tsx`: read ticker items from shared data and improve recruiter-language labels.
- Modify `components/about-section.tsx`: update pillars and copy toward lifecycle/productized ML systems.
- Modify `components/skills-section.tsx`: render lifecycle skills as capability cards with proof notes.
- Modify `components/projects-section.tsx`: render featured project as a mini case study with pipeline steps and recruiter takeaway.
- Modify `components/experience-section.tsx`: make internship bullets more practical and impact-oriented.
- Modify `components/contact-section.tsx`: make the close more recruiter-friendly and direct.
- Modify `app/globals.css`: rebalance color tokens and add small lab/status utilities while respecting reduced motion.

## Tasks

### Task 1: Validate Baseline

**Files:**
- Read: `package.json`
- Read: `app/page.tsx`
- Read: `components/*.tsx`
- Read: `lib/portfolio-data.ts`

- [ ] **Step 1: Run lint before edits**

Run: `pnpm lint`

Expected: Either passes, or reports existing issues that must be noted before implementation.

- [ ] **Step 2: Run build before edits**

Run: `pnpm build`

Expected: Either passes, or reports existing issues that must be noted before implementation.

### Task 2: Update Portfolio Data

**Files:**
- Modify: `lib/portfolio-data.ts`

- [ ] **Step 1: Add shared recruiter data**

Add these exports:

```ts
export const recruiterScorecard = [
  { label: 'Role Fit', value: 'AI/ML + MLOps' },
  { label: 'Strength', value: 'End-to-end ML pipelines' },
  { label: 'Mode', value: 'Experiment -> Production' },
]

export const proofPoints = [
  {
    label: 'Model Lifecycle',
    value: 'Data prep, training, evaluation, deployment',
  },
  {
    label: 'MLOps Practice',
    value: 'MLflow, DVC, Docker, CI/CD, monitoring',
  },
  {
    label: 'Product Mindset',
    value: 'APIs, dashboards, automation, clear handoffs',
  },
]

export const tickerItems = [
  'AI/ML ENGINEER',
  'MLOps',
  'MLFLOW',
  'DVC',
  'FASTAPI',
  'DOCKER',
  'CI/CD',
  'MODEL MONITORING',
  'POWER BI',
  'PYTHON',
]
```

- [ ] **Step 2: Reframe skill groups**

Change `skillGroups` so each group has `label`, `tag`, `summary`, and `skills`.

- [ ] **Step 3: Add project case-study fields**

For each project, add `problem`, `build`, `takeaway`, and optional `pipeline`.

### Task 3: Redesign Hero

**Files:**
- Modify: `components/hero-section.tsx`

- [ ] **Step 1: Import new data**

Use:

```ts
import {
  profile,
  proofPoints,
  recruiterScorecard,
} from '@/lib/portfolio-data'
```

- [ ] **Step 2: Replace generic hero details**

Render the role title, headline, summary, CTA row, recruiter scorecard, and a lab status panel.

- [ ] **Step 3: Keep existing image and social links**

Preserve `Image`, `TiltCard`, `GithubIcon`, `LinkedinIcon`, and `RotatingBadge`.

### Task 4: Add Proof Ticker And About Polish

**Files:**
- Modify: `components/marquee-ticker.tsx`
- Modify: `components/about-section.tsx`

- [ ] **Step 1: Use data-backed ticker**

Import `tickerItems` from `lib/portfolio-data.ts` and map those labels.

- [ ] **Step 2: Rewrite about pillars**

Use pillars around `Build`, `Track`, `Deploy`, and `Explain`, with concise recruiter-friendly copy.

### Task 5: Rebuild Skills As Lifecycle Cards

**Files:**
- Modify: `components/skills-section.tsx`

- [ ] **Step 1: Render skill summaries**

Show `group.summary` under each lifecycle title.

- [ ] **Step 2: Preserve chip rendering**

Keep each skill as a small pill with hover polish.

### Task 6: Turn Projects Into Case Studies

**Files:**
- Modify: `components/projects-section.tsx`

- [ ] **Step 1: Featured project**

Render `problem`, `build`, `pipeline`, `features`, `stack`, and `takeaway`.

- [ ] **Step 2: Supporting projects**

Render `problem`, `build`, `stack`, and `takeaway` for each non-featured project.

### Task 7: Update Experience And Contact

**Files:**
- Modify: `components/experience-section.tsx`
- Modify: `components/contact-section.tsx`
- Modify: `lib/portfolio-data.ts`

- [ ] **Step 1: Replace generic internship bullets**

Use realistic, specific bullets about lifecycle work, MLOps practices, collaboration, and applied AI projects.

- [ ] **Step 2: Update contact close**

Make it clear Nidhi is targeting AI/ML, MLOps, and data-driven product teams.

### Task 8: Visual System Polish

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Rebalance palette**

Keep dark/light support, reduce purple dominance, and add teal/cyan/green accents through existing token values.

- [ ] **Step 2: Add utilities**

Add small utilities for scan lines, status dots, and recruiter-lab panels only if used by components.

### Task 9: Verification

**Files:**
- Run: `pnpm lint`
- Run: `pnpm build`

- [ ] **Step 1: Run lint**

Expected: no lint errors.

- [ ] **Step 2: Run build**

Expected: production build completes.

- [ ] **Step 3: Start dev server**

Run: `pnpm dev`

Expected: local Next.js app starts and can be opened in the browser.

- [ ] **Step 4: Visual review**

Check desktop and mobile widths for text overflow, CTA usability, image rendering, section spacing, and dark/light theme behavior.
