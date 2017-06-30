var User= require('../model/usermodel');
module.exports.register=function(req,res){
        
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
         //repassword:req.body.confirmPassword,
         Mobile:req.body.mobile
 	});
        console.log("helloooo");

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
                 
           res.status(401).json ({"errmsg":'This  email is already  taken try another'});      	
      }else{
            
            res.status(200).send({"message":"user registered successfully and saved in database"});
            //res.send(user);
                 }
        });
  }


