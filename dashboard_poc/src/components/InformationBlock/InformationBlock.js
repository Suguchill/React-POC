import React, { useState, useEffect } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "../atoms/Button/Button";
// import '../container_Styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
const play = <FontAwesomeIcon icon={faPlay} />;


// const InformationBlock = (props) => {
//     return (
//         <div className="information-wrapper">
//             <img src={props.imgSrc} alt={props.altText} className="infoImageStyle"/>
//             <div className="content-wrapper">
//                 <label>{props.title}</label>
//                 <div className="mt-3">
//                     {props.ctaTitle && <Button value={props.ctaTitle} className={props.className}></Button>}    
//                 </div>
//             </div>
//         </div>
//     );
// }

const InformationBlock = (props) => {
    return (
        <div className="information-wrapper">
            <img src={props.imgSrc} alt={props.altText} className="infoImageStyle"/>
            <div className="content-wrapper">
                <IBVariantsFactory {...props}/>
            </div>
        </div>
    );
}

const IBVariantsFactory = (props) => {
    switch (props.variant) {
        case "withPlayButton": return (
            <IBWithPlayButton {...props} />
        )
        case "withCTA": return (
            <IBWithCTA {...props} />
        )
        default: return (
            <DefaultIB {...props} />
        )
    }
}

const DefaultIB = (props) => {
    return (
        <label>{props.title}</label>
    );
} 

const IBWithPlayButton = (props) => {
    return(
        <>
            <label>{props.title}</label>
            <div className="mt-3">
                <Button href="#" className="fa fa-2x" value={play}></Button>
            </div>
        </>
    );
}

const IBWithCTA = (props) => {
    return (
        <div>
        <label>{props.title}</label>
        <div className="mt-3">
            <Button value={props.ctaTitle} className={props.className}></Button>
        </div>
        </div>
    );
}

export default InformationBlock;