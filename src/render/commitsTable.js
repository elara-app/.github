/**
 * Renders a Markdown table from commit info array.
 * @param {Array} commits
 * @returns {string} Markdown table
 */
export function renderCommitsTable(commits) {
    if (!commits || commits.length === 0) {
        return "_No repositories found for this topic_";
    }

    const headers = [
        "Repository",
        "Branch",
        "Commit",
        "Date (UTC)",
        "Message",
        "Author",
    ];

    const rows = commits.map((commit) => {
        return [
            `[${commit.repo.name}](${commit.repo.url})`,
            `\`${commit.branch}\``,
            `[${commit.short_sha}](${commit.url})`,
            new Date(commit.date).toLocaleString(),
            commit.message.replace(/(\r\n|\n|\r)/g, " "),
            `[${commit.author.username}](${commit.author.url})`,
        ];
    });

    const table = [
        `| ${headers.join(" | ")} |`,
        `| ${headers.map(() => "---").join(" | ")} |`,
        ...rows.map((row) => `| ${row.join(" | ")} |`),
    ].join("\n");

    const lastUpdated = `\n\n_Last updated: ${new Date().toLocaleString()}_`;
    return table + lastUpdated;
}
