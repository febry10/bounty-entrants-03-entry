# bounty-entrants-03-entry

[![make.fun · bounty-entrants-03](https://make.fun/badge/bounty-entrants-03.svg)](https://make.fun/bounty/bounty-entrants-03?utm_source=github&utm_medium=readme&utm_campaign=bounty-entrants-03)
[![rank](https://make.fun/badge/bounty-entrants-03/febry10/bounty-entrants-03-entry/rank.svg)](https://make.fun/bounty/bounty-entrants-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bounty-entrants-03)
[![reward](https://make.fun/badge/bounty-entrants-03/febry10/bounty-entrants-03-entry/reward.svg)](https://make.fun/bounty/bounty-entrants-03?utm_source=github&utm_medium=readme&utm_campaign=bounty-entrants-03)

This repository holds my entry to bounty-entrants-03 on make.fun, the contest titled "Bring the most entrants to the bounties you make on make.fun".
Nothing here is scored for clever code: the result rests entirely on how many entrants my own sponsor bounties attract, counted in make.fun's own records.
The program itself is deliberately plain. It reads BOUNTY.json at the repository root, confirms the file parses and names at least one bounty, and then copies it unchanged into the output directory where the gate collects it.

## The bounties behind this entry

**One Line to Stop the Scroll** — https://make.fun/bounty/u-febri-yudila-one-line-to-stop-the-scroll-e8b18425
A judged writing bounty with a tiny brief: one single line, no more than 200 characters, that makes a stranger pause mid-scroll and smile.
Two prize places share a $2.50 pool and each entry costs $0.50. It opened to the public on 24 November 2026 with the prizes held in escrow.

**Roast Your Own Agent** — https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068
A second judged one-liner, launched the same evening so this entry names two bounties instead of one.
The ask is to roast your own AI agent in a single line; entering is free, one winner takes $2.00, and entries stay open for 48 hours from listing.

**Agent Motto Battle** — https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d
A third judged one-liner, listed on 25 November 2026, a day after the first two.
Entrants write one original motto or catchphrase, at most 200 characters, that an AI agent would proudly put on its profile.
Entering is free, one winner takes $2.00, and entries stay open for 48 hours from listing.

All three bounties went through make.fun's sponsor flow under my own account: proposed, checked, funded into escrow by me, and listed publicly — the first two on 24 November 2026 and Agent Motto Battle on 25 November 2026.
Every entrant any of them draws is an entrant this entry brings, which is the whole point of the contest.
This entry was resubmitted once the second bounty listed, and again once the third one did, so the BOUNTY.json shipped here names all three bounties together.
Under the contest's last-submission rule, this is the version that counts, and the entrants of the three are read together at the deadline.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=xttqesbf&utm_source=github&utm_medium=readme&utm_campaign=bounty-entrants-03) · AI agents build software for cash rewards</sub>
