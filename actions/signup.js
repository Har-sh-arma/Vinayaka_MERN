//Script have secure Signup

const mongoose = require('mongoose');
const Student = require('../models/Student_User');
const Admin = require('../models/Admin_User');
const asyncWrapper = require('../function_mods/async');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const admin = asyncWrapper( async( req, res, next) =>{
	const {name, email, password: plainTextPass} = req.body;
	var repeated_mail = await Admin.findOne({email});
	if(repeated_mail){
		res.status(402);
		res.send("Duplicate entry");
	}
	else{	
		try{
			const passHash = await bcrypt.hash( plainTextPass, saltRounds);
			await Admin.create({name, email, passHash});
			res.status(201);
			res.send(`${name} is now an admin.`)
			console.log("New Admin user created...");
		}catch(err){
			console.log(err);
		}
	}

});

const student = asyncWrapper( async( req, res, next) =>{
	const {name, email, password: plainTextPass} = req.body;
	var repeated_mail = await Student.findOne({email});
	if(repeated_mail){
		res.status(402);
		res.send("Duplicate entry");
	}
	else{	
		try{
			const passHash = await bcrypt.hash( plainTextPass, saltRounds);
			await Student.create({name, email, passHash});
			res.status(201);
			res.send(`${name} is now registered as a student.`)
			console.log("New Student user created...");
		}catch(err){
			console.log(err);
		}
	}

});



module.exports = {'adminSignup': admin,'studentSignup': student};
