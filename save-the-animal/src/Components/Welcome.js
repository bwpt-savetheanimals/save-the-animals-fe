import React from 'react';
import ReactDOM from "react-dom";
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom'
import Navigation from './Navigation'

function WelcomePage() {
    return (
        <div>
        <h1>Save The Animals!!!</h1>
         <Navigation/>
            <h3><Link to="/signup">Sign up</Link> Here.</h3>
            <h3>Already have an account? <Link to="login">Login</Link> here</h3>
        </div>
    )
}

export default WelcomePage;