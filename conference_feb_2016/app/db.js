var MongoClient = require('mongodb').MongoClient;

var connection;
var callbacks = [];

MongoClient.connect("mongodb://mongo:27017/handsonnode", function(err, conn) {
  if (err) {
    callbacks.forEach(function(callback) {
      callback(err);
    });
  } else {
    connection = conn;
    callbacks.forEach(function(callback) {
      callback(null, connection);
    });
  }
  callbacks = [];
});
  
module.exports = function(callback) {
  if (connection) callback(null, connection);
  else callbacks.push(callback);
};