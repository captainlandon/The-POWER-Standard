# Public Release Readiness Checklist

This repository is preparing to move from private prototype work to a public open-source civic-tech project. The checklist below should be completed before changing repository visibility to public.

## 1. Secrets and environment safety

- [x] `.env*` files are ignored by Git.
- [x] `.env.example` contains placeholders only.
- [x] Gemini credentials are read server-side from `process.env.GEMINI_API_KEY`.
- [ ] Re-scan full Git history for secrets before publication.
- [ ] Rotate any credential if there is uncertainty about whether it was ever exposed outside GitHub.

## 2. Civic-data integrity

- [x] API demonstration endpoints now identify prototype/demo status explicitly.
- [x] The AI plan reviewer no longer produces a composite political score or letter grade.
- [x] Fallback AI/rules-engine responses preserve uncertainty instead of fabricating jurisdiction-specific facts.
- [ ] Audit `src/data/mockData.ts` record by record.
- [ ] Remove or downgrade every `Verified Real-World Record` label that lacks an exact, checked primary source.
- [ ] Replace source placeholders with verified URLs before calling records verified.
- [ ] Confirm dates, dollar amounts, office names, legal citations, vote counts, and outcome statistics.
- [ ] Ensure every demo record is visibly marked as demo data throughout the UI.

## 3. Methodology and public claims

- [x] POWER uses multidimensional review instead of a single score.
- [x] Unknown is treated as a valid epistemic state.
- [x] Official sources are treated as evidence for bounded claims, not as universal truth.
- [x] Ethics/influence analysis prohibits unsupported allegations of wrongdoing or corrupt intent.
- [ ] Review all UI copy for claims such as “verified,” “official,” “certified,” “objective,” or “independent” and make sure each is justified.
- [ ] Review jurisdiction-specific legal guidance for overstatement.
- [ ] Add exact methodology documentation for evidence classification and correction procedures.

## 4. Build and code quality

- [ ] Run `npm install`.
- [ ] Run `npm run lint` (`tsc --noEmit`).
- [ ] Run `npm run build`.
- [ ] Resolve all TypeScript errors and unused/broken imports introduced during prototype iteration.
- [ ] Test the Plan Builder and AI review flow after the scoring-to-matrix migration.
- [ ] Test core navigation on desktop and mobile.

## 5. Public deployment safety

Making the source repository public does not itself expose the Gemini key. A deployed public API, however, can create usage/cost and abuse risk.

Before deploying AI endpoints publicly:

- [ ] Add rate limiting.
- [ ] Add abuse/request-size controls appropriate to production.
- [ ] Decide whether authentication or quotas are needed for AI endpoints.
- [ ] Avoid returning internal stack traces or sensitive configuration.
- [ ] Configure production logging and monitoring.
- [ ] Establish a process for dependency/security updates.

## 6. Open-source contributor readiness

- [x] README added.
- [x] CONTRIBUTING guide added.
- [x] ROADMAP added.
- [x] CODE_OF_CONDUCT added.
- [x] MIT LICENSE added.
- [x] Issue templates added.
- [x] Initial contributor backlog added.
- [ ] Create repository labels such as `good first issue`, `help wanted`, `research`, `data`, `ux`, `frontend`, `accessibility`, and `methodology`.
- [ ] Verify that all contributor-facing links work after the repository becomes public.

## 7. Final publication gate

Do **not** switch the repository to public until the unresolved civic-data integrity items and build checks above are complete.

When those checks pass:

1. Change repository visibility to **Public** in GitHub Settings.
2. Open the repository in a logged-out/incognito browser and verify that README, license, issues, contributor docs, and source files render correctly.
3. Update the DemocracyLab listing with the public repository URL.
4. Invite outside contributors only after the public view has been checked.

---

The governing principle for release is the same as the product itself: **evidence before judgment, and verification before public claims.**
