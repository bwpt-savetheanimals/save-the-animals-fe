import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import axios from "axios";

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
  	 const [campaignName, setCampaignName] = useState([]);
  useEffect(() => {
    axios
      .get("https://savetheanimals-be.herokuapp.com/api/cams")
      .then(response => {
        setCampaignName(response.data.campaigns[0].cam_name);
        // response.data.cam_name.forEach(topic => setCampaignName(topic));
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <div>

    <Member>
      <h2>{props.details.campaign}</h2>
      <h5>deadline: {props.details.deadline}</h5>
        <h2>{props.details.campaignName}</h2>
   {props.children}
    </Member>
</div>
    	
  )
}