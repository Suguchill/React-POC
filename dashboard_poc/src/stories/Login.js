import React from 'react';
import PropTypes from 'prop-types';
import './login.css';
import Input from '../components/atoms/Input/Input';
import Button from '../components/atoms/Button/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

export const Login = ({value1, value2, emailErr, passErr, passwordShown, formValid, loginErrMsg, boxShadowColor}) => {
    return(
    <div className="bgColorSet">
    <div className="container"><br />
        <div className="row justify-content-center">
            <div className="col-md-5 col-sm-12 col-12 login-wrapper">
                <div className="card login_card">
                    <div className="card-body">
                        <h4 className="text-left">ACCOUNT LOGIN</h4>
                        <form className="mt-4">
                            <div className="form-group">
                                <label>USERNAME</label>
                                <Input type="text" className="form-control login-input" style={{boxShadow: boxShadowColor?"0px 1px 9px -3px "+boxShadowColor:'none'}} value={value1}/>
                            </div>
                            {emailErr &&
                                <div className="mb-2">
                                    <span className="text-danger">{emailErr}</span>
                                </div>
                            }
                            <div className="form-group">
                                <label>PASSWORD</label>
                                <div className="password-wrapper">
                                    <Input type={passwordShown ? "text" : "password"} className="form-control login-input" style={{boxShadow: boxShadowColor?"0px 1px 9px -3px "+boxShadowColor:'none'}} value={value2}/>
                                    <i>{eye}</i>
                                </div>
                            </div>
                            {passErr &&
                                <div className="mb-2">
                                    <span className="text-danger">{passErr}</span>
                                </div>
                            }
                            <div className="login-bottom-wrapper">
                                <div className="rememberMe-wrapper"><Input type="checkbox" id="rememberCheck" />
                                    <label className="ml-2">Remember me</label>
                                </div>
                                <div><Button className="" value="Forgot Password?" color="black" href="#" /></div>
                            </div>
                            <div className="mt-4">
                                <Button className="btn btn-dark" value="Login" disabled={!formValid} />
                            </div>
                            <div className="mt-3">
                                <span className="text-danger"><p>{loginErrMsg}</p></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
)
};

Login.propTypes = {
    value1:PropTypes.string,
    value2:PropTypes.string,
    emailErr: PropTypes.string,
    passErr: PropTypes.string,
    passwordShown: PropTypes.bool,
    formValid: PropTypes.bool,
    loginErrMsg: PropTypes.string,
    boxShadowColor: PropTypes.string
};

Login.defaultProps = {
    value1:"username",
    value2:"password",
    emailErr: "",
    passErr: "",
    passwordShown: false,
    formValid: false,
    loginErrMsg: "",
    boxShadowColor: ""
};