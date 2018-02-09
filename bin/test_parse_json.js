#!/usr/bin/env node

// path
var path = require('path');

// file
var	fs = require('fs');

// curr_dir/../lib/cli.js
// path.join
// path.dirname
// fs real path 
// filename
var lib = path.join(path.dirname(fs.realpathSync(__filename)), '../lib');

// curr_dir/../lib/cli.js
// run is a func
require(lib + '/cli').run();
