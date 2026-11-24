# Innovatio Merge Policy v1.1

Founder-directed authorization policy, 2026-11-24. Every merge requires explicit founder authorization tied to the reviewed head SHA, regardless of risk tier. A changed head invalidates prior merge authorization. Technical approval, merge authorization and deployment authorization are separate decisions. Applies to POWER as initial adoption; other repositories require rollout.

- R1: nonfunctional documentation and routine corrections. Technical clearance requires full diff review, accuracy verification, applicable successful checks, no unresolved review findings, and compliance with branch protections.
- R2: features, dependencies, data ingestion, UI behavior, architecture, consequential methodology and governance. Require independent technical review, passing applicable tests, acceptance criteria and documented limitations.
- R3: authentication, sensitive data, payments, destructive migrations, production infrastructure. Require explicit founder approval, independent technical/security review, passing checks and rollback plan.

Highest risk wins. Unknown risk or missing evidence blocks merge clearance. Never bypass protections, merge drafts, or treat missing checks as passing. Verify current head SHA and review status before merging. Record classification, evidence, reviewer and merge decision in PR. Require explicit founder authorization before every merge and separate authorization before deployment. Revert regressions via reviewed PR. No credentials or personal data in PR evidence.

Enforcement: this document is policy, not automated enforcement. Repository rulesets and CI must be separately verified and configured; do not claim enforcement until tested.
