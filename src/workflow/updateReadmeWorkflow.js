import { getAuthenticatedOctokit } from "../auth.js";
import config from "../config.js";
import { fetchLatestCommitsByTopic } from "../github/fetchCommits.js";
import {
    fetchReadme,
    pushReadme,
    updateReadmeContent,
} from "../github/readmeManager.js";
import { error, log } from "../logger.js";
import { renderCommitsTable } from "../render/commitsTable.js";

export async function updateReadmeTableOnGithub() {
    try {
        const octokit = getAuthenticatedOctokit();
        const {
            owner: targetOwner,
            repo: targetRepo,
            readmePath,
        } = config.target;
        const { owner: sourceOwner, topic: sourceRepoTopic } = config.source;

        // 1. Fetch latest commits
        log("Fetching latest commits...");
        const commits = await fetchLatestCommitsByTopic(
            octokit,
            sourceOwner,
            sourceRepoTopic
        );

        // 2. Fetch current README from GitHub
        const { content: readmeContent, sha: readmeSha } = await fetchReadme(
            octokit,
            targetOwner,
            targetRepo,
            readmePath
        );

        // 3. Render new table and update README content
        const table = renderCommitsTable(commits);
        const updatedContent = updateReadmeContent(readmeContent, table);

        // 4. Push update README to GitHub (only if changed)
        if (updatedContent !== readmeContent) {
            await pushReadme(
                octokit,
                targetOwner,
                targetRepo,
                readmePath,
                updatedContent,
                readmeSha
            );
        } else {
            log("No changes detected in README table section.");
        }
    } catch (err) {
        error("Workflow failed: " + err.message);
        throw err;
    }
}
