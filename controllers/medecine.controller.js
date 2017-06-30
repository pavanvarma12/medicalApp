var Medicine= require('../model/medicinemodel');
 module.exports.medicine = function (req, res) {
    var user = new Medicine({
      Medicinename : req.body.medicinename,

     });
     user.save(function (err, user) {
        if (err) {
			
            res.json(err);
        }
        else{
          res.status(200).json(user);
        }
               
    });
 };

module.exports.list = function (req, res,next) {
   Medicine.find({Medicinename:/par/ }, function (err, user) {
       if (err) {
            return next(err);
        } else if(user.length == 0)
        {    
         
            res.status(404).json({ success: false, msg:"no records found"});
            
      }
        else{
             console.log(user);
            res.status(200).json(user);
        }
        
    });
};   
