// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Load environment variables from a .env file
require('dotenv').config();
// Connect to MongoDB using the configuration in the specified file
require('./config/mongodb')

//// Import route handlers
const surveyRoutes = require('./routes/surveyRoutes');
const adminRoutes = require('./routes/userRoutes')

// Create an Express application
const app = express();
const PORT = process.env.PORT || 5000;

                 
//Middleware
app.use(cors());
app.use(bodyParser.json());

//Routes
app.use('/api/surveys', surveyRoutes);
app.use('/api/surveys/admin', adminRoutes);

//start server on 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});