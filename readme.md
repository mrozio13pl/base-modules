# base-modules

> List of Node.js [built-in modules](https://nodejs.org/api/).

Features:

- Returns a list of built-in modules based on version.
- Supports Node.js v4.0.0 and above.

## Install

```
npm i base-modules
```

## Usage

```js
const modules = require('base-modules');
```

Get list of modules for your current Node.js version:

```js
modules().includes('http'); // <= true
```

Get list of modules for specific Node.js version:

```js
modules('9.0.0').includes('fs/promises'); // <= false
```

Get list of modules without specifying any version:

```js
modules('*').includes('node:test'); // <= true
```

A static list of all modules:

```js
require('base-modules/static'); // ['assert', 'fs', ...]
```

## License

MIT 💖