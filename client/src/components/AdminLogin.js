// AdminLogin.js (React component)
import React, { useState } from 'react';
import axios from 'axios';
import './AdminLogin.css'; // Import your CSS file

const AdminLogin = ({ onLogin, onSignup }) => {
  const [activeTab, setActiveTab] = useState('login');
  const [loginCredentials, setLoginCredentials] = useState({ username: '', password: '' });
  const [signupCredentials, setSignupCredentials] = useState({ username: '', password: '' });

  const handleLoginInputChange = (e) => {
    setLoginCredentials({ ...loginCredentials, [e.target.name]: e.target.value });
  };

  const handleSignupInputChange = (e) => {
    setSignupCredentials({ ...signupCredentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/surveys/admin/login', loginCredentials);
      const authToken = response.data.authToken;

      // Pass the admin token to the parent component
      onLogin(authToken);
    } catch (error) {
      console.error('Error during admin login:', error);
      // Handle login error
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/surveys/admin/signup', signupCredentials);
      // Provide feedback to the user that signup was successful
      alert('Admin signup successful! Please log in.');
      // Clear the signup form fields after successful signup
      setSignupCredentials({ username: '', password: '' });
      // Switch to the login tab after successful signup
      setActiveTab('login');
    } catch (error) {
      console.error('Error during admin signup:', error);
      // Handle signup error
      alert('Error during admin signup. Please try again.');
    }
  };

  return (
    <div className="admin-login-container">
      <div className="tabs">
      
        <div
          className={`tab ${activeTab === 'login' ? 'active' : ''}`}
          onClick={() => setActiveTab('login')}
        >
          Login
        </div>
        <div
          className={`tab ${activeTab === 'signup' ? 'active' : ''}`}
          onClick={() => setActiveTab('signup')}
        >
          Signup
        </div>
      </div>

      <div className="form-container">
        {activeTab === 'login' && (
          <div>
            <h2>LOGIN</h2>
            <form onSubmit={handleLogin}>
              <div>
              <label>
                Username:
                <input
                  type="text"
                  name="username"
                  value={loginCredentials.username}
                  onChange={handleLoginInputChange}
                  required
                />
              </label>
              </div>
              
            <div>
            <label>
                Password:
                <input
                  type="password"
                  name="password"
                  value={loginCredentials.password}
                  onChange={handleLoginInputChange}
                  required
                />
              </label>
            </div>
              <div>
              <button type="submit">LOGIN</button>
              </div>
             
            </form>
          </div>
        )}

        {activeTab === 'signup' && (
          <div>
            <h2>SIGNUP</h2>
            <form onSubmit={handleSignup}>
              <div>
              <label>
                Username:
                <input
                  type="text"
                  name="username"
                  value={signupCredentials.username}
                  onChange={handleSignupInputChange}
                  required
                />
              </label></div>
              <div>
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  value={signupCredentials.password}
                  onChange={handleSignupInputChange}
                  required
                />
              </label>
              </div>
              <div>
              <button type="submit">SIGNUP</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminLogin;
