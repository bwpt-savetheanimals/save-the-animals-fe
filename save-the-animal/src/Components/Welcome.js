import React from 'react';
import ReactDOM from "react-dom";
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom'

function WelcomePage() {
    return (
        <div>
            <h1>Save The Animals!</h1>
            <Link to="/signup">Sign up</Link>
            <Link to="login">Log In</Link>
        </div>
    )
}

export default WelcomePage;