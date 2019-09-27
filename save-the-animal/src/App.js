import React from 'react';
import DonateForm from './Components/DonateForm'
import Chat from './Components/Chat'
import SignUpForm from './SignUp'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WelcomePage from './Components/Welcome';
import FormikUserForm from './Components/LogIn';
import Dashboard from './Components/Dashboard';
import FormikCampaign from './Components/Campaign/CampaignForm';
import CampaignDashboard from './Components/Campaign/CampaignDashboard';
import Data from './Components/Campaign/CampaignData';
import PrivateRouteCD from './Components/PrivateRouteCD';
import CampaignLogin from './Components/CampaignLogin';




function App() {
  return (

   <div className="background" style={{backgroundColor: "black",  height:"800px"}}>
    <div className="App">
  
       <Route exact path="/" component={WelcomePage} />
      <Route path="/signup" component={SignUpForm} />
      <Route path="/login" component={FormikUserForm} />
      <Route path="/dashboard" component={Dashboard}></Route> 
      <Route path="/CampaignLogin" component={CampaignLogin}/>
      <PrivateRouteCD path="/Cdashboard" component={CampaignDashboard}><Data/> </PrivateRouteCD> 
      <Route path="/donate" component={DonateForm}/>
     <Route path="/chat"component={Chat}/>
     <Route path="/campaign" component={FormikCampaign}/>

  </div>
 </div>
  );
}

export default App;
