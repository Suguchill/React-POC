import React from 'react';
import { Dashboard } from './Dashboard';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';

export default {
  title: 'components/Dashboard',
  component: Dashboard,
  argTypes: {
    color: { control: 'color' },
    fontColor: {control: 'color'}
  },
};

const Template = (args) => <Dashboard {...args} />;

export const DashboardPage = Template.bind({});
DashboardPage.args = {
    value1:"All",
    value2:"atricle",
    value3:"podcast",
    value4:"video",
    backgroundColor:"black",
    img1: img1,
    img2: img2,
    img3: img3,
    img4: img4,
    img5: img5,
    title1: "Your limitation it's only your imagination.",
    title2: "Great things never come from comfort zones",
    title3: "Dream it. Wish it. Do it",
    title4: "Stay Focused",
    title5: "Things that go around will always come back",
    fontColor: "white"
};
