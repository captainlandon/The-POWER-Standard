# Public Release Readiness Checklist

This repository has moved from private prototype work to a **public open-source civic-tech project**. This checklist distinguishes between **repository-publication readiness** and **production-deployment readiness** so that an open-source release is not held to the same standard as a production civic-data service.

## 1. Secrets and environment safety

- [x] `.env*` files are ignored by Git.
- [x] `.env.example` contains placeholders only.
- [x] Gemini credentials are read server-side from `process.env.GEMINI_API_KEY`.
- [x] Automated release audit scans tracked source files for common AWS, Google, GitHub-token, and private-key patterns.
- [ ] Re-scan full Git history for secrets if a local clone is available.
- [ ] Rotate any credential if there is uncertainty about whether it was ever exposed outside GitHub.

**Publication assessment:** No tracked secret was identified by the current source-tree audit. Full historical secret scanning remains prudent security hygiene because the GitHub connector does not substitute for a complete local history scan.

## 2. Civic-data integrity

- [x] API demonstration endpoints identify prototype/demo status explicitly.
- [x] The AI plan reviewer no longer produces a composite political score or letter grade.
- [x] Fallback AI/rules-engine responses preserve uncertainty instead of fabricating jurisdiction-specific facts.
- [x] A public-release runtime policy downgrades unresolved civic records to `Simulated Demonstration Record` and prevents unsupported `Verified` presentation.
- [x] Exact reviewed primary sources are allowlisted only for bounded claims that completed the current verification pass.
- [x] The verification log documents known citation, metric, and source-reproduction problems.
- [x] Demonstration records are conservatively marked at runtime before the application renders.
- [ ] Migrate all runtime-guard decisions into `src/data/mockData.ts` at source level (tracked in Issue #9).
- [ ] Complete record-by-record verification for every civic record intended to become a production real-world record.

**Publication assessment:** Safe for an explicitly labeled prototype/open-source repository. Not yet a production civic-data authority.

## 3. Methodology and public claims

- [x] POWER uses multidimensional review instead of a single score.
- [x] Unknown is treated as a valid epistemic state.
- [x] Official sources are treated as evidence for bounded claims, not as universal truth.
- [x] Ethics/influence analysis prohibits unsupported allegations of wrongdoing or corrupt intent.
- [x] README and prototype-data documentation explicitly describe development status, verification limits, and demonstration-data policy.
- [x] `DATA_VERIFICATION_LOG.md` records claim-level limitations for reviewed sources.
- [ ] Continue review of jurisdiction-specific legal guidance as records move from demo to verified status.
- [ ] Expand methodology documentation for evidence classification, correction procedures, and governance before production use.

## 4. Build and code quality

- [x] Dependencies install successfully in CI.
- [x] `npm run lint` (`tsc --noEmit`) passes.
- [x] `npm run audit:public-release` passes.
- [x] `npm run build` passes.
- [x] Vite/esbuild dependency compatibility corrected.
- [x] GitHub Actions `Release Readiness` workflow is active on pushes and pull requests to `main`.
- [x] A post-release CI run again passed dependency installation, TypeScript checking, release audit, and production build.
- [ ] Conduct broader manual browser testing of all interactive flows before declaring the application production-ready.
- [ ] Conduct dedicated mobile/device and accessibility testing before production deployment.

## 5. Public deployment safety

Making the **source repository public** does not itself expose the Gemini key. Deploying AI endpoints publicly creates a different risk profile involving usage, cost, abuse, and operational security.

Before deploying AI endpoints as a production public service:

- [ ] Add rate limiting.
- [ ] Add abuse/request-size controls appropriate to production.
- [ ] Decide whether authentication or quotas are needed for AI endpoints.
- [ ] Avoid returning internal stack traces or sensitive configuration.
- [ ] Configure production logging and monitoring.
- [ ] Establish a process for dependency/security updates.

These are **production-deployment requirements**, not blockers to publishing the source repository as an explicitly non-production prototype.

## 6. Open-source contributor readiness

- [x] README added and expanded with data-verification/security/license guidance.
- [x] CONTRIBUTING guide added.
- [x] ROADMAP added.
- [x] CODE_OF_CONDUCT added.
- [x] MIT LICENSE added.
- [x] SECURITY policy added.
- [x] Issue templates added.
- [x] Pull-request template added.
- [x] Initial contributor backlog added.
- [x] Source-data cleanup is tracked as Issue #9.
- [x] `good first issue`, `help wanted`, and `documentation` labels are now in active use on contributor-facing issues.
- [x] Public repository visibility confirmed through GitHub's public repository endpoint.
- [x] README, issues, license, contributor documentation, and source repository are publicly reachable.
- [ ] Add more specialized labels such as `research`, `data`, `ux`, `frontend`, `accessibility`, and `methodology` if/when repository label creation is available.
- [ ] Perform a human incognito-browser visual check of the public GitHub page when convenient.

## 7. Publication status

### Repository-publication gate

The repository-publication gate has passed:

- [x] tracked-source secret scan reports no configured blocker;
- [x] TypeScript check passes;
- [x] public-release audit passes;
- [x] production bundle builds;
- [x] unresolved civic records are prevented from being represented as verified real-world records at runtime;
- [x] README and project documentation clearly state that the repository is an active prototype rather than a production public authority;
- [x] license, contribution guidance, code of conduct, security guidance, roadmap, and issue workflow are present;
- [x] repository visibility is **Public**.

### Post-publication actions completed

- [x] Public visibility independently confirmed.
- [x] Release Readiness CI confirmed green after release-preparation changes.
- [x] Obsolete pre-publication blocker Issue #8 closed and redirected to ongoing source-level cleanup Issue #9.
- [x] Newcomer-oriented issues labeled `good first issue` and `help wanted`.
- [x] Research/data cleanup work labeled `help wanted` where appropriate.

### Next external step

Update the DemocracyLab project listing with the public repository URL:

`https://github.com/captainlandon/The-POWER-Standard`

Keep production deployment separate from source publication until the production-safety requirements above are satisfied.

---

The governing principle for release remains the same as the product itself: **evidence before judgment, and verification before public claims.**
