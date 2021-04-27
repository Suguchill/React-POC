import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from './Navbar';
import {InformationBlock} from './InformationBlock';
import './rightInfoTab.css';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

export const RightInfoTab = ({value1, value2, value3, value4, color, backgroundColor, img1, img2, img3, img4, img5, title1, title2, title3, title4, title5, fontColor}) => (
    <div className="container-fluid rightInfoTab_Style">
    <div className="row titleStyle">
        Motivation
    </div>
    <div className="row navBgSet">
        <Navbar value1={value1} value2={value2} value3={value3} value4={value4} color={color} backgroundColor={backgroundColor}></Navbar>
    </div>
    <div className="row mt-2">
            <div className="col-md-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <InformationBlock  imgSrc={img1}  altText='Image Here'  title={title1}  ctaTitle='' className='' color={fontColor}/>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <InformationBlock imgSrc={img2}  altText='Image Here'  title={title2}  ctaTitle='' className='' color={fontColor}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-7">
                <div className="container-Image-style">
                    <InformationBlock imgSrc={img3}  altText='Image Here'  title={title3}  ctaTitle='Read Articles' className='btn btn-dark' color={fontColor}/>
                    <InformationBlock imgSrc={img4}  altText='Image Here'  title={title4}  ctaTitle='' className='' color={fontColor}/>
                </div>
                <div className="container-Image-style mt-3">
                    <InformationBlock imgSrc={img5}  altText='Image Here'  title={title5}  ctaTitle='Read Articles' className='btn btn-dark' color={fontColor}/>
                </div>
                </div>
            </div> 
    </div>
);

RightInfoTab.propTypes = {
    value1:PropTypes.string,
    value2:PropTypes.string,
    value3:PropTypes.string,
    value4:PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    img1: PropTypes.string,
    img2: PropTypes.string,
    img3: PropTypes.string,
    img4: PropTypes.string,
    img5: PropTypes.string,
    title1: PropTypes.string,
    title2: PropTypes.string,
    title3: PropTypes.string,
    title4: PropTypes.string,
    title5: PropTypes.string,
    fontColor: PropTypes.string
};

RightInfoTab.defaultProps = {
    value1:"All",
    value2:"article",
    value3:"video",
    value4:"podcast",
    backgroundColor: "black",
    color:"white",
    img1:img1,
    img2:img2,
    img3:img3,
    img4:img4,
    img5:img5,
    title1:"Title1",
    title2:"Title2",
    title3:"Title3",
    title4:"Title4",
    title5:"Title5",
    fontColor:"white"
};