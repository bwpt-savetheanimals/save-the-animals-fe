import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';
import styled from 'styled-components';
import { Link, Route, NavLink } from 'react-router-dom';
import Navigation from './Navigation';
import Dashboard from './Dashboard';

const StyledField = styled(Field)`
padding: 10px;
margin: 15px auto;
`;

const StyledButton = styled.button`
	width: 100px;
	background-color: #c2e1c2;
	border-color: #f7f7f2;
	border-radius: 10px;
`;

function LoginForm({ errors, touched, status }) {
	const [ user, setUser ] = useState([]);
	useEffect(
		() => {
			if (status) {
				setUser([ ...user, status ]);
			}
		},
		[ status ]
	);
	return (
		<div>
			<Navigation />

			<div className="loginForm">
				{/* All Data can be changed  */}
				<Form>
					<h1>Login</h1>
					<div>
						{touched.username && errors.username && <p className="error"> {errors.username}</p>}
						<StyledField type="text" name="username" placeholder="Username" />
					</div>

					<div>
						{touched.password && errors.password && <p className="error"> {errors.password}</p>}
						<StyledField type="password" name="password" placeholder="Password" />
					</div>

					<StyledButton type="submit">Submit</StyledButton>

					{/* <Route path='/dashboard' component={Dashboard}>Submit</Route>
                {user.map((users) => (
                    <div key={users.id}>
                        <div>Name: {users.username}</div>
                        <div>Password: {users.password}</div>
                    </div>
                ))} */}
				</Form>
			</div>
		</div>
	);
}

const FormikUserForm = withFormik({
	mapPropsToValues({ username, password }) {
		return {
			username: username || '',
			password: password || ''
		};
	},
	validationSchema: Yup.object().shape({
		username: Yup.string().required('Username is required to login'),
		password: Yup.string().required('Password is required to login')
	}),
	handleSubmit: (values, { props, setStatus }) => {
		props.history.push('/dashboard');
		Axios.post('https://savetheanimals-be.herokuapp.com/api/users/login', {
			username: 'TestUser1',
			password: 'TestPass'
		})
			.then((res) => {
				setStatus(res);
                console.log(res, 'button was clicked');
                const token = res.data.token;
                localStorage.setItem('token', token)
			})
			.catch((error) => {
				console.log(error);
            });
            
            const getItems = () => {
                const token = localStorage.getItem('token');
                Axios.get('https://savetheanimals-be.herokuapp.com/api/users/',  {
              headers: {
                  Authorization: token
              }
            })
            .then(res => {
                console.log('then', res)
            })
            .catch(err => {
                console.log(err.response)
            })
        }
    }
                
})(LoginForm);

export default FormikUserForm;
