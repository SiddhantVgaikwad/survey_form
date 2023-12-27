// SurveyList.js (React component)
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SurveyList.css'; // Import your CSS file

const SurveyList = () => {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    // Fetch the list of survey submissions from the backend
    const fetchSurveys = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/surveys');
        setSurveys(response.data);
      } catch (error) {
        console.error('Error fetching surveys:', error);
      }
    };

    fetchSurveys();
  }, []); // Run the effect once when the component mounts

  return (
    <div className="survey-list-container">
      <h1>Previous Survey Submissions</h1>
      <table className="survey-list-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Nationality</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {surveys.map((survey) => (
            <tr key={survey._id}>
              <td>{survey.name}</td>
              <td>{survey.gender}</td>
              <td>{survey.nationality}</td>
              <td>{survey.email}</td>
              <td>{survey.phone}</td>
              <td>{survey.address}</td>
              <td>{survey.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SurveyList;
