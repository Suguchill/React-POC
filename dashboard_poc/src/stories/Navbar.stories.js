import React from 'react';
import { Navbar } from './Navbar';

export default {
  title: 'components/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Navbar {...args} />;

export const Nav = Template.bind({});
Nav.args = {
  value1:"All",
  value2:"atricle",
  value3:"podcast",
  value4:"video",
  backgroundColor:"black"
};
