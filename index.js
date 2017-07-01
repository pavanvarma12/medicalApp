var express=require('express');
var app= express();
var mongoose =require('mongoose');
var path =require('path');
var User= require('./model/usermodel');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var validator = require('validator');
var morgan = require('morgan'); 

//var registerController=require('./controllers/Register.controller');
//var loginController=require('./controllers/login.controller');
//var medicineController=require('./controllers/medecine.controller');
//app.set( 'port', ( process.env.PORT || 3003 ));

var favicon = require('favicon');
//var User= require('../model/usermodel');

//app.use(function(req, res, next) {
//  res.header("Access-Control-Allow-Origin", "*");
//  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//  next();
//});


  //connect to mongodb
//  try{
//  mongoose.connect('mongodb://localhost:27017/mean');
//  console.log("database connected");
//  }catch(err){
//      console.log('connection failed');
//  }

 //middleware service
mongoose.connect('mongodb://root:root@ds131742.mlab.com:31742/medicine')
 
app.use(bodyParser.urlencoded({extended:true}));
   app.use(bodyParser.json());
   app.use(expressValidator());
   app.use(morgan('dev'));  
   
//app.use(express.static(__dirname + '/public'));
//app.set('views', __dirname + '/public/views');
//app.engine('jade', require('ejs').renderFile);
//app.set('view engine', 'jade')
//   
   app.get('/', function(req,res){
       res.send("okkkkk");
    	
});
app.post('/register',function(req,res){
     console .log("hii");  
     
   //validate the inputs
  req.checkBody('aadharno', 'adharno is integer and required').notEmpty().isInt();
  req.checkBody('password', 'Password should be combination of one numerical and one capitalletter').notEmpty();
  req.checkBody('confirmPassword', 'Passwords do not match').equals(req.body.password);
   req.checkBody('email', 'Email is required').notEmpty().isEmail();
   req.checkBody('mobile', 'mobile number must be 10 digits').isInt().len(10,10);
   
   var user = new User({
         Adharno:req.body.aadharno,
 	 email:req.body.email,
         password:req.body.password,
         repassword:req.body.confirmPassword,
         Mobile:req.body.mobile
 	});
      var errors = req.validationErrors();
              if (errors) {
                  res.send(errors);
                 //return;
         //res.render('error', { flash: { type: 'alert-danger', messages: errors }});
           }
        //else {
          
    //res.render('register', { flash: { type: 'alert-success', messages: [ { msg: 'No errors!' }]}});
//}
 	user.save(function(err,user){
 		if(err){
                 
           res.json ({"errmsg":'This  email is already  taken try another'});      	
      }else{
            
            res.status(200).send({"message":"user registered successfully and saved in database"});
            //res.send(user);
                 }
        });
  });




//  app.post('/register',registerController.register);
//  app.post('/login',loginController.login);
//  app.get('/search',medicineController.list);
//  app.post('/medecine',medicineController.medicine);


    app.listen(process.env.PORT || 3001,function(){
           console.log('listening the port number is', 3001);
       });
       
//app.listen( app.get( 'port' ), function() {
//  console.log( 'Node server is running on port ' + app.get( 'port' ));
//  });
