import React from 'react';
import { Link } from 'react-router-dom'
const Navigation = () => {
  return (
    <div>
      <div className="navigation">
        <h1>Save The Animals</h1>
        <div>
        <Link to="/"> Home</Link>
        </div>
        <div>
        <Link to="/SignUp">Sign Up</Link>
        </div>
        <div>
        <Link to="/LogIn">Login</Link>
        </div>
        <div>
        <Link to="/DonateForm">Donate</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;