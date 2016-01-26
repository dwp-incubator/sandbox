//Notice the import is relative to the folder structure
var multiple = require('./multipleNamedFunctions');

module.exports.returnMultipleStrings = (numberOfStrings) => {
  var returnValue = [];
  for (var i = 0; i < numberOfStrings; i++){
    returnValue.push(multiple.returnsAString());   
  }
  return returnValue;
}
