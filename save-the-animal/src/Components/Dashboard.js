import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import UserLogin from './User';


function Dashboard() {
    const [ username, setUser ] = useState([])

    useEffect(() => {
        Axios
            .get(`https://reqres.in/api/users/${username}`)
            .then((res) => {
                  {username.map((users) => (
                    <div key={users.id}>
                        <div>Name: {users.username}</div>
                        
                        </div>

                ))}
                setUser(res.data.username);
                console.log(res.data.username)
            })
            .catch((error) => {
                console.log(error)
            });
    }, []);
    return (
        <div>
           <Route path='/dashboard' component={UserLogin}></Route>
        </div>
    )
}

export default Dashboard;