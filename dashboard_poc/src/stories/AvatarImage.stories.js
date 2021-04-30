import React from 'react';
import AvatarImage from '../components/atoms/AvatarImage/AvatarImage';
import ProfileImg from './assets/Profile.png';

export default {
  title: 'components/atoms/AvatarImage',
  component: AvatarImage,
};

const Template = (args) => <AvatarImage {...args} />;

export const Profile = Template.bind({});
Profile.args = {
    src: ProfileImg,
    className:"rounded-circle",
    alt:'Image'
};