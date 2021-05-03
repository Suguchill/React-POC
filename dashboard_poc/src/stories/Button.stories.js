import React from 'react';
import Button from '../components/atoms/Button/Button';

export default {
  title: 'components/atoms/Button',
  component: Button,
  argTypes: {
    color: { control: 'color' },
  },
};

// export const accessible = () => <button>Accessible button</button>;

// export const inaccessible = () => (
//   <button style={{backgroundcolor: 'red', color:'darkRed'}}>Inaccessible button</button>
// )

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