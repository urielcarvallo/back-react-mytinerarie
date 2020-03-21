const AccountCtrl={};
const Accounts= require('../models/CreateAccount-model');
const bcrypt=require('bcryptjs')
const {validationResult } = require('express-validator');

AccountCtrl.GetAllAccount=async(req,res)=>{
    const User=await Accounts.find();
    res.json(User)
}

AccountCtrl.CreateAccount= (req,res)=>{
        
        const error=validationResult(req)
        if(!error.isEmpty()){
            return res.status(422).json({error:error.array()})
        }else
            {console.log("existente")

    const newUser= new Accounts(req.body)
    if(!req.body.Username) newUser.Username= newUser.email;

    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newUser.Password,salt,(err,hash)=>{
        if(err) throw err;
        console.log(newUser);
        newUser.Password=hash;
        newUser
            .save()
            .then(user=>res.json(user+ "USUARIO CREADO"))
            .catch(err=>res.json(err +"ERROR"))
        })
    })

}
}


module.exports=AccountCtrl;