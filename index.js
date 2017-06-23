var express=require('express');
var app= express();
var mongoose =require('mongoose');
var path =require('path');
var User= require('./model/usermodel');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var validator = require('validator');

  //connect to mongodb
 try{
 mongoose.connect('mongodb://localhost:27017/mean');
 }catch(err){
     console.log('connection failed');
 }
 //middleware service
//mongoose.connect ('mongodb://root:root@ds131742.mlab.com:31742/medicine')
 
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
  req.checkBody('adharno', 'adharno is integer and required').notEmpty().isInt();
  req.checkBody('password', 'Password should be combination of one numerical and one capitalletter').notEmpty();
  req.checkBody('repassword', 'Passwords do not match').equals(req.body.password);
   req.checkBody('email', 'Email is required').notEmpty().isEmail();
   req.checkBody('mobile', 'mobile number must be 10 digits').isInt().len(10,10);
   
   var user = new User({
         Adharno:req.body.adharno,
 	 email:req.body.email,
         password:req.body.password,
         repassword:req.body.repassword,
         Mobile:req.body.mobile
 	});
        console.log("helloooo");

      var errors = req.validationErrors();
  //console.log(errors);  
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
            console.log('123');  
            res.json({"message":"user registered successfully and saved in database"});
            //res.send(user);
                 }
        });
  });
  
  app.post('/login',function(req,res){
User.findOne({email:req.body.email},function(err,user){
	if(!user){
            res.json({"message":"email is  doesn't  exists"});
		//res.sendFile(path.resolve(__dirname + '/./public/view/login.html'));
		//res.render('login.html',{error:'invalid email and password'});
	}else{
		if(req.body.password === user.password){
                   res.json({"message":"user and  login successfully"}); 
			//res.redirect('/dashboard');
		}else{
                    res.json({"message":"password is not mathching"})
			//res.sendFile(path.resolve(__dirname + '/./public/view/login.html'));
			//res.render('login.html',{error : 'Invalid email or password'});		
		}
	}
})
 });

  

    app.listen(process.env.PORT || 3001,function(){
           console.log('listening the port number is', 3001);
       });
