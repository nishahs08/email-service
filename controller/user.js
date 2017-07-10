const User = require('./../models/user');

const userController = {
    register : (req,res) =>{
        console.log(req.body);
        console.log(req.body.username);
        console.log(req.body.password);
       

        
         User.create({
             username : req.body.username,
            password : req.body.password
         })
         .then(data => res.json(data))
         .catch(err => res.json(err));
    }
};

module.exports = userController;