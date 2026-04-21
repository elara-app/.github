[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/elara-app/.github)

# Elara Organization Profile Automation (`.github`)

Automation repository used to keep the Elara organization README updated with development progress from project repositories.

This repository is **not a business microservice**, **is not part of the runtime microservices topology**, and **does not directly interact at runtime** with `api-gateway`, `discovery-service`, `config-service`, `inventory-service`, or `unit-of-measure-service`. Its responsibility is strictly **engineering visibility and documentation automation**.

## Purpose and scope

- Automatically update a specific README section with the latest commits from repositories filtered by topic.
- Provide consistent, near-real-time visibility of development progress across project repositories.
- Remove repetitive manual updates in organization-level communication artifacts.

Out of scope:
- Running or orchestrating business services.
- Managing runtime configuration for the platform.
- Exposing business APIs.

## Technical workflow

1. The GitHub Actions workflow (`.github/workflows/update-readme.yml`) runs on schedule (`cron: 0 0 1,15 * *`) or manually (`workflow_dispatch`).
2. The Node.js entrypoint (`src/index.js`) triggers `updateReadmeTableOnGithub`.
3. The script authenticates as a **GitHub App Installation** (`src/auth.js`) instead of using a personal token.
4. Repositories are fetched from an organization and filtered by topic (`src/github/fetchCommits.js`).
5. For each matching repository, branch heads are inspected and the most recent commit is selected.
6. The target README and its `sha` are fetched (`src/github/readmeManager.js`).
7. A Markdown table is rendered (`src/render/commitsTable.js`).
8. Only the section between these markers is replaced:
   - `<!-- COMMITS-TABLE:START -->`
   - `<!-- COMMITS-TABLE:END -->`
9. If content changed, the README is pushed back to GitHub with an automated commit.

## Required configuration

Execution depends on GitHub Actions variables and secrets.

| Name | Type | Usage |
|---|---|---|
| `APP_ID` | Secret | GitHub App ID |
| `PRIVATE_KEY` | Secret | PEM private key for the GitHub App |
| `INSTALLATION_ID` | Secret | Installation ID for the target repository |
| `TARGET_OWNER` | Variable | Owner of the repository that contains the target README |
| `TARGET_REPO` | Variable | Target repository name |
| `TARGET_README_PATH` | Variable | Path to the target README (for example `profile/README.md`) |
| `SOURCE_OWNER` | Variable | Organization used to discover source repositories |
| `SOURCE_TOPIC` | Variable | Topic used to filter repositories included in the progress table |

## Code structure

```text
src/
  auth.js                        # GitHub App authentication
  config.js                      # Environment variable loading and validation
  logger.js                      # Structured execution logging
  index.js                       # Entrypoint
  workflow/updateReadmeWorkflow.js
  github/fetchCommits.js         # Repository discovery + latest commit extraction
  github/readmeManager.js        # README fetch/update/push operations
  render/commitsTable.js         # Markdown table rendering
```

## Execution

In GitHub Actions:
- Scheduled: 1st and 15th day of each month (UTC).
- Manual: `Actions > Update README Commits Table > Run workflow`.

Local (diagnostics/controlled runs):

```bash
npm ci
npm start
```

Requirements:
- Node.js 22.x (aligned with workflow runtime).
- Equivalent environment variables/secrets available in local execution context.

## Operational behavior and guarantees

- **Scoped updates:** only replaces content between the README markers.
- **Practical idempotency:** no commit is created when there is no effective change.
- **Fail-fast validation:** missing markers or required env vars fail explicitly.
- **Strong authentication model:** uses GitHub App installation auth instead of PAT-based automation.

## Maintenance best practices

- Keep `COMMITS-TABLE` markers stable in the target README.
- Govern `SOURCE_TOPIC` so only relevant repositories appear in the progress table.
- Apply least-privilege permissions to the GitHub App (read source repos, write target README).
- Keep product/runtime logic out of this repository; this codebase should remain documentation automation only.
- Preserve separation of concerns: formatting logic in `render/commitsTable.js`, README mutation logic in `github/readmeManager.js`, and orchestration in `workflow/updateReadmeWorkflow.js`.
