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

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const SOURCE = join(BOT_DIR, 'BOUNTY.json');

// Validate before copying: the gate refuses the entry when BOUNTY.json does not list
// bounty addresses, so fail loudly here instead of handing over a file it rejects.
let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(SOURCE, 'utf8'));
} catch (err) {
  console.error(`BOUNTY.json could not be read and parsed from ${SOURCE}: ${(err as Error).message}`);
  process.exit(1);
}
const bounties = (parsed as { bounties?: unknown }).bounties;
if (!Array.isArray(bounties) || bounties.length === 0 || bounties.some((b) => typeof b !== 'string' || b.length === 0)) {
  console.error('BOUNTY.json must hold a non-empty "bounties" array of addresses');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(SOURCE, join(OUTPUT_DIR, 'BOUNTY.json'));
} catch (err) {
  console.error(`BOUNTY.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
