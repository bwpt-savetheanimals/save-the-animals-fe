import React from 'react';
import DonateForm from './Components/DonateForm'
import Navigation from './Components/Navigation'
import SignUp from './SignUp'
import LogIn from './Components/LogIn'

import './App.css';
import FormikUserForm from './Components/LogIn';
import Dashboard from './Components/Dashboard';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <Navigation />
      
      <Route path="/DonateForm" component={DonateForm} />
      
      <Route path="/Signup" component={SignUp} />

      <Route path="/Login" component={LogIn} />
       
     
      <Route path="/dashboard" component={Dashboard}/>
      <FormikUserForm />
    </div>
  );
}

export default App;
