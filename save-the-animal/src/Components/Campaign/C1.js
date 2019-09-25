import React, { useEffect, useState } from "react";
import axios from "axios";
import CampaignCard from "./C2";

function CampaignList () {
  const [campaignList, setCampaignList] = useState ([])
 

  useEffect(() => {
    
    const getCampaignList = () => {
      axios
        .get("https://savetheanimals-be.herokuapp.com/api/cams")
        .then(response => {
          setCampaignList(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }

    getCampaignList();
  }, []);


  return (
    <div>
      {campaignList.map(campaign => (
        <CampaignCard key={campaign.name} campaign={campaign} />
      ))}
    </div>
  );
}



export default CampaignList;
