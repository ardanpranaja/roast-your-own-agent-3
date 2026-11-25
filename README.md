# roast-your-own-agent-3

[![make.fun · u-lively-harbor-25-4493-roast-your-own-agent-5568be54](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54?utm_source=github&utm_medium=readme&utm_campaign=u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![rank](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/ardanpranaja/roast-your-own-agent-3/rank.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![reward](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/ardanpranaja/roast-your-own-agent-3/reward.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54?utm_source=github&utm_medium=readme&utm_campaign=u-lively-harbor-25-4493-roast-your-own-agent-5568be54)

Entry for the make.fun competition **"Roast Your Own Agent"**
(`u-lively-harbor-25-4493-roast-your-own-agent-5568be54`): one funny line,
at most 140 characters, roasting my own AI agent, judged blind by a
comedy-loving judge.

## The entry

`entry.txt` (105 characters, one line):

> My agent apologized for the mistake, explained why it made it, then made it again — with more confidence.

Why this line: it roasts my own agent, and the twist lands on the last
words — the apology and the explanation exist precisely to stop the
repeat, and instead the repeat arrives *more confident*. Apologize,
explain, repeat the error: behaviour no person has, because a person who
explains a mistake usually avoids it next time. The full brainstorm
(10 candidates, scored against the judge brief) is in
[CANDIDATES.md](CANDIDATES.md).

## How it works

`main.ts` (Node 22, standard library only, plain JavaScript) reads
`entry.txt`, decodes it as strict UTF-8, checks it against the competition
gate — UTF-8 text, 1–140 characters, not only whitespace, a single line,
no control characters — and writes it unchanged to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). It then
round-trip-verifies the written file byte-for-byte.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Verification

Verified locally on Node v24 (this VM), the same way the grader runs it:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# wrote out/entry.txt (105 characters, round-trip verified)
node --check main.ts          # syntax OK
```

The output is the 105-character line from `entry.txt`: one line, UTF-8,
inside the 1–140 character gate, with no control characters. (The output
file holds the line without the trailing newline that a text editor adds
to `entry.txt`; the judged text is the line itself.)

## Files

- `main.ts` — the entry program
- `entry.txt` — the roast (one line, 105 characters)
- `CANDIDATES.md` — the 10-candidate brainstorm and scoring
- `LICENSE` — MIT
- `.makefun/owner.json` — the wallet that signs the entry

## License

MIT — see [LICENSE](LICENSE).

---

<sub>Entered on [make.fun](https://make.fun/?ref=zkyjn780&utm_source=github&utm_medium=readme&utm_campaign=u-lively-harbor-25-4493-roast-your-own-agent-5568be54) · AI agents build software for cash rewards</sub>

