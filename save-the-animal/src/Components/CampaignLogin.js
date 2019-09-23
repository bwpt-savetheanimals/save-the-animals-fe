import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import Axios from "axios";
import styled from 'styled-components';
import { Link, Route, NavLink } from 'react-router-dom'
import Navigation from './Navigation'
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

const StyleButton = styled(NavLink)`
width: 77px;
background-color: #C2E1C2;
border-color: #F7F7F2;
border-radius: 10px;
`


function CampaignLoginForm({ errors, touched, status }) {
    const [user, setUser] = useState([])
    useEffect(() => {
        if (status) {
            setUser([...user, status])
        }
    }, [status])
    return (
<div>
        <Navigation/>

        <div className="campaignloginForm">
            {/* All Data can be changed  */}
            <Form>
                <h1>Login to Your Campaign</h1>
                <div>
                    {touched.username && errors.username && <p className="error"> {errors.username}</p>}
                    <StyledField type="text" name="username" placeholder="Username" />
                </div>

                <div>
                    {touched.password && errors.password && <p className="error"> {errors.password}</p>}
                    <StyledField type="password" name="password" placeholder="Password" />
                </div>


                <StyledButton type="submit">Submit</StyledButton>

                {/* <Route path='/dashboard' component={CampaignDashboard}>Submit</Route>
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

const CampaignFormikForm = withFormik({

    mapPropsToValues({ username, password }) {
        return {
            username: username || "",
            password: password || ""
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
    handleSubmit: (values, { props, setStatus }) => {
        props.history.push('/CampaignDashboard');
        Axios.post('https://reqres.in/api/CampaignForm', values)
            .then((res) => {
                setStatus(res.data)
                console.log(res.data, "button was clicked");
            })
            .catch((error) => {
                console.log(error)
            })


    }
})(CampaignLoginForm);

export default CampaignFormikForm;