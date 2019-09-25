import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import MembersList from './CampaignList';
import AddEditMember from './AddEditCampaign';

const initialTeam = [ { campaign: 'Campaign 1', id: 0, deadline: '2019-10-24' } ];

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
					/>
				)}
			/>
			<Route
				path="/add"
				render={(props) => (
					<AddEditMember {...props} membersList={membersList} setMembersList={setMembersList} />
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
