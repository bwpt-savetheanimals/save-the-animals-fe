import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';
import styled from 'styled-components';
import Navigation from './Navigation';
import lion from "./Images/lion.jpeg";


const StyledField = styled(Field)`
padding: 10px;
margin: 15px auto;
`;

const StyledButton = styled.button`
	color: #46792f;
    text-decoration: none;
    background: #1DACD6;
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
// const DIV = styled.div`
// display: flex;
//  flex-direction: row wrap;
//  justify-content: flex-start;
//  align-items: flex-start;
//  `

const Image = styled.img`
width: 100%
max-width: 200px;
 border-radius: 8px;
text-align: center;
  margin: 20px auto 20px;
   border: 1px solid #773f1a;
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  `

//  const Login = styled.div`
//   width: 100%;
//   max-width: 500px;
//   margin: 20px auto 20px;
//   padding: 20px;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
//   text-align: left;
//   background-color: #97AD56;
//   border: 2px solid #773f1a;
//   border-radius: 8px;
//   font-family: 'Josefin Sans', sans-serif;
//   font-family: 'Bitter', serif;
//   `




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
			<div>
			<Image src={lion} alt=""/>

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
            
        //     const getItems = () => {
                
        //         Axios.get('https://savetheanimals-be.herokuapp.com/api/users/',  {
        //       headers: {
        //           Authorization: token
        //       }

        //     })
        //     .then(res => {
        //         console.log('then', res)
        //     })

        //     .catch(err => {
        //         console.log(err.response)
        //     })
        // }

    }
                
})(LoginForm);

export default FormikUserForm;
