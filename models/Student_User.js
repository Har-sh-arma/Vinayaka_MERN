//Script containing Schema for student User

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({name: String,
					email: String,
					pass_hash: String});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
