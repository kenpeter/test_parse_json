// { _: Array(0), l: 8, p: '[0-9]' }
// Genpass -h 6
// Global
var argv = require('yargs-parser')(process.argv.slice(2));

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
  puts(testParseJson());
};

