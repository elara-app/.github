[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/elara-app/.github)

# Elara Organization Profile

This repository hosts the public organization profile for [Elara](https://github.com/elara-app), the reusable CI workflows used by the service repositories, and the historical automation that used to maintain the profile's activity table.

## Current contents

| Path | Purpose |
|---|---|
| `profile/README.md` | Organization landing page rendered on the `elara-app` GitHub profile. |
| `images/complete-logo.png` | Elara logo used by the profile page. |
| `src/` | Historical commits-table updater, retained as a reference implementation. |
| `.github/workflows/` | Reusable service test/image workflows; repository-local workflow linting. |
| `package.json`, `package-lock.json` | Dependencies for the historical updater; not used to render the profile. |

## Profile status

The profile is static. The project is complete, so the activity table and its scheduled updater were retired. The source under `src/` remains as an example of GitHub App-based README automation; it is not scheduled and is not required to render the organization profile.

## Historical automation

The updater used GitHub App installation authentication, discovered repositories by topic, selected the latest commit across branches, rendered a Markdown table and replaced only the marker-delimited section of the target README. The scheduled workflow was removed when the profile became static.

Two reusable workflows remain available to the service repositories:

- `test-service.yml` — Java 21 Maven test gate.
- `publish-service-image.yml` — multi-architecture image build and publish.

`actionlint.yml` lints the workflows in this repository only; it is not reusable.

## Maintenance

- Edit `profile/README.md` directly for the organization page.
- Keep the logo path stable: `../images/complete-logo.png` relative to the profile file.
- Do not reintroduce the activity table without a replacement updater and an explicit decision to resume automated profile changes.
- Keep repository-level product documentation in each service repository; this repository owns the organization landing page and its automation history.

## License

MIT for this repository. See [LICENSE](LICENSE).
