import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";



function DonationForm(errors,touched) {
  return (
    <div><h1>Save The Animals</h1>
    <Form>
         {touched.username && errors.username && <p>{errors.username}</p>}
      <Field type="text" name="username" placeholder="Username" />
      {touched.donation && errors.donation && <p>{errors.donation}</p>}
      <Field type="number" name="donation" placeholder="donation" />
      {touched.campaign && errors.campaign && <p>{errors.campaign}</p>}
      <Field type="text" name="campaign" placeholder="campaign" />
      
      
      <button>Submit!</button>

    </Form></div>
  );
}
const FormikDonationForm = withFormik({

    mapPropsToValues({ username, donation, campaign }) {
      return {
        username: username || "",
        donation: donation || "",
        campaign: campaign || "",
       
    };
},
validationSchema: Yup.object().shape({
    username: Yup.string()
    
      .required("User Name Required!!!"),
    donation: Yup.number()
    
    .required("Please Submit A Dollar Amount"),
      campaign: Yup.string()
    
      .required("Please pick a Campaign")
  }),


handleSubmit(values) {
    console.log(values)
    //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
  }
  
    })(DonationForm);


export default FormikDonationForm;