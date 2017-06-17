var express=require('express');
var app= express();
var bodyParser = require('body-parser');
//var mongoose =require('mongoose');
var path =require('path');
//var User= require('./model/usermodel');
var expressValidator = require('express-validator');
var validator = require('validator');
 // connect to mongodb
// try{
// mongoose.connect('mongodb://localhost:27017/mean');
// }catch(err){
//     console.log('connection failed');
// }
 //middleware service
app.use(bodyParser.urlencoded({extended:true}));
   app.use(bodyParser.json());
   app.use(expressValidator());
   
   app.get('/', function(req,res){
    res.send('ok')
	
});
 
// app.post('/register',function(req,res){
//     console .log("hii");     
////     // validate the input
////  req.checkBody('username', 'Username is required').notEmpty();
////  req.checkBody('password', 'Password is required').notEmpty();
////   req.checkBody('email', 'Email is required').notEmpty();
////  req.checkBody('email', 'Email does not appear to be valid').isEmail();
////
////  // check the validation object for errors
////  var errors = req.validationErrors();
////
////  console.log(errors);  
//
////  if (errors) {
////    res.render('register', { flash: { type: 'alert-danger', messages: errors }});
////  }
////  else {
////    res.render('register', { flash: { type: 'alert-success', messages: [ { msg: 'No errors!' }]}});
////  }
//     
//   var user = new User({
//           
// 	 Adharno:req.body.Adharno,
// 	 email:req.body.email,
//         password:req.body.password,
//         repassword:req.body.confpassword,
//         Mobile:req.body.Mobile
// 	});
////      console.log("hii");
////     req.checkBody({
//// 'email': {
////    optional: {
////      options: { checkFalsy: true } // or: [{ checkFalsy: true }]
////    },
////    isEmail: {
////      errorMessage: 'Invalid Email'
////    }
////  },
////  'password': {
////    notEmpty: true,
////    matches: {
////      options: ['/^[A-Za-z]\w{0,14}$/', 'i'] // pass options to the validator with the options property as an array
////      // options: [/example/i] // matches also accepts the full expression in the first parameter
////    },
////    errorMessage: 'Invalid Password' // Error message for the parameter
////  },
////  'Mobile': { //
////    optional: true, // won't validate if field is empty
////    isLength: {
////      options: [{ min: 2, max: 10 }],
////      errorMessage: 'Must be between 2 and 10 chars long' // Error message for the validator, takes precedent over parameter message
////    },
////    errorMessage: 'not more than 10'
////    
////    
////  }
//
//     
// 	user.save(function(err,user){
// 		if(err){
//                    console.log(err);
// 		res.send(err);	
// 			
//        }else{
//            console.log(user);
//            //res.json({"message":"useradded successfully"});
//            res.send(user);
//                 }
//        
// 	});
//});
// 
 
app.listen(process.env.PORT || 3001,function(){
     console.log('listening the port number is', 3001);
       });
