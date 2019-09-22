import React from 'react';
import { NavLink } from 'react-router-dom'
const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb, 100) // fake async
    }}


const Navigation = () => {
  return (
    <div>
      <div className="navigation">
      <NavLink to="/signup">Sign Up</NavLink>
        <div>
        <NavLink to="/LogIn">Login</NavLink>
        </div>
        <div>
        <NavLink  to="/Dasboard">DashBoard</NavLink>
        </div>
        <div>
        <NavLink  to="/Donate">Donate</NavLink>
        </div>
        <div>
        <NavLink  to="/Chat">Send Us A Question</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;