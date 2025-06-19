import { Octokit } from "@octokit/core";
import { debug, error, log } from "../logger.js";

/**
 * Gets the names of the unity repositories that contain a specific topic.
 * @param {Octokit} octokit - Authenticated Octokit instance.
 * @param {string} owner - Name of the organization.
 * @param {string} sourceRepoTopic - Topic to filter.
 * @returns {Promise<string[]>} - List of repository names.
 */
async function getReposByTopic(octokit, sourceOwner, sourceRepoTopic) {
    try {
        log(
            `Searching repositories in "${sourceOwner}" with topic "${sourceRepoTopic}"...`
        );
        const { data: repos } = await octokit.request("GET /orgs/{org}/repos", {
            org: sourceOwner,
        });
        const filtered = repos
            .filter(
                (repo) =>
                    Array.isArray(repo.topics) &&
                    repo.topics.includes(sourceRepoTopic)
            )
            .map((repo) => {
                return {
                    name: repo.name,
                    url: repo.html_url,
                };
            });
        log(
            `Found ${filtered.length} repositories with topic "${sourceRepoTopic}".`
        );
        return filtered;
    } catch (err) {
        error(
            `Failed to fetch repositories for topic "${sourceRepoTopic}" in organization "${sourceOwner}": ${err.message}`
        );
        throw err;
    }
}

/**
 * Gets the information about the latest commit (most recent) from any branch of a repository.
 * @param {Octokit} octokit - Authenticated Octokit instance.
 * @param {string} org - Name of the organization.
 * @param {string} repo - Name of the repository.
 * @returns {Promise<Object>} - Information about the latest commit.
 */
async function getLatestCommitInfo(octokit, org, repo) {
    try {
        debug(`Fetching branches for repository "${repo.name}"...`);
        const { data: branches } = await octokit.request(
            "GET /repos/{org}/{repo}/branches",
            {
                org,
                repo: repo.name,
            }
        );

        // Get commits from all branches in parallel
        const commitPromises = branches.map(async (branch) => {
            const { data } = await octokit.request(
                "GET /repos/{org}/{repo}/commits/{ref}",
                {
                    org,
                    repo: repo.name,
                    ref: branch.commit.sha,
                }
            );
            return {
                branch: branch.name,
                short_sha: data.sha.substring(0, 7),
                url: data.html_url,
                date: data.commit.author.date,
                message: data.commit.message,
                author: {
                    username: data.author.login,
                    url: data.author.html_url,
                },
            };
        });

        const commits = await Promise.all(commitPromises);

        // Find the most recent commit
        const latestCommit = commits.reduce(
            (latest, current) =>
                !latest || current.date > latest.date ? current : latest,
            null
        );

        log(
            `Latest commit in "${repo.name}" found on branch "${latestCommit.branch}".`
        );
        return {
            repo: {
                name: repo.name,
                url: repo.url,
            },
            ...latestCommit,
        };
    } catch (err) {
        error(
            `Failed to fetch commits for "${repo.name}" in "${org}": ${err.message}`
        );
        throw err;
    }
}

/**
 * Gets the latest commit information from all repositories for a specific topic.
 * @param {Octokit} octokit - Authenticated Octokit instance.
 * @param {string} sourceOwner - Name of the organization.
 * @param {string} topic - Topic to filter.
 * @returns  {Promise<Object[]>} - Array with information about the latest commit of each repository.
 */
export async function fetchLatestCommitsByTopic(octokit, sourceOwner, topic) {
    log(
        `Starting search for latest commits in repositories with topic "${topic}"...`
    );
    const repoNames = await getReposByTopic(octokit, sourceOwner, topic);

    // Ejecutar en paralelo para mejorar el rendimiento
    const commitInfoPromises = repoNames.map(async (repo) => {
        try {
            return await getLatestCommitInfo(octokit, sourceOwner, repo);
        } catch (err) {
            error(
                `Could not fetch latest commit for "${repo}" in "${sourceOwner}": ${err.message}`
            );
            return null;
        }
    });

    const commitInfos = await Promise.all(commitInfoPromises);
    log(
        `Search completed. "${
            commitInfos.filter((info) => info !== null).length
        }" commits retrieved.`
    );
    return commitInfos.filter((info) => info !== null); // Filtrar los resultados nulos
}
