import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Data from './CampaignData';
import Navigation from '../Navigation'

function CampaignDashboard() {

return (
        <div> <Navigation/>
            <h1>Campaign!</h1>     
                <Route path='/Cdashboard' component={Data}></Route>
         </div>
    );
}


export default CampaignDashboard;