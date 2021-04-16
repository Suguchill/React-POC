import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "../atoms/Button/Button";
import '../container_Styles.css';

const Navbar = (props) => {
    return (
        <React.Fragment>
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
                    <div class="container-fluid">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Button class="nav-link active" aria-current="page" href="#" value="All"></Button>
                            </li>
                            <li class="nav-item">
                                <Button class="nav-link" value="atricle" href="#"></Button>
                            </li>
                            <li class="nav-item">
                                <Button class="nav-link" href="#" value="podcast"></Button>
                            </li>
                            <li class="nav-item">
                                <Button class="nav-link" href="#" value="video" ></Button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    )
}
export default Navbar;