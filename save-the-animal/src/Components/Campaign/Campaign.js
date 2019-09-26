import React from 'react';
import styled from "styled-components"
import CampaignHolder from "./Campaign.axios";


const Member = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  max-width: 400px;
  margin: 1rem;
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
    <Member>
        <h2>{props.details.campaign}</h2>
        <h5>deadline: {props.details.deadline}</h5>
        {props.children}
    </Member>
      <CampaignHolder/>
</div>
    	
  )
}