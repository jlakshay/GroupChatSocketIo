let express = require ('express');
let User = require ('../../model/user');
/*import jwt from 'jsonwebtoken';*/
let comparePassword = require ('../../utils/comparePassword');
let config = require('../../config/app.config');

module.exports = (req,res)=>{
 /* try{*/
    User.findOne({"email":req.body.email},(err,result)=>{
      //finds the email id, if already exists
      if(err)
      {
       
        res.send({error:config.conf.login.error});
      }
      //if email not found, that is not registered
      else if(result==null){
        //console.log(err, "this is after")
        res.send({error:config.conf.login.notFound});
      }
      // if email exists, compare password
      else{
        comparePassword(req.body.password,result.password,(err,isMatch)=>{
        if(isMatch&&!err){
          /*let token=jwt.sign({result},"hithis is secret",{
        expiresIn: 10080 // in seconds
      });*/
           res.json({ success: true});
        }
        else{
           res.send({ success: false, message: config.conf.login.authentication });
        }
        }) 
      }
    })
  /*}catch(error){
  res.json({status:false, message: config.conf.login.serverError,data: error })
}*/
}