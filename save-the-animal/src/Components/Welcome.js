import React from 'react';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom'
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
`
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



function WelcomePage() {
    return (
        <div>
             <Navigation/>
              <h1>Save The Animals!</h1>
        <StyledDiv>
            <Link to="/signup"><StyledButton>Signup</StyledButton></Link>
            <Link to="login"><StyledButton>Login</StyledButton></Link>
            <Link to="CampaignLogin"><StyledButton>Campaign Login</StyledButton></Link>
        </StyledDiv>
        </div>
    )
}

export default WelcomePage;