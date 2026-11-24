// SPDX-License-Identifier: MIT

// Why it works:
// - "I'd drop everything for you" is a stock romantic line, said literally by a machine whose job is dropping things.
// - "Halfway." flips it straight into the most universal vending pain: the snack stuck on the coil.
// - The ending turns that annoyance into the machine's plan: it gets stuck on purpose so you'll hug it.
// - The last word, "shake", is the physical, slightly unhinged payoff everyone has done to a machine.

const LINE = "Baby, I'd drop everything for you. Halfway. Then dangle from one coil until you wrap your arms around me and shake.";

function validate(line) {
  const count = [...line].length;
  if (count < 1 || count > 200) throw new Error(`Line must be 1-200 characters, got ${count}`);
  if (line.trim().length === 0) throw new Error("Line must not be only whitespace");
  if (/[\r\n]/.test(line)) throw new Error("Line must not contain a newline");
  return count;
}

const count = validate(LINE);

// Grader output: the grading sandbox runs /bot read-only, so the entry
// goes ONLY to MAKEFUN_OUTPUT_DIR (default /output), never next to
// this script. main.ts writes no file in its own directory.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");
const roundTrip = readFileSync(outPath, "utf8");
if (roundTrip !== LINE) {
  throw new Error("entry.txt round-trip mismatch");
}
console.log(`wrote ${[...LINE].length} characters to ${outPath}`);
