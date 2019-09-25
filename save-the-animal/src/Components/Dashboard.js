import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UserLogin from './User';
import Navigation from './Navigation'


const StyledDiv = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
  width: 400px;
  margin: 100px auto 50px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  text-align: left;
  background-color: #80AB82;
  border: 2px solid #773f1a;
  border-radius: 8px;


const StyledButton = styled.button`
    color: #46792f;
    text-decoration: none;
    background: #ffffff;
    padding: 1.8%;
    border: 2px solid #773f1a;
    display: inline-block;
    transition: all 0.4s ease 0s;
    margin-top: 3%;
    margin-bottom: 5%;
    margin: 5px;
    font-size: 1.4rem;
    border-radius: 2px;
        &:hover {
        color: #ffffff;
        background: #007ba7;
        border-color: #007ba7;
        cursor: pointer;
        transition: all 0.4s ease 0s;
        }
`

function Dashboard() {

    return (
        <div>
        <Navigation/>
        <Route path='/dashboard' component={UserLogin}></Route>
        <StyledDiv>
           <Link to='donate'><StyledButton>Donate</StyledButton></Link>
         <h3><Link to='/Cdashboard'><StyledButton>Campaigns</StyledButton></Link> </h3>

            
        </StyledDiv>
        </div>
    );
}
export default Dashboard;
