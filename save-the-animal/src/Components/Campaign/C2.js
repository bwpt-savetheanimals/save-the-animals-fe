import React from "react";
import styled from "styled-components";
const Div = styled.div`
width: 100%;
max-width: 450px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
padding: 25px 15px;
margin: 0 auto;
margin-top: 40px;
border-radius: 5px;
text-align: center;
`

const H2 = styled.h2`
`

function CampaignCard({ campaign }) {
  return (
    <Div>
      <H2>{campaign.cam_name}</H2>
    
        <p>  {campaign.loc_name} </p>
        <p>  {campaign.cam_urgency} </p>
        <p> {campaign.cam_deadline} </p>
      
    </Div>
  )
}

export default CampaignCard;
