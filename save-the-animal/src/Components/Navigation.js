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
        <Link to="/dashboard">Dashboard</Link>
        </div>
        <div>
        <Link to="/donate">Donate</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;