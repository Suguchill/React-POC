import React from 'react';

import { Page } from './Page';
import * as NavbarStories from './Navbar.stories';

export default {
  title: 'components/Page',
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...NavbarStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...NavbarStories.LoggedOut.args,
};
