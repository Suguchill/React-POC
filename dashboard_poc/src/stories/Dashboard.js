import React from 'react';
import PropTypes from 'prop-types';
import {LeftDetailTab} from './LeftDetailTab';
import {RightInfoTab} from './RightInfoTab';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import './dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Dashboard = ({value1, value2, value3, value4, color, backgroundColor, img1, img2, img3, img4, img5, title1, title2, title3, title4, title5, fontColor}) => (
    <div className="container-fluid page-style">
    <div className="row containerPositionStyle">
        <div className="col-md-3" >
            <LeftDetailTab />
        </div>
        <div className="col-md-9 rightTabPositionStyle" >
            <RightInfoTab value1={value1} value2={value2} value3={value3} value4={value4} color={color} backgroundColor={backgroundColor} img1={img1} img2={img2} img3={img3} img4={img4} img5={img5} title1={title1} title2={title2} title3={title3} title4={title4} title5={title5} fontColor={fontColor}/>
        </div>
    </div>
</div>
);

Dashboard.propTypes = {
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

Dashboard.defaultProps = {
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