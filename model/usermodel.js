var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema=new Schema({
    
    Adharno:
                {
               type: Number,
                required:true
            },
      password: 
              {
              type: String,
              required:true
            },
   repassword:{
                type:String,
                  required:true
       },
       email:{
             type: String,
             required:true,
             unique:true,
          match: [/.+\@.+\..+/, "Please fill a valid e-mail address"]
        },
         Mobile:{
                type: Number,
                required:true,
              
           }
      });

module.exports =  mongoose.model('User',UserSchema);


