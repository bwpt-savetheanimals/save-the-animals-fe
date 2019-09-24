import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field, Formik } from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';
import axios from 'axios';
import './App.css';
import Navigation from './Components/Navigation';

const StyledField = styled(Field)`
padding: 10px;
margin: 15px auto;
`;

const StyledButton = styled.button`
	width: 95px;
	background-color: #c2e1c2;
	border-color: #f7f7f2;
	border-radius: 10px;
	text-align: center;
	margin: 5px;
`;








function SignUp({ status, touched, errors }) {
		console.log(status);
		const [ people, setPeople ] = useState([]);

		useEffect(
			() => {
				if (status) setPeople(...people, status);
			},
			[ people ]
		);
		return (
			<div className="signupForm">
				<Form>
					<h1>Sign Up</h1>
					<div>
						{touched.username && errors.username && <p className="error"> {errors.username}</p>}
						<StyledField type="text" name="username" placeholder="*Username" />
					</div>
					<div>
						{touched.email && errors.email && <p className="error"> {errors.email}</p>}
						<StyledField type="email" name="email" placeholder="*Email" />
					</div>
					<div>
						{touched.password && errors.password && <p className="error"> {errors.password}</p>}
						<StyledField type="password" name="person" placeholder="*Password" />
					</div>
          <div class="form-group form-check">
					<label class="form-check-label" for="exampleCheck1" >
						<StyledField class="form-check-input" id="exampleCheck1" type="checkbox" name="Terms of Service" placeholder="Terms of Service" />
						<span>Term of Service</span>
					</label>
          </div>
					<StyledButton type="submit">Submit</StyledButton>
				</Form>
			</div>
		);
	}

const SignUpForm = withFormik({
	mapPropsToValues: ({ username, email, password, termsOfService }) => {
		return {
			name: username || '',
			email: email || '',
			password: password || '',
			termsOfService: termsOfService || false
		};
  },
  validationSchema: yup.object().shape({
    name: yup.string().required('Please enter Username'),
    email: yup.string().email('Please enter valid email'),
    password: yup.string().min('8 characters minimum').matches(/(?=.*[0-9])/),
    termsOfService: yup.bool().required()
  }),
  

	handleSubmit: (values, { props, setStatus }) => {
    props.history.push('/dashboard');
		axios
			.post('https://reqres.in/api/users', values)
			.then((res) => {
				setStatus(res.data);
				// console.log(res)
			})
			.catch((err) => {
				console.log('Error', err.response);
			});
	}
})(SignUp);

export default SignUpForm;
