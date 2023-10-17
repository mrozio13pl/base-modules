/* eslint-disable unicorn/prefer-includes */
const assert = require('assert');
const modules = require('.');
const static = require('./static.js');

assert(static.indexOf('assert') >= 0);
assert(modules('18.0.0').indexOf('node:test') >= 0);
assert(modules('9.0.0').indexOf('fs/promises') === -1);
assert(modules('*').indexOf('node:test') >= 0);

assert.throws(function () { modules('abc') }, TypeError);
assert.doesNotThrow(function () { modules('1.0.0') });

// tested for node.js 4.0.0