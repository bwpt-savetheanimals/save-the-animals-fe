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
      <Field type="text" name="cardNumber" placeholder="Card Number" />
      {touched.cardNumber && errors.cardNumber  && <p>{errors.cardNumber}</p>}
      <Field type="date" name="expiryDate" placeholder="Expiration Date" />
      {touched.expiryDate && errors.expiryDate  && <p>{errors.expiryDate}</p>}
      <Field type="text" name="CVC/CVV" placeholder="CVC/CVV Number" />
      {touched.cvc && errors.cvc  && <p>{errors.cvc}</p>}

      <button class="button-credit-card" onClick="submitCreditCardClick(event)">Donate!</button>

    </Form></div>
  );
}
const FormikDonationForm = withFormik({

    mapPropsToValues({ username, donation, campaign, cardNumber,expiryDate,cvc }) {
      return {
        username: username || "",
        donation: donation || "",
        campaign: campaign || "",
        cardNumber: cardNumber || "",
        expiryDate: expiryDate || "",
        cvc: cvc|| "",
    };
},
validationSchema: Yup.object().shape({
    username: Yup.string()
    
      .required("User Name Required!!!"),
    donation: Yup.number()
    
    .required("Please Submit A Dollar Amount"),
      campaign: Yup.string()
    
      .required("Please pick a Campaign"),

      cardNumber: Yup.string()
      .min (16)
      .required("Please Enter Valid Card Number"),

      expiryDate: Yup.date()
      
      .required("Please Enter Valid Date"),

      cvc : Yup.string()
      .min (3)
      .required("Please Enter Valid CVC/CVV Number"),


  }),


handleSubmit(values) {
    console.log(values)
    //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
  }
  
    })(DonationForm);

export default FormikDonationForm;