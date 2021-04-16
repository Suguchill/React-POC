import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "../atoms/Button/Button";
import '../container_Styles.css';
import { Link } from "react-router-dom";

const InformationBlock = (props) => {
    return (
        <div className="information-wrapper">
            <img src={props.imgSrc} alt={props.altText} className="infoImageStyle"/>
            <div className="content-wrapper">
                <label>{props.title}</label>
                <div className="mt-3">
                    {props.ctaTitle && <Button value={props.ctaTitle} className={props.className}></Button>}    
                </div>
            </div>
        </div>
    );
}



export default InformationBlock;