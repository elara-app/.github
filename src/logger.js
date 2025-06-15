const COLORS = {
    reset: "\x1b[0m",
    green: "\x1b[32m",
    red: "\x1b[31m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
};

function timestamp() {
    return new Date().toISOString();
}

export function log(...args) {
    console.log(
        `${COLORS.green}[INFO]${COLORS.reset} [${timestamp()}]`,
        ...args
    );
}
export function warn(...args) {
    console.log(
        `${COLORS.yellow}[WARN]${COLORS.reset} [${timestamp()}]`,
        ...args
    );
}
export function error(...args) {
    console.log(
        `${COLORS.red}[ERROR]${COLORS.reset} [${timestamp()}]`,
        ...args
    );
}
export function debug(...args) {
    console.log(
        `${COLORS.blue}[DEBUG]${COLORS.reset} [${timestamp()}]`,
        ...args
    );
}
