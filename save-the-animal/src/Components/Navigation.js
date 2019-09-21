import React from 'react';
import { Link } from 'react-router-dom'
const Navigation = () => {
  return (
    <div>
      <div className="navigation">
        
      <div>
        <Link to="/">Home</Link>
        </div>
        <div>
        <Link to="/Dasboard">DashBoard</Link>
        </div>
        <div>
        <Link to="/Donate">Donatate</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;