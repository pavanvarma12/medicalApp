var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var medicineSchema=new Schema({
    Medicinename: {type:String},
  });

module.exports =  mongoose.model('Medicine',medicineSchema);