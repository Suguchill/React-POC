import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "../atoms/Button/Button";
import '../container_Styles.css';

const Navbar = (props) => {
    return (
        <React.Fragment>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
                    <div className="container-fluid">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Button className="nav-link active" aria-current="page" href="#" value="All"></Button>
                            </li>
                            <li className="nav-item">
                                <Button className="nav-link" value="atricle" href="#"></Button>
                            </li>
                            <li className="nav-item">
                                <Button className="nav-link" href="#" value="podcast"></Button>
                            </li>
                            <li className="nav-item">
                                <Button className="nav-link" href="#" value="video" ></Button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    )
}
export default Navbar;