var customers = {};
var nextId = 1;

module.exports.getById = (customerId) => {
  var customer = customers[customerId];
  return customer;
};

module.exports.list = () => {
  return customers;
};

module.exports.create = (customer) => {
  customer.id = nextId;
  customers[customer.id] = customer;
  nextId++;
  return customer;
}

module.exports.update = (customer) => {
  if(customers[customer.id] === undefined){
    return false;
  }else{
    customers[customer.id] = customer;
    return true;
  }
}

module.exports.delete = (customerId) => {
  if(customers[customerId] === undefined){
    return false;
  }else{
    delete customers[customerId];
    return true;
  }
}
