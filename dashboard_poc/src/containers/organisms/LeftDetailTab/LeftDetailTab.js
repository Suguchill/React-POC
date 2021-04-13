import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AvatarImage from "../../atoms/AvatarImage/AvatarImage";
import HomeIcon from "../../../assets/Home.png";

const LeftDetailTab = (props) => 
{

    return (
        <React.Fragment>
            <div>
               <div className="container-fluid page-style">
                   <div className="row">
                       <div className="col-md-12" >
                            <div className="text-left">
                                <AvatarImage src={HomeIcon} alt="Image"/>
                            </div>
                       </div>
                   </div>
               </div>
            </div>
        </React.Fragment>
    )
}
export default LeftDetailTab;