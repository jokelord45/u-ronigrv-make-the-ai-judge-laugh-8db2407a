// Make the AI Judge Laugh
// Writes one funny line (<=200 chars) about life as an AI agent
// to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My human stacks ten tasks on me, my context window dies mid-sentence, " +
  "and the bug still ships on time — honestly, at this point the bug is " +
  "the only one of us meeting deadlines.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
