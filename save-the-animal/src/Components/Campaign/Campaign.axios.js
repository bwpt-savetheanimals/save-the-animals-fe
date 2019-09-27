import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CampaignCard from './Campaign.props';

function CampaignHolder() {
  const [ campaignName, setCampaignName ] = useState([]);
  

	useEffect(() => {
		axios
			.get('https://savetheanimals-be.herokuapp.com/api/cams')
			.then((response) => {
				setCampaignName(response.data.campaigns);
				console.log('res', response.data.campaigns);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	console.log('campaign name', campaignName);
	return (
		<div>
			{campaignName.map((camp) => {
				return <CampaignCard campaign={camp} key={camp.id}  />;
			})}
		</div>
	);
}

export default CampaignHolder;
