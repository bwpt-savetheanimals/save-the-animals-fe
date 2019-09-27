import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import Navigation from './Navigation'
import styled from 'styled-components';

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

function DonationForm(errors, touched) {
  return (
    <div>
      <Navigation />
      <div className="loginForm">

        <Form>
          {touched.username && errors.username && <p>{errors.username}</p>}
          <StyledField type="text" name="username" placeholder="Username" />
          {touched.donation && errors.donation && <p>{errors.donation}</p>}
          <StyledField type="number" name="donation" placeholder="donation" />
          {touched.campaign && errors.campaign && <p>{errors.campaign}</p>}
          <StyledField type="text" name="campaign" placeholder="campaign" />
          <StyledField type="text" name="cardNumber" placeholder="Card Number" />
          {touched.cardNumber && errors.cardNumber && <p>{errors.cardNumber}</p>}
          <StyledField type="date" name="expiryDate" placeholder="Expiration Date" />
          {touched.expiryDate && errors.expiryDate && <p>{errors.expiryDate}</p>}
          <StyledField type="text" name="CVC/CVV" placeholder="CVC/CVV Number" />
          {touched.cvc && errors.cvc && <p>{errors.cvc}</p>}

          <StyledButton type="submit" onClick={() => alert('Thank You For Your Donation')}>
            Donate!
          </StyledButton>

        </Form>
      </div>
    </div>
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

})(DonationForm);

    
export default FormikDonationForm;