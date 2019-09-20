import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import Axios from "axios";
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom'

import Dashboard from './Dashboard';

const StyledField = styled(Field)`
padding: 10px;
margin: 15px auto;
`

const StyledButton = styled.button`
width: 77px;
background-color: #C2E1C2;
border-color: #F7F7F2;
border-radius: 10px;
`


function LoginForm({ errors, touched, status }) {
    const [user, setUser] = useState([])
        useEffect (() => {
            if (status) {
                setUser([...user, status])
            }
        }, [status])
    return (
        <div className="loginForm">
            {/* All Data can be changed  */}
            <Form>
                <h1>Login</h1>
                <div>
                    {touched.username && errors.username && <p className="error"> {errors.username}</p>}
                    <StyledField type="text" name="username" placeholder="Username" />
                </div>
                {/* <div>
                    {touched.email && errors.email && <p className="error"> {errors.email}</p>}
                    <StyledField type="email" name="email" placeholder="Email" />
                </div> */}
                <div>
                    {touched.password && errors.password && <p className="error"> {errors.password}</p>}
                    <StyledField type="password" name="password" placeholder="Password" />
                </div>
                {/* <div>
                    {touched.campaign && errors.campaign && <p className="error"> {errors.campaign}</p>}
                    <StyledField component="select" name="campaign" className="field">
                        <option value="" disabled>Select Campaign</option>
                        <option value="campaign1">Campaign 1</option>
                        <option value="campaign2">Campaign 2</option>
                        <option value="campaign3">Campaign 3</option>
                    </StyledField>
                </div> */}
                <StyledButton type='submit'>Submit</StyledButton>
                <Link to='dashboard' type='submit'>Submit</Link>
                <Route path='/dashboard' component={Dashboard}>Submit</Route>
                  {user.map((users) => (
                    <div key={users.id}>
                        <div>Name: {users.username}</div>
                    
                        <div>Password: {users.password}</div>
                    
                        
                        </div>

                ))}
            </Form>
           
        
        </div>
    );
}

const FormikUserForm = withFormik({

    mapPropsToValues({ username, password }) {
        return {
            username: username || "",
            // email: email || "",
            password: password || ""
            // campaign: campaign || ""
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string()
            .required("Username is required to login"),
        // email: Yup.string()
        //     .email("Not a valid email")
        //     .required("Email is required"),
        password: Yup.string()
            .required("Password is required to login")
        // campaign: Yup.mixed()
        //     .required("Choose a campaign")

    }),

    handleSubmit: (values, { setStatus }) => {
        Axios.post('https://reqres.in/api/users', values)
            .then((res) => {
                setStatus(res.data)
                console.log(res.data, "button was clicked");
            })
            .catch((error) => {
                console.log(error)
            })
    }
})(LoginForm);

export default FormikUserForm;