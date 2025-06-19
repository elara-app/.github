import dotenv from "dotenv";
import { error } from "./logger.js";
dotenv.config();

function requireEnv(name) {
    const value = process.env[name];
    if (!value || value.trim() === "") {
        throw error(`Missing environment variable: ${name}`);
    }
    return value;
}

const config = {
    target: {
        owner: requireEnv("TARGET_OWNER"),
        repo: requireEnv("TARGET_REPO"),
        readmePath: requireEnv("TARGET_README_PATH"),
    },
    source: {
        owner: requireEnv("SOURCE_OWNER"),
        topic: requireEnv("SOURCE_TOPIC"),
    },
    githubApp: {
        appId: requireEnv("APP_ID"),
        privateKey: requireEnv("PRIVATE_KEY"),
        installationId: requireEnv("INSTALLATION_ID"),
    },
};

export default config;
