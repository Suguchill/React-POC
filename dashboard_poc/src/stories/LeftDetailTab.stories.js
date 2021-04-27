import React from 'react';
import { LeftDetailTab } from './LeftDetailTab';
import img1 from './assets/img1.jpg';

export default {
  title: 'components/LeftDetailTab',
  component: LeftDetailTab,
  argTypes: {
    color: { control: 'color' },
  },
};

const Template = (args) => <LeftDetailTab {...args} />;

export const LeftTab = Template.bind({});
LeftTab.args = {
    imgSrc:img1, 
    altText:'Image Here', 
    title:'Never Lose Hope', 
    ctaTitle:'Read Articles', 
    className:'btn btn-dark'
};
