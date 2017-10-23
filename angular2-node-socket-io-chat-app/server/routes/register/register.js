/*===================== load all the things we need ========================================*/
let express = require ('express');
/*===================  load up the user model ==============================================*/
let User = require ('../../model/user');
/*===================  load up the user model ==============================================*/
// import message from '../../config/app.config';
let message = require('../../config/app.config');
// import logger from '../../log4js';
/*===================  load up the user model ==============================================*/
// import *  as config from  '../../config/app.config';
let config = require('../../config/app.config');
module.exports = (req,res)=>{
	try{
	User.find({"email":req.body.email},(err,result)=>{ //check the email id
		if(result.length!=0)
		{
			// logger.info(config.conf.register.userExist );
			res.send({"response":config.conf.register.exist}); //email already exist
		}
		else{
			// logger.info(config.conf.register.new);

  		   let user=new User();
            user.fullName=req.body.fullName;
            user.password=req.body.password;
            user.email=req.body.email;
            user.contact=req.body.contact;
            user.dob=req.body.dob;
            user.gender=req.body.gender;
            user.profilePhoto=req.body.profilePhoto; //input all the fields value

            //console.log('hello')
			 //input all the fields value
			user.save((err,result)=>{
			//	console.log("check");
				if(err){
					res.send(err);
					// logger.error(err + ' ' + 'problem with registering new user' + ' ' + 'register.js:25');
				}
				else
				{
					// logger.info(config.conf.register.newUser);
					res.send(result);
				console.log(result) //send the response
				}
			})
		}
	})
}catch(error){
  res.json({status:false, message: config.conf.register.serverError,data: error })
			

	}
	
}