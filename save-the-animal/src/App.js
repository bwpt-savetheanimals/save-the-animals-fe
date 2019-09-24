import React from 'react';
import DonateForm from './Components/DonateForm'
import Chat from './Components/Chat'
import SignUp from './SignUp'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import WelcomePage from './Components/Welcome';
import FormikUserForm from './Components/LogIn';
import Dashboard from './Components/Dashboard';
import CampaignForm from './Components/Campaign/CampaignForm';
import CampaignDashboard from './Components/CampaignDashboard';
import Data from './Components/Campaign/CampaignData';
import PrivateRouteCD from './Components/PrivateRouteCD';
import CampaignLogin from './Components/CampaignLogin';
import Navigation from './Components/Navigation';

function App() {
  return (

    <div className="App">


      
     
      <Route exact path="/" component={WelcomePage} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={FormikUserForm} />
      <Route path="/dashboard" component={Dashboard}></Route> 
      <Route path="/Cdashboard" component={CampaignDashboard}> <Data/> </Route>
      <Route path="/CampaignLogin" component={CampaignLogin}/>
      <PrivateRouteCD path="/Cdashboard" component={CampaignDashboard}><Data/> </PrivateRouteCD> 
      <Route path="/donate" component={DonateForm}/>
     <Route path="/chat"component={Chat}/>
     <Route path="/campaign" component={CampaignForm}/>
     <Data />
    

     
     
     

    </div>
  );
}

export default App;
