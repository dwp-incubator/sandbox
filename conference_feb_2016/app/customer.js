var ObjectId = require('mongodb').ObjectID;

// Connect to Mongo and get a reference to the Customer collection
var customers;
require('./db')(function(err, db) {
  if (err) console.log(err);
  else customers = db.collection('customer');
});

// Get all Customers
exports.findAll = function(callback) {
  customers.find().toArray(callback);
}

// Get a Customer by ID
exports.findById = function(id, callback) {
  customers.findOne({_id: new ObjectId(id)}, callback);
}

// Upsert a Customer
exports.save = function(content, callback) {
  var id = content._id;
  if (id) {
    delete content._id;
    customers.updateOne({_id: new ObjectId(id)}, {$set: content}, callback);
  } else {
    customers.insertOne(content, callback);
  }
}

// Delete a Customer by ID
exports.deleteById = function(id, callback) {
  customers.deleteOne({_id: new ObjectId(id)}, callback);
}
