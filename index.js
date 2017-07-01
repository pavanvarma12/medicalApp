var express=require('express');
var app= express();
var mongoose =require('mongoose');
//var path =require('path');
var User= require('./model/usermodel');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var validator = require('validator');
var morgan = require('morgan'); 
var registerController=require('./controllers/Register.controller');
var loginController=require('./controllers/login.controller');
var medicineController=require('./controllers/medecine.controller');


//app.use(function(req, res, next) {
//  res.header("Access-Control-Allow-Origin", "*");
//  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//  next();
//});



  //connect to mongodb
 try{
 mongoose.connect('mongodb://localhost:27017/mean');
 }catch(err){
     console.log('connection failed');
 }

 //middleware service
//mongoose.connect('mongodb://root:root@ds131742.mlab.com:31742/medicine')
 
app.use(bodyParser.urlencoded({extended:true}));
   app.use(bodyParser.json());
   app.use(expressValidator());
   app.use(morgan('dev'));  
   
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('jade', require('ejs').renderFile);
app.set('view engine', 'jade')
   
   app.get('/', function(req,res){
       res.send("ok");
    	
});

  app.post('/register',registerController.register);
  app.post('/login',loginController.login);
  app.get('/search',medicineController.list);
  app.post('/medecine',medicineController.medicine);


    app.listen(process.env.PORT || 3003,function(){
           console.log('listening the port number is', 3003);
       });
