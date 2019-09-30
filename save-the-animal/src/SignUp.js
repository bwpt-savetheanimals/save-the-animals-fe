import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';
import axios from 'axios';
import './App.css';
import Navigation from './Components/Navigation';
import history from './history'
import monkey from "./Components/Images/selfie-monkey.jpeg"

const StyledField = styled(Field)`
padding: 10px;
margin: 15px auto;`


const StyledButton = styled.button`
 color: #46792f;
    text-decoration: none;
    background: #1DACD6;
    padding: 1.8%;
    border: 2px solid #1DACD6;
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
const DIV = styled.div`
display: flex;
 flex-direction: row wrap;
 justify-content: center;
 align-items: center;
 `

const Image = styled.img`
width: 100%
max-width: 400px;
text-align: center;
  margin: 100px auto 50px;
   border: 1px solid #773f1a;
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`

function SignUp({ status, touched, errors }) {
	// console.log(status);
	const [ people, setPeople ] = useState([])
	useEffect( () => {
			if (status) {
				setPeople(...people, status);
			}
		},[ status ]);
	return (
    <div>
    <Navigation/>
	<DIV>
	<Image src={monkey} alt=""/>
	
		<div className="loginForm">
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
					<StyledField type="password" name="password" placeholder="*Password"  />
					{/* changed name from "person" to "password" */}
				</div>
					<div>
						<Field type="checkbox" name="termsOfService"/>
              				<p>I agree to Terms and Conditions</p>
						</div>
							<StyledButton type="submit">Submit</StyledButton>
			</Form>
		</div>
		</DIV>
    </div>
	);
}

const SignUpForm = withFormik({
	mapPropsToValues: ({ username, email, password, termsOfService }) => {
		return {
			username: username || '',
			email: email || '',
			password: password || '',
			termsOfService: 'Term of Service' || false
		};
	},
	validationSchema: yup.object().shape({
		username: yup.string().required('Please enter Username'),
		email: yup.string().required('Please enter valid email'),
		password: yup.string()
		.required('Please enter a password')
		.min(8, "Should be 8 characters or more"),
		termsOfService: yup.bool().required("Please accept our terms")
	}),

	handleSubmit: (values, {props, setStatus }) => {
		console.log('sign', props)
		props.history.push('/dashboard')
		axios.post('https://savetheanimals-be.herokuapp.com/api/users/register', {
			username: '',
			password: ''
		})
			.then((res) => {
				setStatus(res.data);
                console.log('sign',res, 'button was clicked');
                const token = res.data.token;
				localStorage.setItem('token', token)
			
			})
			
			.catch((error) => {
				console.log(error);	
				history.push('/dashboard')
			});
		
           
			
        //     const getItems = () => {
		// 		const [user, setUsers]= useState([])
                
		// 		axios.
		// 		get('https://savetheanimals-be.herokuapp.com/api/users/',  {
        //       headers: {
        //           Authorization: localStorage.getItem('token')
        //       }

        //     })
        //     .then(res => {
		// 	   console.log(res.data.listAllUsers)
		// 	   setUsers(res.data.listAllUsers)
			   
        //     })

        //     .catch(err => {
        //         console.log(err.response)
        //     })
        // }
	}

})(SignUp);

export default SignUpForm;

