import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';
import img1 from './assets/img1.jpg';
import './informationBlock.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const InformationBlock = ({imgSrc, altText, title, ctaTitle, className, color}) => (
    <div className="information-wrapper">
        <img src={imgSrc} alt={altText} className="infoImageStyle"/>
        <div className="content-wrapper">
            <label style={color && { color }}>{title}</label>
            <div className="mt-3">
                {ctaTitle && <Button value={ctaTitle} className={className}></Button>}    
            </div>
        </div>
    </div>
);

InformationBlock.propTypes = {
    imgSrc:PropTypes.string,
    altText:PropTypes.string,
    title:PropTypes.string,
    ctaTitle:PropTypes.string,
    className: PropTypes.string,
    color: PropTypes.string,
};

InformationBlock.defaultProps = {
    imgSrc:img1,
    altText:"Image Here",
    title:"Title placement Sample",
    ctaTitle:"Button Here",
    className: "btn btn-dark",
    color: 'white'
};