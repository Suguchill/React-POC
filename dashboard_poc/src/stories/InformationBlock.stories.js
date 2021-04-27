import React from 'react';
import { InformationBlock } from './InformationBlock';
import img1 from './assets/img1.jpg';

export default {
  title: 'components/InformationBlock',
  component: InformationBlock,
  argTypes: {
    color: { control: 'color' },
  },
};

const Template = (args) => <InformationBlock {...args} />;

export const InfoBlock = Template.bind({});
InfoBlock.args = {
    imgSrc:img1, 
    altText:'Image Here', 
    title:'Never Lose Hope', 
    ctaTitle:'Read Articles', 
    className:'btn btn-dark'
};
