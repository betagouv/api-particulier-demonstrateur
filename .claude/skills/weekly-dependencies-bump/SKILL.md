---
name: weekly-dependencies-bump
description: Triage and merge the open Dependabot pull requests on betagouv/api-particulier-demonstrateur. A PR whose CI is green is merged straight away; a red one is investigated and reported. Triggers — "check les PRs dependabot", "merge les dependabot", "bump hebdo des dépendances", "weekly dependencies", "les PRs de mise à jour npm".
---

# Weekly Dependencies Bump

Routine pass over the open Dependabot PRs. The goal is zero open Dependabot PR
at the end, or a report on the red ones.

## Decision rule

- **CI green** → approve and merge, no questions asked, whatever the bump.
- **CI red or pending forever** → read the failure, report it to the user with
  the cause. Do not merge.

Major bumps are already filtered out by `.github/dependabot.yml`
(`ignore: version-update:semver-major`), so no changelog reading is needed.
Security updates bypass that filter but follow the same rule: green means
merge.

## Triage

```bash
gh pr list --author "app/dependabot" --limit 50 \
  --json number,title --jq '.[] | "\(.number)\t\(.title)"'

for pr in <numbers>; do
  echo "=== $pr ==="
  gh pr view $pr --json title,mergeable,mergeStateStatus,statusCheckRollup \
    --jq '"\(.title)\n\(.mergeable) \(.mergeStateStatus)\n" +
          ([.statusCheckRollup[] | "\(.name // .context): \(.conclusion // .state)"] | join("\n"))'
done
```

The single CI job is `Lint, build and Test` (prettier, eslint, next build,
jest). `mergeStateStatus: BLOCKED` on a green PR just means the review is
missing — approving unblocks it.

## Merging

```bash
gh pr review <pr> --approve && gh pr merge <pr> --merge
```

Merge commits, not squash — that is the repo's history style. Verify
afterwards, `gh pr merge` stays silent on success:

```bash
gh pr view <pr> --json number,state,mergedAt
```

Each merge moves `main`, so the next PRs may turn `BEHIND` or `CONFLICTING`
on `package-lock.json`. Ask Dependabot to rebase, wait for the new CI, then
apply the rule again:

```bash
gh pr comment <pr> --body "@dependabot rebase"
until [ "$(gh pr checks <pr> --json bucket --jq '[.[] | select(.bucket=="pending")] | length')" = "0" ]; do
  sleep 20
done
gh pr checks <pr> --json name,bucket --jq '.[] | "\(.name): \(.bucket)"'
```

## Reading a red CI

```bash
branch=$(gh pr view <pr> --json headRefName --jq .headRefName)
run=$(gh run list --branch "$branch" --limit 1 --json databaseId --jq '.[0].databaseId')
gh run view "$run" --log-failed | tail -60
```

A prettier bump that reformats files fails the `Prettier` step: say so, the
fix is a separate `style:` commit running `npm run format`.

## Key facts (do not relearn)

- The Dependabot author filter is `app/dependabot`, not `dependabot[bot]`.
- Groups: `production-dependencies`, `development-dependencies`,
  `security-updates` for npm, plus ungrouped `github-actions` bumps.
