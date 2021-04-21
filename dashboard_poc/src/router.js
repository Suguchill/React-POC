import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from "./pages/login";
import DashboardPage from "./pages/dashboard";

const RouterComp = () => {
    const [isLoggedIn, setLoginState] = useState(false);
    console.log('Here'+isLoggedIn);
    return (
        <Router>
            <Route exact path="/" render={props => <Login setLoginState={setLoginState}/>}/>
            <Route path = "/Login" render={props => <Login setLoginState={setLoginState}/>}/>
            <Route exact path="/DashboardPage" render={props => (isLoggedIn?<DashboardPage/>:<Login setLoginState={setLoginState}/>)}/>
        </Router>
    )
};

export default RouterComp;