import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FormikCampaign from './Campaign/CampaignForm';

import Data from './Campaign/CampaignData';

import Navigation from './Navigation'



function CampaignDashboard() {

    return (
        <div> <Navigation/>

        <div className="App">
         

      <h1>Campaign!</h1>     
           <Route path='/dashboard' component={FormikCampaign}></Route>
           <FormikCampaign />
           
           </div>  
        </div>
    );
}


export default CampaignDashboard;