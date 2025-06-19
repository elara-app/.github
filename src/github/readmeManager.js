import { error, log } from "../logger.js";

const START_MARKER = "<!-- COMMITS-TABLE:START -->";
const END_MARKER = "<!-- COMMITS-TABLE:END -->";

/**
 * Fetches the README content and SHA from GitHub.
 */
export async function fetchReadme(
    octokit,
    targetOwner,
    targetRepo,
    targetReadmePath
) {
    log("Fetching README from GitHub...");
    const { data } = await octokit.request(
        "GET /repos/{owner}/{repo}/contents/{path}",
        {
            owner: targetOwner,
            repo: targetRepo,
            path: targetReadmePath,
        }
    );
    const content = Buffer.from(data.content, "base64").toString("utf8");
    return { content, sha: data.sha };
}

/**
 * Updates the table section in the README content.
 */
export function updateReadmeContent(content, table) {
    const regex = new RegExp(`${START_MARKER}[\\S\\s]*?${END_MARKER}`, "m");
    const replacement = `${START_MARKER}\n${table}\n${END_MARKER}`;
    if (!regex.test(content)) {
        error("Table markers not found in README content.");
        throw Error("Table markers not found in README content.");
    }
    return content.replace(regex, replacement);
}

/**
 * Pushes the updated README to GitHub.
 */
export async function pushReadme(
    octokit,
    targetOwner,
    targetRepo,
    targetReadmePath,
    content,
    readmeSha
) {
    log("Pushing updated README to GitHub...");
    await octokit.request("PUT /repos/{owner}/{repo}/contents/{path}", {
        owner: targetOwner,
        repo: targetRepo,
        path: targetReadmePath,
        message: "Update commits table in README",
        content: Buffer.from(content, "utf8").toString("base64"),
        sha: readmeSha,
    });
    log("README updated successfully.");
}
