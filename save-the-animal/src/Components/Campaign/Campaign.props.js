import React from "react";
import styled from "styled-components";

const Div = styled.div`
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
`

function CampaignCard(props) {
  console.log(props);
  return (
    <Div>
      <b>Campaign:</b> {props.campaign.cam_name}
      <b>Urgency:</b> {props.campaign.cam_urgency}
      <b>Location:</b> {props.campaign.loc_name}

      {/* <p> {props.loc_name} </p>
      <p> {props.cam_urgency} </p> */}
    </Div>
  );
}

export default CampaignCard;