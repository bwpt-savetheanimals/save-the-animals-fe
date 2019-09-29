import React from 'react';
import styled from "styled-components"
import CampaignHolder from "./Campaign.axios";
import Navigation from '../Navigation';


const Member = styled.div`
    width: 400px;
  margin: 100px auto 50px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  text-align: left;
  background-color: #80AB82;
  border: 2px solid #773f1a;
  border-radius: 8px;
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Bitter', serif;
    h2 {
    border-bottom: 1px solid black;
    padding: 0 1rem;
    }
  h5 {
    margin: 0.5rem;
  }
`
export default function(props) {

  return (
<div>
  {/* <Navigation/> */}
    <Member>
        <h2>{props.details.campaign}</h2>
        <h5>deadline: {props.details.deadline}</h5>
        {props.children}
    </Member>
      <CampaignHolder/>
</div>
    	
  )
}