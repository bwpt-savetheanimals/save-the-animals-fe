import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UserLogin from './User';
import Navigation from './Navigation'



function Dashboard() {
    // const [ username, setUser ] = useState([])


    // useEffect(() => {
      
    //     Axios
    //         .get('https://swapi.co/api/people/')
    //         .then((res) => {
    //             setUser(res.data.results);
    //             console.log(res.data)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         });
    

  
    // }, []);

    return (
        <div>
        <Navigation/>
        <div className="App">
         
            {/* {username.map((user) => 
                <UserLogin key={user.id} users={user.id}/> )} */}

{/*                   
      {username.map((name) =>
        <UserLogin name={name.name} key={name.name} />)} */}
          
           <Route path='/dashboard' component={UserLogin}></Route>
           <button>Donate Here</button>
           <Link to='donate' type='submit'>Donate</Link>
            
        </div>
        </div>
    );
}


export default Dashboard;