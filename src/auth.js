import { createAppAuth } from "@octokit/auth-app";
import { Octokit } from "@octokit/core";
import config from "./config.js";
import { error, log } from "./logger.js";

/**
 * Returns an authenticated Octokit instance as a GitHub App installation.
 */
export function getAuthenticatedOctokit() {
    try {
        const appId = config.githubApp.appId;
        const privateKey = config.githubApp.privateKey;
        const installationId = config.githubApp.installationId;

        log("Authenticating as a GitHub App installation...");
        const octokit = new Octokit({
            authStrategy: createAppAuth,
            auth: {
                appId,
                privateKey,
                installationId,
            },
        });
        log("Authenticated as GitHub App installation...");
        return octokit;
    } catch (err) {
        error(
            "Failed to authenticate as GitHub App installation:",
            err.message
        );
        throw err;
    }
}
