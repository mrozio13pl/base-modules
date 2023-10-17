'use strict';

const builtins = require('./modules.json');
const semver = require('semver');

module.exports = function (version) {
    version = version || process.version;

    if (version !== '*' && !semver.valid(version)) {
        throw new TypeError(`'${version}' is not a valid version`);
    }

    return Object.keys(builtins).filter(builtin => version === '*' || semver.satisfies(version, builtins[builtin]));
};