var express=require('express');
var app= express();

var mongoose =require('mongoose');
var path =require('path');
var User= require('./model/usermodel');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var validator = require('validator');
 // connect to mongodb
// try{
// mongoose.connect('mongodb://localhost:27017/mean');
// }catch(err){
//     console.log('connection failed');
// }
 //middleware service
mongoose.connect ('mongodb://root:root@ds131742.mlab.com:31742/medicine')
 
app.use(bodyParser.urlencoded({extended:true}));
   app.use(bodyParser.json());
   app.use(expressValidator());
   
   app.get('/', function(req,res){
       res.send("ok");
    //if(req.body.name )
	
});
 
 app.post('/register',function(req,res){
     console .log("hii");  
     
   //validate the inputs
  req.checkBody('Adharno', 'adharno is required').notEmpty().isInt();
  req.checkBody('password', 'Password should be combination of one numerical and one capitalletter').notEmpty().matches(/^(?=.*?[A-Z])(?=.*?[0-9])$/,"i");
  req.checkBody('repassword', 'Passwords do not match').equals(req.body.password);
   req.checkBody('email', 'Email is required').notEmpty().isEmail();
   req.checkBody('Mobile', 'not more than 10').isInt().len(10,10);
   
   var errors = req.validationErrors();
  console.log(errors);  
            if (errors) {
                console.log('hi1');
                // res.render('register', { flash: { type: 'alert-danger', messages: errors }});
           }
        else {
            console.log("hi");
            res.json({"message":"success"});
    //res.render('register', { flash: { type: 'alert-success', messages: [ { msg: 'No errors!' }]}});
          }
  
//     var errors = req.validationErrors();
//               if (errors) {
//                console.log('hi1');
//                
//           }
//        else {
//            console.log("hi");
//            res.send("hi3")
//    
//          }
//  
//   var errors = req.validationErrors();
//
//  console.log(errors);  
//
//            if (errors) {
//                console.log('hi1');
//                
//           }
//        else {
//            console.log("hi");
//            res.send("")
//    
//          }
//  
//  req.checkBody('Mobile', 'not more than 10').isInt().len(10,10);
//  
//  var errors = req.validationErrors();
//
//  console.log(errors);  
//
//            if (errors) {
//                
//           }
//        else {
//            console.log('hello');
//    
//          }
     
   var user = new User({
           
 	 Adharno:req.body.Adharno,
 	 email:req.body.email,
         password:req.body.password,
         repassword:req.body.repassword,
         Mobile:req.body.Mobile
 	});
        console.log("helloooo");

     
 	user.save(function(err,user){
 		if(err){
                    console.log(err);
 		res.send(err);	
 			
        }else{
            console.log(user);
            //res.json({"message":"useradded successfully"});
            res.send(user);
                 }
        
 	});
});

 
app.listen(process.env.PORT || 3001,function(){
     console.log('listening the port number is', 3001);
       });
