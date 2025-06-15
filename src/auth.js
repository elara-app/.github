import { createAppAuth } from "@octokit/auth-app";
import { Octokit } from "@octokit/core";
import config from "./config.js";
import { error, log } from "./logger.js";

/**
 * Loads GitHub App credential from environment or config.
 */
function getAppCredentials() {
    const appId = config.githubApp.appId;
    const privateKey = config.githubApp.privateKey;
    const installationId = config.githubApp.installationId;

    if (!appId || !privateKey || !installationId) {
        error(
            "Missing GitHub App credentials. Please set APP_ID, PRIVATE_KEY, and INSTALLATION_ID in your environment or config."
        );
        throw new Error("GitHub App credentials not configured.");
    }
    return { appId, privateKey, installationId };
}

/**
 * Returns an authenticated Octokit instance as a GitHub App installation.
 */
export function getAuthenticatedOctokit() {
    try {
        const { appId, privateKey, installationId } = getAppCredentials();

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
