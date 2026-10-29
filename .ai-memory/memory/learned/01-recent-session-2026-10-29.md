# Recent session — 2026-10-29

This note records what was created and shipped on 2026-10-29. Paths below are relative git paths.

## go-email-reader

- Specifications for warm-up sequences 08 through 13 are in `02-spec/21-app/08-ui-and-warm-up-algorithm-improvements/` through `02-spec/21-app/13-ui-and-warm-up-algorithm-improvements/`.
- Plans are in `.ai-memory/plans/pending/08-ui-and-warm-up-algorithm-improvements.md` through `.ai-memory/plans/pending/13-ui-and-warm-up-algorithm-improvements.md`.
- Sequence 08 is the connector and gate map. Sequence 09 is brakes. Sequence 10 is the send lease and cool-down. Sequence 11 is the shadow compare. Sequence 12 is the pace envelope. Sequence 13 is the shared quiet window.
- The live tick now consults `internal/warmup/gatefeed.go`. A peer can tighten the remaining-send cap and cannot raise it. An absent or stale peer does not stop local warm-up. Local quiet hours hold. A quiet skip does not send. A dry run does not spend the cap. The gate order is health, cadence, connector, theme.
- The reader UI gate map reads `GET /api/warmup/gates`.
- Commit `f3864ee` is on `main` and is pushed. The remote uses SSH.
- Sequences 08 through 13 stay pending as catalogs. Only the gate engine is implemented.
- `user.email` is `local@gitmap`. The name is `gitmap automation`.

## gitmap-v28

- Cursor-like IDE setup landed in `cli/cmdide/ide_setup.go`, `cli/cmdide/setup/`, and `cli/cmdui/ui_server_ide_setup.go`.
- The spec is `02-spec/21-app/352-cursor-like-ide-setup-from-gitmap/`.
- Pushed commits include `3229df9b4`, `864012968`, and `04690b952`.
- `cli/cov` is a coverage profile and was not committed.

## repo-cache

- Commit `f474298` stores heatmap databases, including `.heatmap/06-cursor/go-email-reader/heatmap.db`.
- SQLite `-shm` and `-wal` sidecars were not committed.

## Push denied

These local commits are still unpushed because GitHub denied `alimtvnetwork`:

- `alim.karim.profile` (19 commits)
- `kubernetes-training-v1` (19 commits)
- `common-linux-installer` (1 commit)

## Rules learned

- Do not put a personal access token in a git remote URL. Use SSH.
- Do not commit coverage profiles or SQLite sidecar files.

## Last 30 commits in this repo

```text
78c2d70a chore(version) - bump to v1.5.65
3174ec40 feat(sync) - sync canonical v6 execute suite, gitmap heatmap telemetry, skills, and prompts (29-Oct-26 06:31 pm)
122d0213 chore(version) - bump to v1.5.64
b3e13e91 feat(sync) - sync canonical v6 execute suite, gitmap heatmap telemetry, skills, and prompts (29-Oct-26 04:22 pm)
905da349 chore(version) - bump to v1.5.63
d0fa5635 feat(sync) - sync canonical v6 execute suite, gitmap heatmap telemetry, skills, and prompts (29-Oct-26 03:16 pm)
f133e6f3 chore(version) - bump to v1.5.62
b8a27c8d feat(sync) - sync canonical v6 execute suite, gitmap heatmap telemetry, skills, and prompts (29-Oct-26 02:53 pm)
7bcf460d chore(version) - bump to v1.5.61
fffaec67 feat(sync) - sync canonical v6 execute suite, gitmap heatmap telemetry, skills, and prompts (28-Oct-26 10:17 am)
b3785944 chore(version) - bump to v1.5.60
d4f598e4 feat(sync) - sync canonical v6 execute suite, gitmap heatmap telemetry, skills, and prompts
631e4836 chore(version) - bump to v1.5.59
12745a6e feat(sync) - sync canonical v6 execute suite, gitmap heatmap telemetry, skills, and prompts
d552a6fb chore(version): bump to v1.5.58
2a1cb115 feat(sync): sync canonical prompts, skills, gitmap agent standards, and purge deprecated 46 task manager
52f34a69 chore(version): bump to v1.5.57
e303b9ee feat(sync): sync canonical prompts, skills, gitmap agent standards, and purge deprecated 46 task manager
db2fae31 chore(version): bump to v1.5.56
df49b09d feat(sync): sync canonical prompts, skills, gitmap agent standards, and purge deprecated 46 task manager
4c6c49c8 chore(version): bump to v1.5.55
c86de880 feat(sync): sync canonical prompts, skills, gitmap agent standards, and purge deprecated 46 task manager
f2883779 chore(version): bump to v1.5.54
ec8e5b9c feat(sync): sync canonical prompts, skills, gitmap agent standards, and purge deprecated 46 task manager
5a5e7f04 chore(version) - bump to v1.5.53
29a21849 feat(sync) - sync canonical v6 execute suite, gitmap heatmap telemetry, skills, and prompts
3b8855b4 chore(version): bump to v1.5.52
7227bb97 feat(sync): sync canonical prompts, skills, gitmap agent standards, and purge deprecated 46 task manager
9d702b7c chore(version) - bump to v1.5.51
0122663a feat(sync) - sync canonical v6 execute suite, gitmap heatmap telemetry, skills, and prompts
```
