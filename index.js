var express=require('express');
var app= express();

var mongoose =require('mongoose');
var path =require('path');
var User= require('./model/usermodel');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var validator = require('validator');

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
   
//   app.use(express.static(__dirname + '/public'));
//app.set('views', __dirname + '/public/views');
//app.engine('jade', require('ejs').renderFile);
//app.set('view engine', 'jade')
//   
   app.get('/', function(req,res){
       res.send("ok");
    	
});
 
 app.post('/register',function(req,res){
     console .log("hii");  
     
   //validate the inputs
  req.checkBody('Adharno', 'adharno is integer and required').notEmpty().isInt();
  req.checkBody('password', 'Password should be combination of one numerical and one capitalletter').notEmpty();
  req.checkBody('repassword', 'Passwords do not match').equals(req.body.password);
   req.checkBody('email', 'Email is required').notEmpty().isEmail();
   req.checkBody('Mobile', 'mobile number must be 10 digits').isInt().len(10,10);
   
   var user = new User({
         Adharno:req.body.adharno,
 	 email:req.body.email,
         password:req.body.password,
         repassword:req.body.repassword,
         Mobile:req.body.mobile
 	});
        console.log("helloooo");

      var errors = req.validationErrors();
  console.log(errors);  
            if (errors) {
                  res.send(errors);
                 return;
                
                 //res.render('error', { flash: { type: 'alert-danger', messages: errors }});
           }
        //else {
          
    //res.render('register', { flash: { type: 'alert-success', messages: [ { msg: 'No errors!' }]}});
//}
 	user.save(function(err,user){
 		if(err){
                   res.send(err);	
 			
        }else{
//              
            res.json({"message":"user registered successfully and saved in database"});
            //res.send(user);
                 }
        
 	});
    
});

    app.listen(process.env.PORT || 3000,function(){
           console.log('listening the port number is', 3000);
       });
