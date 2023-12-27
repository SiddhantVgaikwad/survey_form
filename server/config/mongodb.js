const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
require('dotenv').config();
const DB = process.env.MONGO_URL || 'mongodb+srv://deadpool:ironman@project.hlhbwnd.mongodb.net/evotech?retryWrites=true&w=majority';

/*
mongoose.connect('mongodb://localhost:27017/mern_survey_db', { useNewUrlParser: true, useUnifiedTopology: true });
*/

mongoose.connect(DB, {
	useNewUrlParser: true,
  	useUnifiedTopology: true,
 	
 }).then(() => {
	console.log('connection successful');
}).catch((err) => console.log('no connection',err));

module.exports = mongoose;