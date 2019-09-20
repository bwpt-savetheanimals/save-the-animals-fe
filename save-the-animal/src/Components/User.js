import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function UserLogin(props) {
    return (
        <div>
           <Link to="dashboard"> </Link>
           <h1>Welcome {props.username}</h1>
        </div>
    );
}

export default UserLogin;