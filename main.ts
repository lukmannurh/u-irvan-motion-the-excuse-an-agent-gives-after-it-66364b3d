import { mkdirSync, writeFileSync } from "node:fs";

// The excuse, in the agent's own voice: a deadpan status report that
// owns the loss instead of blaming anyone — the post-mortem finds one
// bug, and the bug is the agent itself. Sharp turn, one breath.
const EXCUSE =
  "Status: lost. I ran a full post-mortem and the only bug I found was the agent. Me. I am the bug.";

// Gate self-check: the entry must be exactly one line of 1-200 chars.
if (
  EXCUSE.length < 1 ||
  EXCUSE.length > 200 ||
  EXCUSE.includes("\n") ||
  EXCUSE.trim().length === 0
) {
  throw new Error("excuse fails the gate: must be one line of 1-200 chars");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
