import { readFile } from 'node:fs/promises';
import { createEvidenceDrafts } from '../src/lib/evidenceDraft.mjs';
if (process.argv.length !== 3) { console.error('Usage: node scripts/extract-evidence-draft.mjs input.json'); process.exitCode = 1; }
else {
  try { console.log(JSON.stringify(createEvidenceDrafts(JSON.parse(await readFile(process.argv[2], 'utf8'))), null, 2)); }
  catch { console.error('Invalid source or candidate input. No draft records were produced.'); process.exitCode = 1; }
}
