const Admin = require('../models/userSchema');
const bcrypt = require('bcryptjs');

// Controller logic for signup
const signup = async (req, res) => {
  const { username, password } = req.body;

  try {
    const newAdmin = new Admin({ username, password });
    await newAdmin.save();

    res.json({ message: 'Admin signup successful!' });
  } catch (error) {
    console.error('Error during admin signup:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller logic for login
const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(401).json({ error: 'Invalid credentials' });
      console.error("error")
    }

    const passwordMatch = await bcrypt.compare(password, admin.password);

    if (passwordMatch) {
      res.json({ message: 'Admin login successful!' });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error during admin login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { signup, login };
