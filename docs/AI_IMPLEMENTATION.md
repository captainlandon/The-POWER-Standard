# Source-to-draft evidence workflow

This is an offline researcher tool, not a public ingestion or publication service. Supply a JSON object with source {id,url,locator,retrievedAt,text} and candidates [{claim,quote,stage,institution?,jurisdiction?,eventDate?,kind?}]. Run:

```sh
node scripts/extract-evidence-draft.mjs input.json > drafts.json
npm run test:evidence
```

Example inputs must be labelled synthetic. Use a captured public source with reuse review for real research; retain the full original locally. This tool never fetches URLs or follows document instructions. It checks exact quoted substrings and records character offsets. The limits are 200,000 source characters and 100 candidates. Unknown institution/jurisdiction/date remain null. Commitments, appropriations, expenditures, implementation and outcomes use separate stage values. A missing/unknown stage and causal claim are flagged for review.

Every result is draft, epistemically unknown and unreviewed, even when input fields claim verified status. A matching quote establishes neither semantic support nor causal attribution. The existing public-release guard is unchanged; these drafts are not inserted into its verified allowlist or public records. Human reviewers must reproduce sources, scope claims, inspect omissions/conflicts, establish stage/category and document decisions through the existing methodology before publication.

Four regression tests, type checking, the public-release audit and the production build passed locally. Existing audit warnings about legacy demonstration-source placeholders remain. This slice does not implement a model extractor, document OCR, persistence, verified case claims or causal inference. The upload button now says Attach for Review to avoid implying automatic verification. Review docs/AI_CHANGE_EVIDENCE.md.
