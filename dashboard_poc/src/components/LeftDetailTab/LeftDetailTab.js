import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AvatarImage from "../atoms/AvatarImage/AvatarImage";
import HomeIcon from "../../assets/Home.png";
import ProfileImg from "../../assets/Profile.png";
import '../container_Styles.css';

const LeftDetailTab = (props) => 
{

    return (
        <React.Fragment>           
        <div className="container-fluid leftDetailTab_Style">
            <div className="row">
                <div className="col-md-12" >
                    <div className="text-left">
                        <AvatarImage src={HomeIcon} alt="Image" className="img-fluid" width="17%"/>
                    </div>
                    <div className='mt-5 profileStyle'>
                        <div className = "imageStyle">
                            <AvatarImage src={ProfileImg} alt="Profile Image" className="rounded-circle" width="100%"/>
                        </div>
                        <div className="profileDetail-wrapper">
                            <div className="profileNameStyle">John Doe</div>
                            <div className="profilemailStyle">johndoe@bt.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}
export default LeftDetailTab;