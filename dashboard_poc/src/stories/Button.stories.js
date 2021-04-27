import React from 'react';
import { Button } from './Button';

export default {
  title: 'components/atoms/Button',
  component: Button,
  argTypes: {
    color: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  className:"btn btn-primary",
  value:"button-primary"
};

export const Secondary = Template.bind({});
Secondary.args = {
  className:"btn btn-secondary",
  value:"button-secondary"
};

export const Dark = Template.bind({});
Dark.args = {
  className:"btn btn-dark",
  value:"button-dark"
};

export const Anchor = Template.bind({});
Anchor.args = {
  className:"",
  href:"#",
  value:"anchor"
};
