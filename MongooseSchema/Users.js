var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  username: String,
  password: String,
  designation:String,
  unitname:String,
  category:String,
  unitcode:String,
  regioncode:String,
  divisioncode:String,
  hocode:String,
  subdivisioncode:String,
  accofccode:String,
  finaclecode:String,
  csicode:String,
  mccamishcode:String,
  mailscode:String,
  pgcode:String

});


