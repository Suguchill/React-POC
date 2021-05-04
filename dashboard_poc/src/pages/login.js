import React , {useState} from "react";
import { Redirect } from 'react-router-dom';
import Button from "../components/atoms/Button/Button";
import Input from "../components/atoms/Input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

const Login = (props) => {
    const [uname, setUname] = useState('');
    const [password, setPassword] = useState('');
    const [formErrors, setFormErrors] = useState({
        emailErr: '',
        passErr: ''
    });
    const [fieldValidity, setFieldValidity] = useState({
        uname: false,
        password: false
    });
    const [formValid, setFormValid] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [success, setSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [loginErrMsg, setLoginErrMsg] = useState('');
    const [passwordShown, setPasswordShown] = useState(false);

    //Setting up the Login credentials in Local Storage.
    if (typeof (Storage) !== "undefined") {
        var creds = { 'admin': 'admin', 'positive': 'positive' };
        localStorage.setItem('creds', JSON.stringify(creds));
    }
    

    const togglePasswordVisiblity = () => {
        var passToggleFlag = true;
        if (passwordShown) {
            passToggleFlag = false
        }
        setPasswordShown(passToggleFlag);
    };

    const validateUname = (e) => {
        const uname = e.target.value;
        var localFormErrors = {
            ...formErrors
        }
        var localFieldValidity = {
            ...fieldValidity
        };

        setUname(e.target.value);
        if (uname !== "") {
            localFormErrors.emailErr = "";
            localFieldValidity.uname = true;
        }
        else {
            localFormErrors.emailErr = "*Required";
            localFieldValidity.uname = false;
        }
        setFieldValidity(localFieldValidity);
        setFormErrors(localFormErrors);
        setFormValid(fieldValidity.uname && fieldValidity.password)
    }

    const validatePassword = (e) => {
        const password = e.target.value;
        var localFormErrors = formErrors;
        var localFieldValidity = {
            ...fieldValidity
        };
        setPassword(e.target.value);
        if (password !== "") {
            localFormErrors.passErr = "";
            localFieldValidity.password = true;
        }
        else {
            localFormErrors.passErr = "*Required";
            localFieldValidity.password = false;
        }
        setFieldValidity(localFieldValidity)
        setFormErrors(localFormErrors);
        setFormValid(fieldValidity.uname && fieldValidity.password)
    }

    const login = (e) => {
        e.preventDefault();
        if (formValid) {
            //Fetching the valid creds stored in the Local Storage
            var retrievedObject = localStorage.getItem('creds');
            retrievedObject = JSON.parse(retrievedObject);

            if (retrievedObject[uname] !== undefined) {
                if (retrievedObject[uname] === password) {
                    setSuccess(true);
                    props.setLoginState(true);
                }
                else {
                    setLoginErrMsg("Login Failed..!");
                }
            }
            else {
                setLoginErrMsg("Login Failed..!");
            }
        }
    }

    var redirect = null;
    if (success) {
        redirect = <Redirect to="/DashboardPage" push />
    }
        return (
            <React.Fragment>
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
                                                <Input type="text" data-testid="userField" className="form-control login-input" onChange={validateUname} />
                                            </div>
                                            <div className="mb-2">
                                                <span className="text-danger">{formErrors.emailErr}</span>
                                            </div>
                                            <div className="form-group">
                                                <label>PASSWORD</label>
                                                <div className="password-wrapper">
                                                    <Input type={passwordShown ? "text" : "password"} data-testid="passField" className="form-control login-input" onChange={validatePassword} />
                                                    <i onClick={togglePasswordVisiblity}>{eye}</i>
                                                </div>
                                            </div>
                                            <div className="mb-2">
                                                <span className="text-danger">{formErrors.passErr}</span>
                                            </div>
                                            <div className="login-bottom-wrapper">
                                                <div className="mt-2 checkbox-label-wrapper"><Input type="checkbox" id="rememberCheck" label="Remember Me" />
                                                    {/* <label className="ml-2">Remember me</label>*/}
                                                </div>
                                                <div><Button className="btn" value="Forgot Password?" href="" /></div>
                                                {redirect}
                                            </div>
                                            <div className="mt-4">
                                                <Button className="btn btn-dark" id="submit" value="Login" disabled={!formValid} onClick={login} />
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
            </React.Fragment>
        )
    }
export default Login;