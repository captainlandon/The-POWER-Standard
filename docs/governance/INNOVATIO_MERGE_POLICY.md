# Innovatio Merge Policy v1.0

Founder-approved policy direction, 2026-11-24. Applies to POWER as initial adoption; other repositories require rollout.

- R1: nonfunctional documentation and routine corrections. Delegated merge permitted after full diff review, accuracy verification, applicable successful checks, no unresolved review findings, and compliance with branch protections.
- R2: features, dependencies, data ingestion, UI behavior, architecture, consequential methodology. Require independent technical review, passing applicable tests, acceptance criteria and documented limitations.
- R3: authentication, sensitive data, payments, destructive migrations, production infrastructure. Require explicit founder approval, independent technical/security review, passing checks and rollback plan.

Highest risk wins. Unknown risk or missing evidence blocks delegated merge. Never bypass protections, merge drafts, or treat missing checks as passing. Verify current head SHA and review status before merging. Record classification, evidence, reviewer and merge decision in PR. Separate merge from deployment. Revert regressions via reviewed PR. No credentials or personal data in PR evidence.

Enforcement: this document is policy, not automated enforcement. Repository rulesets and CI must be separately verified and configured; do not claim enforcement until tested.
