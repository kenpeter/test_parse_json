// { _: Array(0), l: 8, p: '[0-9]' }
// Genpass -h 6
// Global
var argv = require('yargs-parser')(process.argv.slice(2));
var jclrz = require('json-colorz');

// Save typing
var puts = console.log;

// Help
var options = {
  h: {
    description: 'This is no help'
  }
};

// Just display the options obj above
this.showHelp = function () {
  puts('test_parse_json\r\n');
  puts('Options:');
  // Option data become array
  var keys = Object.keys(options);

  // Print json key and value one by one 
  keys.forEach(function (key) {
    puts('  -' + key + ': ' + options[key].description);
  });
};

this.run = function () {
  // lib
  var testParseJson = require('./test_parse_json');

  // help
  if (argv.h) {
    return this.showHelp();
  }

  // We console log
  var mypromise = testParseJson();
  mypromise.then((data) => {
    console.log(data);
  });

	
 
/*
var obj = {
  install: false,
  devpackages: ["colorz", "json-colorz"],
  packages: [1, 2, 3],
  git: false,
  verbose: /(app)/,
  dryrun: true,
  files: {
    gitignore: false,
    eslintrc: true,
    index: true,
    license: false,
    package: true,
    readme: true,
    test: false,
    travis: false
  },
  meta: {
    date: "Mon Oct 19 2015 16:48:33 GMT-0400 (EDT)",
    year: "2015",
    packageName: "testproj607",
    type: "private",
    repo: "none",
    remote: false,
    push: false,
    author: "Your Name",
    email: "git@your.email",
    name: "yourHandle",
    url: "https://github.com/yourHandle/testproj607",
    version: "0.1.0",
    license: "ISC",
    description: "An awesome module being created"
  }
}
 
jclrz(obj);
*/

};

