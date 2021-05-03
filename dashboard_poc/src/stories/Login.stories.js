import React from 'react';
import Login from './Login';

export default {
  title: 'components/Login',
  component: Login,
  argTypes: {
    boxShadowColor: {control: 'color'}
  },
};

const Template = (args) => <Login {...args} />;

export const FormValid = Template.bind({});
FormValid.args = {
    value1:"username",
    value2:"password",
    emailErr: "",
    passErr: "",
    passwordShown: false,
    formValid: true,
    loginErrMsg: ""
};

export const UsernameError = Template.bind({});
UsernameError.args = {
    value1:"",
    value2:"password",
    emailErr: "*Field Required",
    passErr: "",
    passwordShown: false,
    formValid: false,
    loginErrMsg: ""
};

export const PasswordError = Template.bind({});
PasswordError.args = {
    value1:"username",
    value2:"",
    emailErr: "",
    passErr: "*Field Required",
    passwordShown: false,
    formValid: false,
    loginErrMsg: ""
};

export const PasswordVisible = Template.bind({});
PasswordVisible.args = {
    value1:"username",
    value2:"password",
    emailErr: "",
    passErr: "",
    passwordShown: true,
    formValid: true,
    loginErrMsg: ""
};

export const PasswwordHidden = Template.bind({});
PasswwordHidden.args = {
    value1:"username",
    value2:"password",
    emailErr: "",
    passErr: "",
    passwordShown: false,
    formValid: true,
    loginErrMsg: ""
};

export const LoginFail = Template.bind({});
LoginFail.args = {
    value1:"username",
    value2:"wrong-password",
    emailErr: "",
    passErr: "",
    passwordShown: true,
    formValid: true,
    loginErrMsg: "Invalid Login Credentials....Try Again"
};

export const ShadowColor = Template.bind({});
ShadowColor.args = {
    value1:"username",
    value2:"password",
    emailErr: "",
    passErr: "",
    passwordShown: false,
    formValid: true,
    loginErrMsg: "",
    boxShadowColor: "red"   
};
