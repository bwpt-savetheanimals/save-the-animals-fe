import React from 'react';
import DonateForm from './DonateForm'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import SignUp from './SignUp'
import WelcomePage from './Components/Welcome';
import FormikUserForm from './Components/LogIn';
import Dashboard from './Components/Dashboard';



function App() {
  return (

    <div className="App">
      <Route exact path="/" component={WelcomePage} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={FormikUserForm} />
      <Route path="/dashboard" component={Dashboard}/>
     <Route path="/donate" component={DonateForm}/>
    </div>
  );
}

export default App;
