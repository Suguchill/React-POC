import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router-dom';
import Button from "../containers/atoms/Button/Button";
import Input from "../containers/atoms/Input/Input";
import './component_Styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            uname: '',
            password: '',
            formErrors: {
                emailErr: '',
                passErr: ''
            },
            fieldValidity: {
                uname: false,
                password: false
            },
            formValid: false,
            submitted: false,
            success: false,
            successMessage: '',
            loginErrMsg: '',
            passwordShown: false
        };

        //Setting up the Login credentials in Local Storage.
        if (typeof (Storage) !== "undefined") {
            var creds = { 'admin': 'admin', 'positive': 'positive' };
            localStorage.setItem('creds', JSON.stringify(creds));
        }
    }

    togglePasswordVisiblity = () => {
        var passToggleFlag = true;
        if (this.state.passwordShown) {
            passToggleFlag = false
        }
        this.setState({ passwordShown: passToggleFlag });
    };

    validateUname = (e) => {
        const uname = e.target.value;
        var formErrors = this.state.formErrors;
        var fieldValidity = this.state.fieldValidity;
        this.setState({ uname: e.target.value });
        if (uname !== "") {
            formErrors.emailErr = "";
            fieldValidity.uname = true;
        }
        else {
            formErrors.emailErr = "*Required";
            fieldValidity.uname = false;
        }
        this.setState({ fieldValidity: fieldValidity })
        this.setState({ formValid: fieldValidity.uname && fieldValidity.password })
    }

    validatePassword = (e) => {
        const password = e.target.value;
        var formErrors = this.state.formErrors;
        var fieldValidity = this.state.fieldValidity;
        this.setState({ password: e.target.value });
        if (password !== "") {
            formErrors.passErr = "";
            fieldValidity.password = true;
        }
        else {
            formErrors.passErr = "*Required";
            fieldValidity.password = false;
        }
        this.setState({ fieldValidity: fieldValidity })
        this.setState({ formValid: fieldValidity.uname && fieldValidity.password })
    }

    login = (e) => {
        e.preventDefault();
        if (this.state.formValid) {
            //Fetching the valid creds stored in the Local Storage
            var retrievedObject = localStorage.getItem('creds');
            retrievedObject = JSON.parse(retrievedObject);

            if (retrievedObject[this.state.uname] !== undefined) {
                if (retrievedObject[this.state.uname] === this.state.password) {
                    console.log("Login Success");
                    this.setState({ success: true })
                }
                else {
                    console.log("Login Failed1");
                    this.setState({ loginErrMsg: "Login Failed..!" })
                }
            }
            else {
                console.log("Login Failed2");
                this.setState({ loginErrMsg: "Login Failed..!" })
            }
        }
    }

    render() {
        var redirect = null;
        if (this.state.success) {
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
                                                <Input type="text" className="form-control login-input" onChange={this.validateUname} />
                                            </div>
                                            <div className="mb-2">
                                                <span className="text-danger">{this.state.formErrors.emailErr}</span>
                                            </div>
                                            <div className="form-group">
                                                <label>PASSWORD</label>
                                                <div className="password-wrapper">
                                                    <Input type={this.state.passwordShown ? "text" : "password"} className="form-control login-input" onChange={this.validatePassword} />
                                                    <i onClick={this.togglePasswordVisiblity}>{eye}</i>
                                                </div>
                                            </div>
                                            <div className="mb-2">
                                                <span className="text-danger">{this.state.formErrors.passErr}</span>
                                            </div>
                                            <div className="login-bottom-wrapper">
                                                <div className="mt-2"><Input type="checkbox" id="rememberCheck" />
                                                    <label className="ml-2">Remember me</label></div>
                                                <div><Button className="btn" value="Forgot Password?" href="" /></div>
                                                {redirect}
                                            </div>
                                            <div className="mt-4">
                                                <Button className="btn btn-dark" value="Login" disabled={!this.state.formValid} onClick={this.login} />
                                            </div>
                                            <div className="mt-3">
                                                <span className="text-danger"><p>{this.state.loginErrMsg}</p></span>
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
}
export default Login;