import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from 'formik';
import * as yup from 'yup'

import './App.css';

function SignUp() {
  const [people, setPeople] = useState([])
  return (
   <Form>
     <Field type="text" name='person' placeholder="*Username" />
     <Field type="email" name='email' placeholder="*Email" />
     <Field type="text" name='person' placeholder="*Password" />
     <Field type="radial" placeholder="Terms of Service" />


   </Form>
  );
}

export default withFormik;
