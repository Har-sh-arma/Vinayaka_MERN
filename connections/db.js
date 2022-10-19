//script with function to connect to Database

const mongoose = require("mongoose");

const connect = async(url) =>{
	try{
		await(mongoose.connect( url, {useNewUrlParser: true,
				useUnifiedTopology: true})
			).then(()=>{ console.log("Connected to Database")})
	}catch(error){
		console.log(error);
	}
}

module.exports = connect;
