import React from 'react';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom'
import Navigation from './Navigation'
import elephant from "./Images/elephant.jpg";



const StyledDiv = styled.div`
 display: flex;
 flex-direction: row wrap;
 justify-content: center;
 align-items: center;
  width: 300px;
  margin: 20px auto 20px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  text-align: left;
  background-color: #C5E6A6;
  border: 2px solid #773f1a;
  border-radius: 8px;
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Bitter', serif;


`
const StyledButton = styled.button`
    color: #46792f;
    text-decoration: none;
    background: #1DACD6;
    padding: 1.8%;
    border: 2px solid #773f1a;
    display: inline-block;
    transition: all 0.4s ease 0s;
    margin-top: 3%;
    margin-bottom: 5%;
    margin: 5px;
    font-size: 1.4rem;
    border-radius: 10px;
        &:hover {
        color: #ffffff;
        background: #007ba7;
        border-color: #007ba7;
        cursor: pointer;
        transition: all 0.4s ease 0s;
        }
`
const StyledButton2 = styled.button`
    color: #46792f;
    margin: 20px;
    text-decoration: none;
    background: #1DACD6;
    padding: 1.8%;
    border: 2px solid #773f1a;
    display: inline-block;
    transition: all 0.4s ease 0s;
    margin-top: 3%;
    margin-bottom: 5%;
    margin: 5px;
    font-size: 1.4rem;
    border-radius: 10px;
        &:hover {
        color: #ffffff;
        background: #007ba7;
        border-color: #007ba7;
        cursor: pointer;
        transition: all 0.4s ease 0s;
        }
`

const Image = styled.img`
  width: 100%;
  max-width: 1000px;
  border: 1px solid #773f1a;
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 5px;
`;

const H1 = styled.h1`
  font-family: "Josefin Sans", sans-serif;
  font-family: "Bitter", serif;
  margin: 2rem;
`;

function WelcomePage() {
    return (
        <div>
             <Navigation/>
              <H1>Save The Animals!</H1>
              <Image src={elephant} alt="" />
        <StyledDiv>
            <Link to="/signup"><StyledButton>Signup</StyledButton></Link>
            <Link to="login"><StyledButton>Login</StyledButton></Link>
            </StyledDiv>
            <StyledDiv>
            <Link to="CampaignLogin"><StyledButton2>Campaign Login</StyledButton2></Link>
            </StyledDiv>
        
        </div>
    )
}

export default WelcomePage;