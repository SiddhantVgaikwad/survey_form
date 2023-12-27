import React, { useState } from 'react';
import axios from 'axios';
//import { toast } from 'react-toastify';
import './formDesign.css'

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    nationality: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Adjust the URL based on your backend endpoint
      const response = await axios.post('http://localhost:5000/api/surveys', formData);
      console.log('Survey submitted successfully:', response.data);
      alert('Survey submitted successfully!');
    } catch (error) {
      console.error('Error submitting survey:', error);
      alert('Error submitting survey. Please try again.');
    }
  };

  return (
    <div className="survey-form-container">
    <form onSubmit={handleSubmit} className="survey-form">
      
    <div className='form-list'>
      <label>
        Full Name<required>*</required>
        
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
      </label>
      </div>
      
      <div className='form-list'>
      <label>
        Email<required>*</required>
        
        <input type="text" name="email" value={formData.email} onChange={handleInputChange} required />
      </label> </div>
      

      <div className='form-list'>
      <label>
        Nationality<required>*</required>
        <input type="text" name="nationality" value={formData.nationality} onChange={handleInputChange} required />
      </label> </div>
     
     
      <div className='form-list'>
      <label>
        Gender<required>*</required>
        <div className="radio-group">
          <label>
          
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleInputChange}
              required
            />
            
            Male
          
          </label>
          <label>
            
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleInputChange}
              required
            />
            Female
           
          </label>
          <label>
           
            <input
              type="radio"
              name="gender"
              value="other"
              checked={formData.gender === 'other'}
              onChange={handleInputChange}
              required
            />
            Other
            
          </label>
        </div>
      </label>
      </div>
      

      <div className='form-list'>
      <label>
        Phone<required>*</required>
        
        <input type="tel" name="phone" pattern="[0-9]*" value={formData.phone} onChange={handleInputChange} required />
      </label>
      </div>
      

      <div className='form-list'>
      <label>
        Address<required>*</required>
       
        <textarea name="address" value={formData.address} onChange={handleInputChange} required />
      </label>
      </div>
   

      <div className='form-list'>
      <label >
        Message
        
        <input  type="address" name="message" value={formData.message} onChange={handleInputChange} required />
      </label>
      </div>
      
      <button type="submit">Submit Survey</button>
      
    </form>
    </div>
  );
};

export default SurveyForm;