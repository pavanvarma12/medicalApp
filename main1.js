//
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