import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import MembersList from './CampaignList';
import AddEditMember from './AddEditCampaign';
import Member from "./Campaign";
import Axios from "axios";

const initialTeam = [{campaign: "Monkeys", deadline: "02/02/2002"}];

export default function Data(props) {
	const [ membersList, setMembersList ] = useState(initialTeam);
	const [ memberToEdit, setMemberToEdit ] = useState();
	
	const editMember = (editedMember) => {
		console.log(editedMember);
		const newMembersList = [];
		membersList.forEach((member) => {
			console.log(member); 
			if (editedMember.id === member.id) {
				return (newMembersList[member.id] = editedMember);
			} else {
				newMembersList[member.id] = member;
			}
		});
		setMembersList(newMembersList);
	};


	const deleteMember = () => {
		setMembersList(membersList.filter(member => props.member.id !== props.id))
		console.log('delete', props)
	}


	return (
		<div>
			<Route
				path="/Cdashboard"
				exact
				render={(props) => (
					<MembersList
						{...props}
						setMemberToEdit={setMemberToEdit}
						membersList={membersList}

						setMembersList={setMembersList}
						delete={deleteMember}

					/>
				)}
			/>
			<Route
				path="/add"
				render={(props) => (
					<AddEditMember {...props} membersList={membersList} setMembersList={setMembersList} delete={deleteMember}/>
				)}
			
			/>
			<Route
				path="/edit/:id"
				render={(props) => (
					<AddEditMember
						{...props}
						memberToEdit={memberToEdit}
						editMember={editMember}
						membersList={membersList}
						setMembersList={setMembersList}
					/>
				)}
			/>

	<Redirect to="/" />
		</div>
	);

}
