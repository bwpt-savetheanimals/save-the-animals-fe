import React from 'react';
import DonateForm from './Components/DonateForm'
import Navigation from './Components/Navigation'
import SignUp from './SignUp'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import WelcomePage from './Components/Welcome';
import FormikUserForm from './Components/LogIn';
import Dashboard from './Components/Dashboard';
import CampaignForm from './Components/Campaign/CampaignForm';
import CampaignDashboard from './Components/CampaignDashboard';



function App() {
  return (

    <div className="App">

      <Navigation />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={FormikUserForm} />
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/Cdashboard" component={CampaignDashboard}/>
     <Route path="/donate" component={DonateForm}/>
     <Route path="/campaign" component={CampaignForm}/>
     
     
    </div>
  );
}

export default App;
