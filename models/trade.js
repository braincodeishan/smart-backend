const { Decimal128 } = require('mongodb');
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

var myschema=new Schema({
    Scrip:String,
    Side:String,
    Price:Decimal128,
    Quantity:Number,
    Timestamp:Date
})
var trade=mongoose.model('wazir',myschema);

module.exports=trade;
