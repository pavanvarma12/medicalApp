// app.post('/register',function(req,res){
//     console .log("hii");  
//     
//   //validate the inputs
//  req.checkBody('aadharno', 'adharno is integer and required').notEmpty().isInt();
//  req.checkBody('password', 'Password should be combination of one numerical and one capitalletter').notEmpty();
//  req.checkBody('confirmPassword', 'Passwords do not match').equals(req.body.password);
//   req.checkBody('email', 'Email is required').notEmpty().isEmail();
//   req.checkBody('mobile', 'mobile number must be 10 digits').isInt().len(10,10);
//   
//   var user = new User({
//         Adharno:req.body.aadharno,
// 	 email:req.body.email,
//         password:req.body.password,
//         repassword:req.body.confirmPassword,
//         Mobile:req.body.mobile
// 	});
//      var errors = req.validationErrors();
//              if (errors) {
//                  res.send(errors);
//                 //return;
//         //res.render('error', { flash: { type: 'alert-danger', messages: errors }});
//           }
//        //else {
//          
//    //res.render('register', { flash: { type: 'alert-success', messages: [ { msg: 'No errors!' }]}});
////}
// 	user.save(function(err,user){
// 		if(err){
//                 
//           res.json ({"errmsg":'This  email is already  taken try another'});      	
//      }else{
//            
//            res.status(200).send({"message":"user registered successfully and saved in database"});
//            //res.send(user);
//                 }
//        });
//  });
//  
//  app.post('/login',function(req,res){
//  if(!req.body.email || !req.body.password) {
//    res.json({ success: false, message: 'Please enter email and password.' });
//     } else {    
//               
//          User.findOne({email:req.body.email},function(err,user){
//   
//	if(!user){
//            res.status(404).send({success: false, msg: 'Authentication failed. User not found.'});
//            //res.json({success: false,  message:"email is  doesn't exists in database"});
//		//res.sendFile(path.resolve(__dirname + '/./public/view/login.html'));
//		//res.render('login.html',{error:'invalid email and password'});
//	}else{
//		if(req.body.password === user.password){
//                 res.status(200).send({success: true, message:"login successfully"}); 
//			//res.redirect('/dashboard');
//		}else{
//                     res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
//                    //res.json({success: false, message:"password is not mathching"})
//			//res.sendFile(path.resolve(__dirname + '/./public/view/login.html'));
//			//res.render('login.html',{error : 'Invalid email or password'});		
//		}
//	}
//})
//     }
//});
// login
//if(!req.body.email || !req.body.password) {
//    res.json({ success: false, message: 'Please enter email and password.' });
//     } else {    
//            
//          User.findOne({email:req.body.email},function(err,user){
//   
//	if(!user){
//            res.status(404).send({success: false, msg: 'Authentication failed. User not found.'});
//            //res.json({success: false,  message:"email is  doesn't exists in database"});
//		//res.sendFile(path.resolve(__dirname + '/./public/view/login.html'));
//		//res.render('login.html',{error:'invalid email and password'});
//	}else{
//		if(req.body.password === user.password){
//                 res.status(200).send({success: true, message:"login successfully"}); 
//			//res.redirect('/dashboard');
//		}else{
//                     res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
//                    //res.json({success: false, message:"password is not mathching"})
//			//res.sendFile(path.resolve(__dirname + '/./public/view/login.html'));
//			//res.render('login.html',{error : 'Invalid email or password'});		
//		}
//	}
//})
//     }
//}var mongoClient = require('mongodb').MongoClient;
//collection.updateOne({
//"first_name": "Yashwant"
//}, {
//$set: {
//"age": 45
//}
//}, function(err, results) {
//console.log(results.result);
//});
 