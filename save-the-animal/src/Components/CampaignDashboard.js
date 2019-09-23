import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FormikCampaign from './Campaign/CampaignForm';
import Data from './Campaign/CampaignData';



function CampaignDashboard() {

    return (
        <div className="App">
         

            <Route path='/Cdashboard' component={FormikCampaign}></Route>
        
           
            
        </div>
    );
}


export default CampaignDashboard;