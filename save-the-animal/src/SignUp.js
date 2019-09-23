import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from 'formik';
import styled from 'styled-components'
import * as yup from 'yup'
import axios from 'axios'
import './App.css';
import Navigation from './Components/Navigation'


const StyledField = styled(Field)`
padding: 10px;
margin: 15px auto;
`

function SignUp({status, touched, errors}) {
  console.log(status)
  const [people, setPeople] = useState([])

  useEffect(() => {
    if(status)
    setPeople(...people,status)
  },[people])
  return (
    <div><Navigation/>
   <Form>
     <h1>Sign Up</h1>
     {touched.username && errors.username && <p className="error"> {errors.username}</p>}
     <StyledField type="text" name='username' placeholder="*Username" />

     {touched.email && errors.email && <p className="error"> {errors.email}</p>}
     <StyledField type="email" name='email' placeholder="*Email" />

     {touched.password && errors.password && <p className="error"> {errors.password}</p>}
     <StyledField type="password" name='person' placeholder="*Password" />

     <label>
       
     <StyledField type="checkbox" name='Terms of Service' placeholder="Terms of Service" />
     <span>Term of Service</span>
     </label>
     <button type='button' disabled>Submit</button>

    

   </Form>
   </div>
  );
}

export default withFormik({
  mapPropsToValues: ({username, email, password, termsOfService }) => {
    return {
      name: username || '',
      email: email || '',
      password: password || '',
      termsOfService: termsOfService || false
    
    }
  },
  validationSchema: yup.object().shape({
    name: yup.string().required("Please enter Username"),
    email:yup.string()
    .email()
    .required("Please enter valid email"),
    password:yup.string()
    .required("Please enter password")
    .min('Password is too short-should be 8 characters minimum')
    .matches(/(?=.*[0-9])/),
    termsOfService: yup.bool().required()
  }),
      handleSubmit: (values, {setStatus}) => {
        axios.post('https://reqres.in/api/users',values)
        .then((res) => {
            setStatus(res.data)
            // console.log(res)
        })
        .catch(err => {
            console.log('Error', err.response)
        })
    }
  
})(SignUp);
