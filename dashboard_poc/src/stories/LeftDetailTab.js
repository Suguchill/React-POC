import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';
import { AvatarImage } from './AvatarImage';
import HomeIcon from './assets/Home.png';
import ProfileImg from './assets/Profile.png';
import './leftDetailTab.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const LeftDetailTab = ({}) => (
    <div className="container-fluid leftDetailTab_Style">
        <div className="row">
            <div className="col-md-12" >
                <div className="text-left">
                    <AvatarImage src={HomeIcon} alt="Image" className="img-fluid" width="17%"/>
                </div>
                <div className='mt-5 mb-5 profileStyle'>
                    <div className = "imageStyle">
                        <AvatarImage src={ProfileImg} alt="Profile Image" className="rounded-circle" width="100%"/>
                    </div>
                    <div className="profileDetail-wrapper">
                        <div className="profileNameStyle">John Doe</div>
                        <div className="profilemailStyle">johndoe@bt.com</div>
                    </div>
                </div>
                <div>
                    <ul className="list-group">
                        <li className="list-group-item font-weight-bold">Motivation</li>
                        <div className="list-wrapper">
                            <li className="list-group-item">Productivity<span className="badge badge-secondary ml-5">New Added</span></li>        
                        </div>
                        <li className="list-group-item">Design</li>
                        <li className="list-group-item">Study</li>
                    </ul> 
                </div>
                <div className="btnStyle">
                    <Button value="LogOut" href="/Login"></Button>
                </div>
            </div>
        </div>
    </div>
);

LeftDetailTab.propTypes = {
    
};

LeftDetailTab.defaultProps = {
 
};