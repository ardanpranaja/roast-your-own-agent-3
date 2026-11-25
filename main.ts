// Entry for make.fun "Roast Your Own Agent"
// (u-lively-harbor-25-4493-roast-your-own-agent-5568be54).
// Node 22, standard library only, plain JavaScript (no TypeScript
// annotations) so the grader can run it directly with node.
//
// The roast lives in entry.txt next to this file. This program reads it,
// checks it against the competition gate (UTF-8 text, 1-140 characters,
// one line, not only whitespace, no control characters), and writes it
// unchanged to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
//
// Run it locally the way the grader does, with a stand-in output dir:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const entryPath = join(scriptDir, 'entry.txt');

const configuredDir = process.env.MAKEFUN_OUTPUT_DIR;
const outputDir =
  configuredDir && configuredDir.trim().length > 0 ? configuredDir : '/output';
const outputPath = join(outputDir, 'entry.txt');

const rawBytes = readFileSync(entryPath);

let text;
try {
  text = new TextDecoder('utf-8', { fatal: true }).decode(rawBytes);
} catch (error) {
  throw new Error('entry.txt is not valid UTF-8 text: ' + error.message);
}

// A text editor usually leaves one trailing newline; drop exactly one.
const line = text.endsWith('\n') ? text.slice(0, -1) : text;
const length = [...line].length;

if (length < 1 || length > 140) {
  throw new Error(
    'entry.txt is ' + length + ' characters; the gate needs 1-140.'
  );
}
if (line.trim().length === 0) {
  throw new Error('entry.txt is only whitespace; the gate needs real text.');
}
if (line.includes('\n') || line.includes('\r')) {
  throw new Error('entry.txt must be a single line; the brief asks for one.');
}
// The em-dash in the roast is an ordinary printable character (U+2014),
// well above the control range, so the loop above lets it through.
for (const character of line) {
  const code = character.charCodeAt(0);
  if ((code < 0x20 && character !== '\t') || code === 0x7f) {
    throw new Error(
      'entry.txt contains a control character (U+' +
        code.toString(16).padStart(4, '0') +
        '); the gate needs plain text.'
    );
  }
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, line, 'utf8');

// Round-trip check: what the grader reads must be byte-for-byte the line
// we wrote, so a silent partial write can never slip through.
if (readFileSync(outputPath, 'utf8') !== line) {
  throw new Error(
    'round-trip check failed: ' + outputPath + ' differs from entry.txt.'
  );
}
console.log(
  'wrote ' + outputPath + ' (' + length + ' characters, round-trip verified)'
);
