import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FormikCampaign from './Campaign/CampaignForm';



function CampaignDashboard() {

    return (
        <div className="App">
         

        <h1>Campaign!</h1>      
           <Route path='/dashboard' component={FormikCampaign}></Route>
           <FormikCampaign />
           
            
        </div>
    );
}


export default CampaignDashboard;