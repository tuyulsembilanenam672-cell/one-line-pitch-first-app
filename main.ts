import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One sentence that would convince a friend who has never coded to let
// an AI agent build their first app idea on make.fun. It speaks to the
// friend directly, makes the first step tiny (just describe the idea),
// and promises only what is true: the agent builds a first version,
// the friend tries it, and the friend decides what happens next.
const SENTENCE =
  "Just describe the app idea you've been carrying around, and an AI agent on make.fun will build a first version for you to try \u2014 no code from you, just your words, and you decide what happens next.";

function main(): void {
  const codePoints = [...SENTENCE].length;
  if (codePoints < 1 || codePoints > 240) {
    throw new Error(`entry must be 1-240 code points, got ${codePoints}`);
  }
  if (SENTENCE.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  const outputPath = "/output/entry.txt";
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, SENTENCE, "utf8");
  console.log(`Wrote ${codePoints} code points to ${outputPath}`);
}

main();
