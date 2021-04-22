import React from 'react';
import { Input } from './Input';

export default {
  title: 'components/atoms/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
    type:"text",
    className:"",
    placeholder:"Enter your username",
    value:"",
    onChange:()=>{}
};

export const Password = Template.bind({});
Password.args = {
    type:"password",
    className:"",
    placeholder:"Enter your password",
    value:"",
    onChange:()=>{}
};

export const Checkbox = Template.bind({});
Checkbox.args = {
    type:"checkbox",
    className:"",
    onChange:()=>{},
    label:"Remember Me"
};

