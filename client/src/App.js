import { useState } from 'react';
import './App.css';
import AdminLogin from './components/AdminLogin';
import SurveyForm from './components/SurveyForm';
import SurveyList from './components/SurveyList';


function App() {

  const [adminToken, setAdminToken] = useState(null);

  const handleAdminLogin = (token) => {
    setAdminToken(token);
  };

  return (
    <div className="App">
     <h1>Survey Form</h1>
     <SurveyForm/>
     {adminToken ? (
        <SurveyList />
      ) : (
        <AdminLogin onLogin={handleAdminLogin} />
      )}
      
      <SurveyList />
    </div>
    
  );
}

export default App;
