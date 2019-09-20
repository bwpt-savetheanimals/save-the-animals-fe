import React from 'react';
import DonateForm from './DonateForm'

import SignUp from './SignUp'

import './App.css';
import FormikUserForm from './Components/LogIn';
import Dashboard from './Components/Dashboard';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (

    <div className="App">
     <DonateForm/>
      <FormikUserForm />
      <Route path="/dashboard" component={Dashboard}/>
   <SignUp />
    </div>
  );
}

export default App;
