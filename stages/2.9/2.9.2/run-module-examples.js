var util = require('util');
var returnsAString = require('./lib/singleFunction');
var multiple = require('./lib/multipleNamedFunctions');

//Example 1
util.log('export a single function');
util.log(returnsAString());

//Example 2
util.log('export multiple functions');
util.log(multiple.returnsAString());
util.log(multiple.returnsAnInt());

