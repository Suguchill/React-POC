import React from "react";
import Navbar from "../Navbar/Navbar";
import InformationBlock from "../InformationBlock/InformationBlock";

const RightInfoTab = (props) => 
{
    var ibProps = props['ibProps'];
    var NavProps =  props['navProps'];

    return (
        <React.Fragment>
            <div className="container-fluid rightInfoTab_Style">
                <div className="row titleStyle">
                    Motivation
                </div>
                <div className="row">
                    <Navbar {...NavProps}></Navbar>
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