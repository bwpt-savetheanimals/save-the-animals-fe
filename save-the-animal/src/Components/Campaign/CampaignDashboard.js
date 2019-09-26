import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FormikCampaign from './CampaignForm';
import Data from './CampaignData';
import Navigation from '../Navigation'

function CampaignDashboard() {

    return (
        <div> <Navigation/>

        <div className="App"> 
 <h1>Campaign!</h1>     
           <Route path='/Cdashboard' component={Data}></Route>
           {/* <FormikCampaign /> */}
           {/* <Data /> */}
         </div>  
        </div>
    );
}


export default CampaignDashboard;