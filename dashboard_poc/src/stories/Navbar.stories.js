import React from 'react';
import Navbar from '../components/Navbar/Navbar';

export default {
  title: 'components/Navbar',
  component: Navbar,
  argTypes: {
    NavBackgroundColor: { control: 'color' },
    NavFontColor: {control: 'color'}
  },
};

const Template = (args) => <Navbar {...args} />;

export const NavbarDark = Template.bind({});
NavbarDark.args = {
  value1:"All",
  value2:"atricle",
  value3:"podcast",
  value4:"video",
  NavBackgroundColor:"black",
  NavFontColor:"white"
};

export const NavbarLight = Template.bind({});
NavbarLight.args = {
  value1:"All",
  value2:"atricle",
  value3:"podcast",
  value4:"video",
  NavBackgroundColor:"LightGrey",
  NavFontColor:"black"
};