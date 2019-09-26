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
`;

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