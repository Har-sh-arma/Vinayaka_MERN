//Script containing schema for admin users

const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({name: String,
					email: String,
					pass_hash: String});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
