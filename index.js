var express=require('express');
var app= express();

var mongoose =require('mongoose');
var path =require('path');
var User= require('./model/usermodel');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var validator = require('validator');
  var nodemailer = require('nodemailer');
 
var mandrillTransport = require('nodemailer-mandrill-transport');



  //connect to mongodb
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
   
   app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('jade', require('ejs').renderFile);
app.set('view engine', 'jade')
   
   app.get('/', function(req,res){
       res.send("ok");
    //if(req.body.name )
	
});
 
 app.post('/register',function(req,res){
     console .log("hii");  
     
   //validate the inputs
  req.checkBody('Adharno', 'adharno is integer').notEmpty().isInt();
  req.checkBody('password', 'Password should be combination of one numerical and one capitalletter').notEmpty();
  req.checkBody('repassword', 'Passwords do not match').equals(req.body.password);
   req.checkBody('email', 'Email is required').notEmpty().isEmail();
   req.checkBody('Mobile', 'not more than 10').isInt().len(10,10);
   
   var user = new User({
         Adharno:req.body.Adharno,
 	 email:req.body.email,
         password:req.body.password,
         repassword:req.body.repassword,
         Mobile:req.body.Mobile
 	});
        console.log("helloooo");

      var errors = req.validationErrors();
  console.log(errors);  
            if (errors) {
                //console.log('hi1');
                res.send(errors);
                 return;
                //res.json({"message":"error message"})
                 //res.render('error', { flash: { type: 'alert-danger', messages: errors }});
           }
        //else {
           // console.log("hi");
            //res.json({"message":"success"});
    //res.render('register', { flash: { type: 'alert-success', messages: [ { msg: 'No errors!' }]}});
//}
 	user.save(function(err,user){
 		if(err){
                    console.log(err);
 		res.send(err);	
 			
        }else{
//            
//            var transport = nodemailer.createTransport(mandrillTransport({
//  auth: {
//    apiKey: 'VvguSUqlBAQIdaDZthadSw'
//  }
//}));
// 
//                 transport.sendMail({
//                              //from: 'sender@example.com',
//                                from:'pavanvarmab5@gmail.com',
//                                 to: 'pavanvarmab5@gmail.com',
//                                 subject: 'hi', //'Hello'
//                                html: '<p>How are you?</p>'
//                }, function(err, info) {
//                                   if (err) {
//                                         console.error(err);
//                                 } else {
//                                   console.log(info);
//                }
//            });

            
            console.log(user);
            res.json({"message":"user registered successfully and saved in database"});
            //res.send(user);
                 }
        
 	});
    
});

 
app.listen(process.env.PORT || 3000,function(){
     console.log('listening the port number is', 3000);
       });
