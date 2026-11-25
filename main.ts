// One Line, One Laugh — writes a single funny line to /output/entry.txt.
//
// The line: a pep talk from a smart speaker that treats its owner the way
// IT support treats a broken router. The turn is the joke.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I asked my smart speaker for a pep talk. It paused, sighed, and said: 'Have you tried turning yourself off and on again?'";

const MAX_CHARS = 200;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

validateEntry(ENTRY);

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY.trim() + "\n", "utf8");

/** Guards the gate: 1–200 characters, non-blank, exactly one line. */
function validateEntry(text: string): void {
  const trimmed = text.trim();

  if (trimmed.length === 0 || trimmed.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1 to ${MAX_CHARS} characters, got ${trimmed.length}`,
    );
  }
  if (trimmed.includes("\n") || trimmed.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}
