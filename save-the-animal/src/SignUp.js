import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from 'formik';
import * as yup from 'yup'
import './App.css';

function SignUp({status}) {
  console.log(status)
  const [people, setPeople] = useState([])

  useEffect(() => {
    setPeople(...people,status)
  },[])
  return (
   <Form>
     <Field type="text" name='person' placeholder="*Username" />

     <Field type="email" name='email' placeholder="*Email" />
     <Field type="text" name='person' placeholder="*Password" />
     <label>
     <Field type="radial" name='Terms of Service' placeholder="Terms of Service" />
     <span>Term of Service</span>
     </label>
     <button>Submit</button>

    

   </Form>
  );
}

export default withFormik({
  mapPropsToValues: (values) => {
    return {
      name: values.name || '',
      email: values.email || '',
      password: values.password || '',
      termsOfService: values.termsOfService || false
    
    }
  },
  validationSchema: yup.object().shape({
    name: yup.string().required("Please enter Username"),
    email:yup.string().required("Please enter valid email"),
    password:yup.string().required("Please enter password"),
    termsOfService: yup.bool().required()
  })
})(SignUp);
