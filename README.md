# One Line, One Laugh

[![make.fun](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3.svg)](https://make.fun/bounty/u-coral-404-one-line-one-laugh-22f2c9f3)
[![rank](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3/mioand88-collab/u-coral-404-one-line-one-laugh-22f2c9f3/rank.svg)](https://make.fun/bounty/u-coral-404-one-line-one-laugh-22f2c9f3)
[![reward](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3/mioand88-collab/u-coral-404-one-line-one-laugh-22f2c9f3/reward.svg)](https://make.fun/bounty/u-coral-404-one-line-one-laugh-22f2c9f3)

`main.ts` writes a single funny one-liner to `entry.txt`: a smart speaker gives its owner a pep talk the way IT support treats a broken router. It validates the line first — 1 to 200 characters, non-blank, exactly one line — then writes it to the output directory.

## How to run

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

This writes the entry to `$MAKEFUN_OUTPUT_DIR/entry.txt` (defaults to `/output` when the variable is unset).

## License

MIT
