ot-node-env
======================

[![Build Status](https://travis-ci.org/opentable/ot-node-env.png?branch=master)](https://travis-ci.org/opentable/ot-node-env) [![NPM version](https://badge.fury.io/js/ot-node-env.png)](http://badge.fury.io/js/ot-node-env) ![Dependencies](https://david-dm.org/opentable/ot-node-env.png)

Opentable helper for setting the node_env.

Hierarchy as follows:

- NODE_ENV
- /etc/node_env.json ( file with the following contents `{ "env": "myenv" }`)
- "default"

Motivation: Some of the wrappers and up-scripts we are using are a PITA to thread environment variables through.

installation:

```
npm install ot-node-env
```

usage:

```
require('ot-node-env').env();
console.log(process.env.NODE_ENV);

// or alternatively

require('ot-node-env').env('/path/to/file.json')
```

__Running tests__
```
npm install
npm test
```
