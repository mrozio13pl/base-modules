/**
 * Get list of built-in Node.js modules.
 * @param {string} [version] Node.js version. Default: `process.version`.
 * @throws {TypeError} If provided version is invalid.
 * @returns {string[]} List of modules.
 */
declare const modules: (version?: string) => string[];

export = modules;