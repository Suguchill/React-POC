import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from "./pages/login";
import DashboardPage from "./pages/dashboard";

const RouterComp = () => {
    return (
        <Router>
            <Route exact path="/" component={Login}/>
            <Route path = "/Login" component={Login}/>
            <Route path = "/DashboardPage" component={DashboardPage}/>
        </Router>
    )
};

export default RouterComp;