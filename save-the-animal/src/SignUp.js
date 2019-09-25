import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field, Formik, yupToFormErrors } from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';
import axios from 'axios';
import './App.css';
import Navigation from './Components/Navigation';

const StyledField = styled(Field)`
padding: 10px;
margin: 15px auto;`


const StyledButton = styled.button`
 color: #46792f;
    text-decoration: none;
    background: #ffffff;
    padding: 1.8%;
    border: 2px solid #773f1a;
    display: inline-block;
    transition: all 0.4s ease 0s;
    margin-top: 3%;
    margin-bottom: 5%;
    margin: 5px;
    font-size: 1.4rem;
    border-radius: 2px;
        &:hover {
        color: #ffffff;
        background: #007ba7;
        border-color: #007ba7;
        cursor: pointer;
        transition: all 0.4s ease 0s;
        }
`

function SignUp({ status, values, touched, errors }) {
	console.log(status);
	const [ people, setPeople ] = useState([]);

	useEffect(
		() => {
			if (status) setPeople(...people, status);
		},
		[ people ]
	);
	return (
    <div>
    <Navigation/>
		<div className="loginForm">
			<Form>
				<h1>Sign Up</h1>
				<div>
					{touched.username && errors.username && <p className="error"> {errors.username}</p>}
					<StyledField type="text" name="username" placeholder="*Username" values={values.username}/>
				</div>
				<div>
					{touched.email && errors.email && <p className="error"> {errors.email}</p>}
					<StyledField type="email" name="email" placeholder="*Email" values={values.email}/>
				</div>
				<div>
					{touched.password && errors.password && <p className="error"> {errors.password}</p>}
					<StyledField type="password" name="person" placeholder="*Password" values={values.password} />
				</div>
		
					<label>
<<<<<<< HEAD
						<Field type="checkbox" name="TermsOfService"/>
              Terms of Service
=======
						<Field type="checkbox" name="Terms of Service"/>
              I agree to Terms and Conditions
>>>>>>> master
					</label>
							<StyledButton type="submit">Submit</StyledButton>
			</Form>
		</div>
    </div>
	);
}

const SignUpForm = withFormik({
	mapPropsToValues: ({ username, email, password, termsOfService }) => {
		return {
			name: username || '',
			email: email || '',
			password: password || '',
			termsOfService: 'Term of Service' || false
		};
	},
	validationSchema: yup.object().shape({
		name: yup.string().required('Please enter Username'),
		email: yup.string().email('Please enter valid email'),
		password: yup.string().min(8).matches(/(?=.*[0-9])/),
		termsOfService: yup.bool().required()
	}),

	handleSubmit: (values, { props, setStatus }) => {
		props.history.push('/dashboard');
		axios
			.post('https://savetheanimals-be.herokuapp.com/api/users/register', values)
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

