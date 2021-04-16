import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import Navbar from "../Navbar/Navbar";
import '../container_Styles.css';
import InformationBlock from "../InformationBlock/InformationBlock";
const RightInfoTab = (props) => 
{
    var ibProps = [{
        imgSrc: img1,
        altText: "image alt text",
        title: "Your limitation it's only your imagination.",
    },
    {
        imgSrc: img2,
        altText: "image alt text",
        title: "Great things never come from comfort zones",
    },
    {
        imgSrc: img3,
        altText: "image alt text",
        title: "Dream it. Wish it. Do it",
    },
    {
        imgSrc: img4,
        altText: "image alt text",
        title: "Stay Focused",
        ctaTitle: "Read Articles",
        className: "btn btn-dark"
    },
    {
        imgSrc: img5,
        altText: "image alt text",
        title: "Information Block",
    },
    {
        variant: "",
        imgSrc: img6,
        altText: "image alt text",
        title: "Information Block",
    }
];
    return (
        <React.Fragment>
            <div className="container-fluid rightInfoTab_Style">
                <div className="row titleStyle">
                    Motivation
                </div>
                <div className="row">
                    <Navbar></Navbar>
                </div>
                <div className="row mt-2">
                        <div className="col-md-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <InformationBlock {...ibProps[0]} />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12">
                                        <InformationBlock {...ibProps[4]}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="container-Image-style">
                                <InformationBlock {...ibProps[1]} />
                                <InformationBlock {...ibProps[2]} />
                            </div>
                            <div className="container-Image-style mt-3">
                                <InformationBlock {...ibProps[3]} />
                            </div>
                            </div>
                        </div> 
            </div>
        </React.Fragment>
    )
}
export default RightInfoTab;