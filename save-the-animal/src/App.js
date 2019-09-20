import React from 'react';
import './App.css';
import FormikUserForm from './Components/LogIn';
import Dashboard from './Components/Dashboard';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <FormikUserForm />
      <Route path="/dashboard" component={Dashboard}/>
      
    </div>
  );
}

export default App;
