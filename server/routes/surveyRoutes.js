const express = require('express');
const router = express.Router();
const Survey = require('../models/surveySchema');
const Admin = require('../models/userSchema');
const bcrypt = require('bcrypt');


router.post('/', async (req, res) => {
  try {
    const survey = new Survey(req.body);
    await survey.save();
    res.status(201).json({ message: 'Survey submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const surveys = await Survey.find();
    res.json(surveys);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
});




module.exports = router;
