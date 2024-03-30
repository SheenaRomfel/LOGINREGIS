import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './RegisterForm';

import LoginForm from './LoginForm'; // Import the LoginForm component

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />  {/* Define route for login */}
        {/* Add other routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
