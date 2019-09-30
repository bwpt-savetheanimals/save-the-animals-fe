import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navigation from './Navigation'
import { Progress } from 'reactstrap';

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
  border-radius: 8px;`

  const StyledDiv2 = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 20px auto 20px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  text-align: left;
  background-color: #80AB82;
  border: 2px solid #773f1a;
  border-radius: 8px;`

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
        <StyledDiv>
           <Link to='donate'><StyledButton>Donate</StyledButton></Link>
           <Link to='/Cdashboard'><StyledButton>Campaigns</StyledButton></Link>
         </StyledDiv>
         <StyledDiv2>
             <div className="filler">
     <Progress striped value="82" >Monkeys</Progress>
      <Progress striped color="success" value="57">Rhinos</Progress>
      <Progress striped color="info" value="74" >Giraffes</Progress>
      <Progress striped color="warning" value="33" >Lions</Progress>
      <Progress striped color="danger" value="93" >Tigers</Progress>
      </div>
      </StyledDiv2>
        </div>
    );
}
export default Dashboard;


