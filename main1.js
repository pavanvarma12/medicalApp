/
//var bodyParser = require('body-parser');
//  var express = require('express');
//  var app = express();
//  var mongoose =require('mongoose');
//var expressValidator = require('express-validator');
//var path =require('path');
//var User= require('./model/usermodel');
//
//app.use(bodyParser.urlencoded({ extended: true })); 
//app.use(expressValidator());  //this line to be addded
//
//// connect to mongodb
// mongoose.connect('mongodb://localhost:27017/mean');
//
//  // post users to database
//  app.post('/register', function(req, res) {
//      console.log("123");
//       var user=new User()  
//        console.log("1234");
//    user.Adharno=req.body.Adharno;
//    user.email = req.body.email;
//    user.password = req.body.password;
//    user.repassword = req.body.repassword;
//    user.Mobile = req.body.Mobile;
//     
////    // Validation
//    req.checkBody('Adharno', 'andharno is required.').notEmpty();
//    req.checkBody('email', 'Email is required.').notEmpty();
//    req.checkBody('email', 'Email is not valid').isEmail(); 
//    req.checkBody('password', 'Password is required').notEmpty();
//    req.checkBody('repassword', 'Passwords do not match').equals(req.body.password);
//console.log('1');
//
//      req.checkBody({
//    'Adharno':
//            {
//         notEmpty:true   
//                  },
//            
// 'email': {
//    optional: {
//      options: { checkFalsy: true } // or: [{ checkFalsy: true }]
//    },
//    isEmail: {
//      errorMessage: 'Invalid Email'
//    }
//  },
//  'password': {
//    notEmpty: true,
//    matches: {
//      options: ['/^[A-Za-z]\w{0,14}$/', 'i'] // pass options to the validator with the options property as an array
//      // options: [/example/i] // matches also accepts the full expression in the first parameter
//    },
//    errorMessage: 'Invalid Password' // Error message for the parameter
//  },
//  'Mobile': { //
//    optional: true, // won't validate if field is empty
//    isLength: {
//      options: [{ min: 2, max: 10 }],
//      errorMessage: 'Must be between 2 and 10 chars long' // Error message for the validator, takes precedent over parameter message
//    },
//    errorMessage: 'not more than 10'
//    
//    
//  }
//});
//
//
//    var errors = req.validationErrors();
//      console.log("eee");
//    if(errors) {
//        res.status(400).send({ "message": "Missing parameter" });
////      res.render('register', {
////        errors: errors
////      });
//    } 
//
//    // save to database
//    user.save(function(err,user) {
//      if (err) {
//         console.log(err);		
//         res.send(err);	         
//      }
//          console.log(user);
//          res.json({"message":"useradded successfully"});
//          //res.send(user);
//      
//    });
//
//  });
////
////      app.listen(3001,function(){
////    console.log('listening the port number is', 3001);
////  
////     });
////     
////

//"/^(?=.*?[A-Z])(?=.*?[0-9])$/"
//req.checkBody('dateofbirth', 'Invalid dateofbirth').notEmpty.isDate();
//req.checkBody('password', 'Invalid possword').notEmpty().len(8, 30);
//.matches('/^(?=.*\d)(?=.*[a-zA-Z])$/','/^(?=.*\d)(?=.*[a-zA-Z])$/', 'i')
//if (errors['username'])
//    span.text-error #{errors['username'].msg}
//
//
//
//
// User.findOne({
//    email: req.body.email
//  }, function(err, user) {
//    if (err) throw err;
//
//    if (!user) {
//      res.send({ success: false, message: 'Authentication failed. User not found.' });
//    } else {
//      // Check if password matches
//      user.comparePassword(req.body.password, function(err, isMatch) {
//        if (isMatch && !err) {
//          // Create token if the password matched and no error was thrown
//          var token = jwt.sign(user, superSecret, {
//            expiresIn: 10080 // in seconds
//          });
//          res.json({ success: true, token: 'JWT ' + token });
//        } else {
//          res.send({ success: false, message: 'Authentication failed. Passwords did not match.' });
//        }
//      });
//    }
//       });
//  });
//      
      
      
//    User.findOne({
//        email:req.body.email
//    }, function(err, user) {
//        if(err) return res.json(user);
//        if(!user){
//            res.json({message:'authentication failed',
//                        sucess: false});
//        }else if(user){
//            var validPassword = user.passComparison(req.body.password);
//            if(!validPassword){
//                res.json({
//                    sucess:false,
//                    message:'authentication failed due to password failer'
//                });
//            }else{
//                var token = jwt.sign(user
//                    //name : user.name,
//                    //email: user.email
//                ,superSecret,{
//                    expiresIn : '1h'
//                });
//                res.json({
//                    sucess: true,
//                    message:'enjoy your token',
//                    token : token
//                });
//
//            }
//        }
//    });
//});  
////  UserSchema.pre('save', function (next) {  
//  var user = this;
//  if (this.isModified('password') || this.isNew) {
//    bcrypt.genSalt(10, function (err, salt) {
//      if (err) {
//        return next(err);
//      }
//      bcrypt.hash(user.password, salt, function(err, hash) {
//        if (err) {
//          return next(err);
//        }
//        user.password = hash;
//        next();
//      });
//    });
//  } else {
//    return next();
//  }
//});
//
//// Create method to compare password input to password saved in database
//UserSchema.methods.comparePassword = function(pw, cb) {  
//  bcrypt.compare(pw, this.password, function(err, isMatch) {
//    if (err) {
//      return cb(err);
//    }
//    cb(null, isMatch);
//  });
//};
//   






// UserSchema.pre('save',function(next){
//    var user = this;
//    if(!user.isModified('password'))
//        return next();
//    bcrypt.hash(user.password,null,null,function(err,hash){
//        if(err) return next(err);
//        user.password = hash;
//        next();
//
//    });
//});
//     UserSchema.methods.passComparison = function(password){
//        var user = this;
//        return bcrypt.compareSync(password,user.password);
//
//     };
//    