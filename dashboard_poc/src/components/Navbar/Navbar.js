import React from "react";
import Button from "../atoms/Button/Button";

const Navbar = (props) => {
    let color = props.NavFontColor;
    let backgroundColor = props.NavBackgroundColor;
    return (
        <React.Fragment>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
                    <div className="container-fluid">
                        <ul className="navbar-nav" style={props.NavBackgroundColor && { backgroundColor }}>
                            <li className="nav-item">
                                <Button className="nav-link active" aria-current="page" href="#" style={props.NavFontColor && { color }} value={props.value1}></Button>
                            </li>
                            <li className="nav-item">
                                <Button className="nav-link" value={props.value2} style={props.NavFontColor && { color }} href="#"></Button>
                            </li>
                            <li className="nav-item">
                                <Button className="nav-link" href="#" style={props.NavFontColor && { color }} value={props.value3}></Button>
                            </li>
                            <li className="nav-item">
                                <Button className="nav-link" href="#" style={props.NavFontColor && { color }} value={props.value4} ></Button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    )
}

Navbar.defaultProps = {
    value1:"All",
    value2:"article",
    value3:"video",
    value4:"podcast",
};

export default Navbar;