//var bcrypt = require('bcrypt')
//var User= require('../model/usermodel');
//var jwt = require('jsonwebtoken');
//var Secret = 'ahex'; 
//module.exports.login=function(req,res){
//  User.findOne({
//    email: req.body.email
//  }, function(err, user) {
//    if (err) throw err;
//
//    if (!user) {
//      res.status(404).send({success: false, msg: 'Authentication failed. User not found.'});
//    } else if(user) {
//        if(req.body.password){
//           var validpassword=user.comparePassword(req.body.password);
////        }else{
////            res.json({success:false,message:'no password provided'});
//        }
//        if(!validpassword){
//          res.status(401).json({success:false,message:' Invalid password'});
//      }else{
//          var token=jwt.sign(user,Secret,{expiresIn : '1h'});
//                    
//          res.status(200).json({success:true,message:'user authenticated',token:token});
//
//       }
//      
//    }
//  });
//  }