import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import Axios from "axios";
import CampaignHolder from "./Campaign.axios";


function CampaignForm({ errors, touched, status }) {
  const [cForm, setCForm] = useState([])
  useEffect(() => {
    if (status) {
      setCForm([...cForm, status])
    }
  }, [status])

  return (
    <div>
      <Form>
  
        <div>
          <Field type="text" name="campaign" placehold="campaign" /> <br />
          <Field type="date" name="deadline" placehold="deadline" />
        </div>
        <div> </div>

        <button type="submit">Submit</button>
        {cForm.map((users) => (
          <div key={users.id}>
            <div>Campaign: {users.campaign}</div>
            <div>Deadline: {users.deadline}</div>
          </div>
        ))}
        <CampaignHolder />
      </Form>
   
    </div>
  );
}

const FormikCampaign = withFormik({

  mapPropsToValues({ campaign, deadline }) {
    return {
      username: campaign || "",
      password: deadline || ""
    };
  },
  validationSchema: Yup.object().shape({
    campaign: Yup.string()
      .required("Username is required to login"),
    // deadline: Yup.string()
    //     .required("Password is required to login")
  }),
  handleSubmit: (values, { props, setStatus }) => {
    props.history.push('/campaign');
    Axios.get('', values)
      .then((res) => {
        setStatus(res)
        console.log(res, "button was clicked");
      })
      .catch((error) => {
        console.log(error)
      })


  }
})(CampaignForm);

export default FormikCampaign;