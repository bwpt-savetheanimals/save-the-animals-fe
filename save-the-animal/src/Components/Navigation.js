import React from 'react';
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'




const Navigation = () => {
return (
  <div>
     
    <div className="navbar">

        <NavLink to ="/">Home</NavLink>
    <NavLink to="/Signup">Sign Up</NavLink>
      
      <NavLink to="/LogIn">Login</NavLink>
     
      <NavLink to="/CampaignLogin">CampaignLogin</NavLink>
      
      
     
      <Link to="/dashboard">Dashboard</Link>
     
      
      <NavLink  to="/Donate">Donate</NavLink>
      
     
      <NavLink  to="/Chat">Send Us A Question</NavLink>
     
    </div>
  </div>
);
};

export default Navigation;