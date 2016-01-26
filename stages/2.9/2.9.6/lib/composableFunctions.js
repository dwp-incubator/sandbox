module.exports.returnsAString = () => {
  return "Hello World"; 
}

module.exports.decorate = (input) => {
  return "->" + input + "<-";
}

module.exports.returnsADecoratedString = () => {
  var input = module.exports.returnsAString();
  return module.exports.decorate(input);
}

