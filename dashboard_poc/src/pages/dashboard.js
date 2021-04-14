import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftDetailTab from "../components/LeftDetailTab/LeftDetailTab";
import RightInfoTab from "../components/RightInfoTab/RightInfoTab";
import './component_Styles.css';

const DashboardPage = (props) => 
{
 
    return (
        <React.Fragment>
            <div className="container-fluid page-style">
                <div className="row">
                    <div className="col-md-3" >
                        <LeftDetailTab />
                    </div>
                    <div className="col-md-9" >
                        <RightInfoTab />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
  export default DashboardPage;