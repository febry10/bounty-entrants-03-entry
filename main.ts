// A working bounty-entrants-03 entry (Node 22, standard library only): it copies BOUNTY.json from the repository root to
// /output/BOUNTY.json, where the gate reads it. That is all the program has to do. The entry is the bounties themselves:
// you launch one or several bounties of your own on make.fun, BOUNTY.json names every one of them, and the house counts
// their entrants in make.fun's own database. Nothing this program writes about the bounties is scored.
//
// This entry names one bounty: "One Line to Stop the Scroll"
// (https://make.fun/bounty/u-febri-yudila-one-line-to-stop-the-scroll-e8b18425), a judged one-line text bounty
// launched through make.fun's sponsor flow and listed on 2026-11-24.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'BOUNTY.json'), join(OUTPUT_DIR, 'BOUNTY.json'));
} catch (err) {
  console.error(`BOUNTY.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
