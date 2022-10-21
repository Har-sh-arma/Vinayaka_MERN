//Script to ensure secure login and authentication for user persistence


//First Login using bcrypt
const mongoose = require('mongoose');
const Student = require('../models/Student_User');
const Admin = require('../models/Admin_User');
const asyncWrapper = require('../function_mods/async');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const login = asyncWrapper( async( req, res, next) =>{
	try{
		if(await Student.findOne({ email: req.body.email})){
			stu = await Student.findOne({ email: req.body.email});
			if(await bcrypt.compare( req.body.password, stu.passHash)){
				res.send("Authenticated Student");
			}
			else{res.send("Invalid Password");}
		}
		else if(await Admin.findOne({ email: req.body.email})){
			ad = await Admin.findOne({ email: req.body.email});
			if(await bcrypt.compare( req.body.password, ad.passHash)){
				res.send("Authenticated Admin");
			}	
			else{res.send("Invalid Password");}
		}
		else{
			res.send("Invalid Credentials");
		}
        }catch(err){
                console.log(err);
        }
});


//authentication for hydration jwt


module.exports = {login}
