import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Member from './Campaign';
import axios from "axios";


const Style = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
   div {
    display: flex;
    flex-direction: column;
    width: 350px;
    a {
      align-self: flex-end;
      padding: 0.5rem;
    }
  }
`

export default function MembersList(props) {
// 	 const [campaignName, setCampaignName] = useState([]);
//   useEffect(() => {
//     axios
//       .get("https://savetheanimals-be.herokuapp.com/api/cams")
//       .then(response => {
//         setCampaignName(response.data.campaigns[0].cam_name);
//         // response.data.cam_name.forEach(topic => setCampaignName(topic));
//         console.log(response.data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);
	const { setMemberToEdit, membersList, deleteMember } = props;
	return (
		<Style>
			{membersList.map((member) => (
				<Member key={member.id} details={member} >
					<Link to={`/edit/${member.id}`} onClick={() => setMemberToEdit(member)}>
						Edit
					</Link>
					<Link to={`/add`} onClick={() => deleteMember(member)}>
						Delete
					</Link>
					{/* {campaignName} */}
				</Member>
				
			))}

			<Link to="/add">Add</Link>
		</Style>
	);
}
 