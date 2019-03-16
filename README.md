# carbon-cache   [![Build Status](https://travis-ci.org/AZD009/carbon-cache.svg?branch=master)](https://travis-ci.org/AZD009/carbon-cache) [![Coverage Status](https://coveralls.io/repos/github/AZD009/carbon-cache/badge.svg)](https://coveralls.io/github/AZD009/carbon-cache) [![NPM](https://img.shields.io/npm/l/carbon-cache.svg)](https://npm.im/carbon-cache) [![npm](https://img.shields.io/npm/v/npm.svg)](https://npm.im/carbon-cache) [![npm](https://img.shields.io/npm/v/node.svg?label=node)](https://npm.im/carbon-cache) [![npm dev dependency version](https://img.shields.io/npm/dependency-version/carbon-cache/dev/typescript.svg)](https://npm.im/carbon-cache) [![npm dev dependency version](https://img.shields.io/npm/dependency-version/carbon-cache/dev/jest.svg)](https://npm.im/carbon-cache) [![npm dev dependency version](https://img.shields.io/npm/dependency-version/carbon-cache/dev/coveralls.svg)](https://npm.im/carbon-cache)

[`carbon-cache`](https://github.com/AZD009/carbon-cache) Is a simple, light weight and extendable in memory cache.

## Install

`$ npm install --save carbon-cache`

### Example

```javascript
const Cache = reuire('carbon-cache');

// Create myCache valid for 10 seconds i.e. TTL is 10 seconds.
const myCache = new Cache(10);  

// TTL is completly optional. The below is perfectly valid.
const myCache = new Cache();  

// Populate Cache with JSON data
myCache.importJson(_JSON data_);

// Put an item into the Cache
myCache.put(_key_, _value_, _replaceIfKeyAlreadyExist?: Boolean_);

// Check if a key exist in Cache
myCache.has(_key_);

// Get an item from the Cache
myCache.get(_key_);

// Delete an item from the Cache
myCache.del(_key_);

// Export complete contents of Cache as JSON
myCache.exportJson();

// Flush complete contents of Cache
myCache.flush();

// Check if the cache is empty
myCache.isEmpty();
```

>The TTL is for complete Cache and validity of the complete cache is extended by the TTL provided while creating the Cache when a new item is added to the Cache. If no TTL specified while creating Cache, it lives on as long as the node process is alive.