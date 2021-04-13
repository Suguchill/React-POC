import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftDetailTab from "../containers/organisms/LeftDetailTab/LeftDetailTab";
import './component_Styles.css';

const DashboardPage = (props) => 
{
 
    return (
        <React.Fragment>
            <div>
               <div className="container-fluid page-style">
                   <div className="row">
                       <div className="col-md-4" >
                            <LeftDetailTab />
                       </div>
                       <div className="col-md-8" >
                            <p>dsfuyg ksdf uigdsfuybvf  ijsdbf tuygsf hoih  ad gtfuhisef iohras jstf iposf  Tsaduhj  feiouhd eas </p>
                       </div>
                   </div>
               </div>
            </div>
        </React.Fragment>
    )
}
function mapStateToProps({ employee }) {
    return {
      employee,
    }
}
  export default DashboardPage;