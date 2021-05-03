import React from 'react';
import InformationBlock from '../components/InformationBlock/InformationBlock';
import img1 from './assets/img1.jpg';

export default {
  title: 'components/InformationBlock',
  component: InformationBlock,
  argTypes: {
    IbFontColor: { control: 'color' },
  },
};

const Template = (args) => <InformationBlock {...args} />;

export const InfoBlockDefault = Template.bind({});
InfoBlockDefault.args = {
    variant:"",
    imgSrc: img1,
    altText: "image alt text",
    title: "Your limitation it's only your imagination.",
    IbFontColor: "white"
};

export const InfoBlockBtn = Template.bind({});
InfoBlockBtn.args = {
    variant:"withCTA",
    imgSrc: img1,
    altText: "image alt text",
    title: "Stay Focused",
    ctaTitle: "Read Articles",
    className: "btn btn-dark",
    IbFontColor: "white"
};

export const InfoBlockPlayBtn = Template.bind({});
InfoBlockPlayBtn.args = {
    variant:"withPlayButton",
    imgSrc: img1,
    altText: "image alt text",
    title: "Things that go around will always come back",
    IbFontColor: "white"
};