import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UserLogin from './User';
import Navigation from './Navigation'

const StyledLink = styled(Link)`



background-color: #C2E1C2;
border-color: #F7F7F2;
border-radius: 10px;
`


function Dashboard() {

    return (
        <div>
        <Navigation/>
        <div className="App">
          
           <Route path='/dashboard' component={UserLogin}></Route>
           {/* <button>Donate Here</button> */}
           <StyledLink to='donate' ><button>Donate</button></StyledLink>
         <h3>Take a look at your <Link to='/Cdashboard'>Campaigns</Link> here.</h3>

            
        </div>
        </div>
    );
}


export default Dashboard;