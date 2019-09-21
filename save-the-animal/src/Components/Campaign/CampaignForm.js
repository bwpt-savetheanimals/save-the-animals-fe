import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import Axios from "axios";
import styled from 'styled-components';
import { Link, Route, NavLink } from 'react-router-dom'
import UserLogin from "../User";

// function CampaignForm(props) {
//   const [form, setForm] = useState({
//     name: '',
//     location: '',
//   })

//   const handleChange = event => {
//     setForm({
//       ...form,
//       [event.target.name]: event.target.value
//     });
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     props.setTeamList([...props.teamList, form])
//     props.history.push('/campaign')
//     resetForm();
//   } 

//   const resetForm = () => {
//     setForm({
//       name: '',
//       location: ''
//     })
//   }

//   return (
//     <div className="team-form">
//       <form onSubmit={event => handleSubmit(event)}>
//         <h1>Add Campaign</h1>
//         <label>
//           <input type="text" name="name" value={form.name} placeholder="Name..." onChange={event => handleChange(event)} />
//         </label>
//         <label>
//           <input type="text" name="location" value={form.location} placeholder="Location..." onChange={event => handleChange(event)} />
//         </label>
//         <button className="formButton">Submit</button>
//       </form>
//     </div>
//   )
// }

// export default CampaignForm;

function CampaignForm ({errors, touched, status}) {
    const[cForm, setCForm] = useState([])
     useEffect(() => {
       if (status) {
        setCForm([...cForm, status])
       }
     }, [status])
     return (
       <div>
         <Form>
           <h1>Campaigns</h1>
           <div>
           <Field type="text" name="campaign" placehold="campaign" /> 
           <Field type="date" name="deadline" placehold="deadline" /> 
           </div>
           
           <button type="submit">Submit</button>
             {cForm.map((users) => (
                    <div key={users.id}>
                        <div>Campaign: {users.campaign}</div>
                        <div>Deadline: {users.deadline}</div>
                    </div>
             ))} 
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
        Axios.post('https://reqres.in/api/users', values)
            .then((res) => {
                setStatus(res.data)
                console.log(res.data, "button was clicked");
            })
            .catch((error) => {
                console.log(error)
            })


    }
})(CampaignForm);

export default FormikCampaign;