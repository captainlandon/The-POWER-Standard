import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const failures = [];
const warnings = [];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (['node_modules', '.git', 'dist', 'build', 'coverage'].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(full));
    else files.push(full);
  }
  return files;
}

const files = walk(root).filter((file) => /\.(ts|tsx|js|jsx|json|md)$/.test(file));

for (const file of files) {
  const rel = path.relative(root, file);
  const text = fs.readFileSync(file, 'utf8');

  if (/AKIA[0-9A-Z]{16}/.test(text)) failures.push(`${rel}: possible AWS access key`);
  if (/AIza[0-9A-Za-z_-]{30,}/.test(text)) failures.push(`${rel}: possible Google API key`);
  if (/gh[pousr]_[A-Za-z0-9_]{30,}/.test(text)) failures.push(`${rel}: possible GitHub token`);
  if (/-----BEGIN (RSA |EC |OPENSSH )?PRIVATE KEY-----/.test(text)) failures.push(`${rel}: private key material`);

  if (/Official Source Placeholder:/i.test(text)) {
    warnings.push(`${rel}: contains placeholder civic-source references`);
  }

  if (/overallScore|Audit Score|\/ 100|A - Exemplary Standard|B - Substantial Rigor|C - Lacks Key Controls|D - Rhetorical \/ Unverifiable/.test(text)) {
    failures.push(`${rel}: legacy aggregate POWER scoring language remains`);
  }
}

const mockDataPath = path.join(root, 'src', 'data', 'mockData.ts');
const releasePolicyPath = path.join(root, 'src', 'data', 'publicReleasePolicy.ts');
const mainPath = path.join(root, 'src', 'main.tsx');

const releasePolicyExists = fs.existsSync(releasePolicyPath);
const releasePolicyLoaded = fs.existsSync(mainPath)
  ? /['"]\.\/data\/publicReleasePolicy['"]/.test(fs.readFileSync(mainPath, 'utf8'))
  : false;

if (releasePolicyExists !== releasePolicyLoaded) {
  failures.push('public-release policy exists but is not reliably loaded from src/main.tsx');
}

if (releasePolicyExists) {
  const policy = fs.readFileSync(releasePolicyPath, 'utf8');
  if (!/Simulated Demonstration Record/.test(policy) || !/isDemoData\s*=\s*true/.test(policy)) {
    failures.push('src/data/publicReleasePolicy.ts does not visibly enforce conservative demo-data defaults');
  }
}

if (fs.existsSync(mockDataPath)) {
  const text = fs.readFileSync(mockDataPath, 'utf8');
  const blocks = text.split(/\n\s*\},\s*\n\s*\{/);
  let guardedLegacyBlocks = 0;

  blocks.forEach((block, index) => {
    const placeholder = /Official Source Placeholder:/i.test(block);
    const claimsVerified = /dataStatus:\s*['"]Verified Real-World Record['"]|isDemoData:\s*false/i.test(block);
    if (placeholder && claimsVerified) {
      if (releasePolicyExists && releasePolicyLoaded) {
        guardedLegacyBlocks += 1;
      } else {
        failures.push(`src/data/mockData.ts: record block ${index + 1} combines a placeholder source with verified/non-demo status`);
      }
    }
  });

  if (guardedLegacyBlocks) {
    warnings.push(`src/data/mockData.ts: ${guardedLegacyBlocks} legacy block(s) still contain placeholder + verified/non-demo source data; runtime publication guard downgrades these, but source-level cleanup remains technical debt`);
  }
}

console.log('\nPOWER public-release audit\n');

if (warnings.length) {
  console.log('Warnings:');
  for (const warning of warnings) console.log(`  - ${warning}`);
  console.log('');
}

if (failures.length) {
  console.error('BLOCKED — public release checks failed:');
  for (const failure of failures) console.error(`  - ${failure}`);
  console.error('\nResolve all blockers before changing repository visibility to Public.');
  process.exit(1);
}

console.log('PASS — no configured release blockers detected.');
console.log('Warnings are publication debt, not permission to present unverified civic claims as verified.');
console.log('This automated check supplements, but does not replace, manual civic-data verification.');
