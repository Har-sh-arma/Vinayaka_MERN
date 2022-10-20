//Script have secure Signup

const mongoose = require('mongoose');
const Student = require('../models/Student_User');
const Admin = require('../models/Admin_User');
const asyncWrapper = require('../function_mods/async');

const admin = asyncWrapper( async( req, res, next) =>{
	const {name, email, password: plainTextPass} = req.body;
	var repeated_mail = await Admin.findOne({email});
	if(repeated_mail){
		res.status(402);
		res.send("Duplicate entry");
	}
	else{	
		try{
			await Admin.create({name, email, plainTextPass});
			res.status(200);
			res.send(`${name} is now an admin.`)
			console.log("New Admin user created...");
		}catch(err){
			console.log(err);
		}
	}

});

module.exports = admin;
