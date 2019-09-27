import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';
import styled from 'styled-components';
import Navigation from './Navigation';


const StyledField = styled(Field)`
padding: 10px;
margin: 15px auto;
`;

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
		const token = localStorage.getItem('token')
		props.history.push('/dashboard');
		Axios.post('https://savetheanimals-be.herokuapp.com/api/users/login', {
			username: 'Gmoney',
			password: 'fakeme2019'
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
