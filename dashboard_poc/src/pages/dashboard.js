import React from "react";
import LeftDetailTab from "../components/LeftDetailTab/LeftDetailTab";
import RightInfoTab from "../components/RightInfoTab/RightInfoTab";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

const DashboardPage = (props) => 
{
    var propsToPass = {
        "ibProps" : [{
            variant:"",
            imgSrc: img1,
            altText: "image alt text",
            title: "Your limitation it's only your imagination.",
        },
        {
            variant:"",
            imgSrc: img2,
            altText: "image alt text",
            title: "Great things never come from comfort zones",
        },
        {
            variant:"",
            imgSrc: img3,
            altText: "image alt text",
            title: "Dream it. Wish it. Do it",
        },
        {
            variant:"withCTA",
            imgSrc: img4,
            altText: "image alt text",
            title: "Stay Focused",
            ctaTitle: "Read Articles",
            className: "btn btn-dark"
        },
        {
            variant:"withPlayButton",
            imgSrc: img5,
            altText: "image alt text",
            title: "Things that go around will always come back",
        },
        {
            variant: "",
            imgSrc: img6,
            altText: "image alt text",
            title: "Information Block",
        }
        ],
        "navProps" : {
            value1:"All",
            value2:"article",
            value3:"video",
            value4:"podcast",
            NavBackgroundColor: "black",
            NavFontColor:"white"
        }
    }
    return (
        <React.Fragment>
            <div className="container-fluid page-style">
                <div className="row containerPositionStyle">
                    <div className="col-md-3" >
                        <LeftDetailTab />
                    </div>
                    <div className="col-md-9 rightTabPositionStyle" >
                        <RightInfoTab {...propsToPass}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
  export default DashboardPage;