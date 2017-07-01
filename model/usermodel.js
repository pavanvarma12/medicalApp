var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var UserSchema=new Schema({
    
      Adharno: {type: Number, required:true },
       password: {type: String, required:true},
       email:{ type: String,required:true,unique:true,
                    match: [/.+\@.+\..+/, "Please fill a valid e-mail address"] },
        Mobile:{type: Number,required:true }
      });
      
    UserSchema.pre('save', function (next) {
    var user = this;
    //if (!user.isModified('password')) return next();
     bcrypt.hash(user.password, null, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    
   UserSchema.methods.comparePassword = function (password){
    return bcrypt.compareSync(password,this.password);
};
   
   
 module.exports =  mongoose.model('User',UserSchema);


