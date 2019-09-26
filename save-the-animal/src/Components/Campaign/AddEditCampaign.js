import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Div = styled.div`
	// width: 80%;
	// border: 1px solid black;
`;

const Style = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 1px solid black;
	width: 400px;
	margin: 100px auto;
	padding: 32px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	input {
		margin: 0.5rem;
		border: 1px solid black;
	}
`;

export default function AddEditMember(props) {
	const [ newMember, setNewMember ] = useState({});
	const { membersList, setMembersList, memberToEdit, editMember } = props;

	useEffect(
		() => {
			memberToEdit && setNewMember(memberToEdit);
		},
		[ memberToEdit ]
	);

	const onChange = (event) => {
		setNewMember({ ...newMember, [event.target.name]: event.target.value });
	};

	const addNewMember = () => {
		setMembersList([ ...membersList, newMember ]);
		props.history.push('/Cdashboard');
	};

	const editNewMember = () => {
		editMember(newMember);
		props.history.push('/Cdashboard');
	};

	const deleteMember = (id) => {
		setMembersList(membersList.filter(member => member.id !==id))
		console.log('member',props)
		props.history.push('/Cdashboard');
	}

	return (
		<Div>
			<Style>
				<input type="text" name="campaign" placeholder="campaign" value={newMember.name} onChange={onChange} />
				<br />
				<input type="date" name="deadline" placeholder="deadline" value={newMember.role} onChange={onChange} />
				<br />
				<br />
				{props.memberToEdit ? (
					<Link onClick={editNewMember}>Edit </Link>
				) : (
					<Link onClick={addNewMember}>Save</Link>
				)}
			</Style>
		</Div>
	);
}

