// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var stadiumSchema = new Schema({
  Name: String,
  Team: String,
  Capacity: Number,
  Latitude: Number,
  Longitude: Number
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('Stadium', stadiumSchema);

// make this available to our users in our Node applications
module.exports = Stadium;
