const User = require('./../models/user');

const userController = {
    register : (req,res) =>{
        console.log(req.body);
        console.log(req.body.username);
        console.log(req.body.password);
       

        
         User.create({
             username : req.body.username,
            password : req.body.password
         },function(err,user){
             console.log(err);
             console.log('successfull');
             console.log(user)
             res.send();
         });
    }
};

module.exports = userController;