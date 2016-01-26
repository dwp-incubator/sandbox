var util = require('util');
var returnsAString = require('./lib/singleFunction');
var multiple = require('./lib/multipleNamedFunctions');
var composed = require('./lib/composableFunctions');
var inception = require('./lib/moduleUsingModule');

//Example 1
util.log('export a single function');
util.log(returnsAString());

//Example 2
util.log('export multiple functions');
util.log(multiple.returnsAString());
util.log(multiple.returnsAnInt());

//Example 3
util.log('export multiple functions which compose one another');
util.log(composed.returnsADecoratedString());

//Example 4
util.log('A module which imports another module');
util.log(inception.returnMultipleStrings(3));
  
//Example 5
util.log('A module imported multiple times');
//Only this import will log the message 'import inovoked'
util.log( require('./lib/repeatImports'));
//The next three imports will not due to the import process caching
util.log( require('./lib/repeatImports'));
util.log( require('./lib/repeatImports'));
util.log( require('./lib/repeatImports'));



