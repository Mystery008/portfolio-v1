# Hybrid Recruiter Lab Portfolio Redesign

## Goal

Refresh the current one-page portfolio for a balanced AI/ML + MLOps role. The site should feel like a polished hiring dossier: professional enough for top-company recruiters, but creative and interactive enough to be memorable.

## Recruiter Judgment

The current template has the right sections and a relevant AI/MLOps story, but it reads like a generic portfolio. It needs stronger proof, clearer positioning, more outcome-focused project storytelling, and a visual system that feels intentional.

## Target Positioning

Primary role signal: Balanced AI/ML + MLOps Engineer.

The portfolio should show that Nidhi can:

- Build and evaluate machine learning models.
- Turn experiments into production-oriented pipelines.
- Use MLOps tools such as MLflow, DVC, Docker, GitHub Actions, FastAPI, monitoring, and cloud storage.
- Communicate project value clearly to technical and non-technical reviewers.

## Visual Direction

Use a hybrid recruiter-lab style:

- Professional first, creative second.
- Preserve dark/light theme support.
- Reduce the current generic purple-heavy feel with a more balanced palette and crisper contrast.
- Use subtle motion, hover states, badges, status indicators, and lab-like details.
- Avoid visual clutter, gimmicks, or effects that make content harder to scan.

## Content Architecture

Keep the current one-page structure, but sharpen each section.

### Hero

The first viewport should immediately answer: who is this, what role are they targeting, and why should a recruiter keep reading?

Include:

- Clear role title: AI/ML + MLOps Engineer.
- Stronger headline focused on shipping ML systems, not only building models.
- Quick recruiter scorecard with availability/location, strongest tools, and role fit.
- Primary CTAs for projects and resume.
- Secondary CTAs for GitHub and LinkedIn.

### Recruiter Proof Strip

Add a compact evidence band near the top with 3-4 recruiter-friendly proof points, such as:

- End-to-end ML pipelines.
- Experiment tracking and data versioning.
- API deployment and containerization.
- Monitoring and retraining awareness.

### Skills

Reframe skills by ML lifecycle instead of only category lists:

- Model building.
- Data and analytics.
- Experiment tracking and versioning.
- Deployment and APIs.
- Automation and monitoring.

This makes the skill section read like capability, not keyword stuffing.

### Projects

Projects should become mini case studies. Each card should show:

- Problem.
- What was built.
- Pipeline or workflow.
- Stack.
- Recruiter takeaway.

The Vehicle Insurance Cross-Sell MLOps Pipeline should be visually featured as the strongest project. It should feel interactive and premium.

### Experience

Rewrite the internship content to be more impact-oriented and less generic. Keep claims realistic if exact metrics are not available.

### Contact

Make the closing section direct and recruiter-friendly:

- State target opportunities.
- Keep email, LinkedIn, GitHub, and resume easy to access.
- Use confident copy without overpromising.

## Components And Data

Prefer updating existing components and `lib/portfolio-data.ts` instead of introducing a new architecture.

Likely files to update:

- `lib/portfolio-data.ts`
- `components/hero-section.tsx`
- `components/marquee-ticker.tsx`
- `components/about-section.tsx`
- `components/skills-section.tsx`
- `components/projects-section.tsx`
- `components/experience-section.tsx`
- `components/contact-section.tsx`
- `app/globals.css`

Add new small components only if they remove meaningful duplication or make complex sections easier to read.

## Interaction Design

Use interactions that support the recruiter story:

- Hover states for cards and skill chips.
- Project cards that reveal lifecycle details or proof points.
- Subtle animated status or pipeline details in the hero or featured project.
- Existing reveal and tilt patterns may be reused.

Respect reduced-motion settings.

## Testing And Verification

Verification should include:

- `pnpm lint`
- `pnpm build`
- Local visual review on desktop and mobile widths if the dev server runs successfully.

Check that text does not overflow, CTAs are usable on mobile, images render, and the portfolio still supports light/dark mode.

## Scope Boundaries

Do not add a backend, CMS, or external services.

Do not invent fake metrics, companies, or experience. If exact outcomes are unknown, phrase project impact as recruiter takeaways and demonstrated capabilities.

Do not redesign into a landing page. The first screen should be the actual portfolio experience.
