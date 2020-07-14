import React from 'react';
import { withInfo } from '@storybook/addon-info';

import UserListItem from './UserListItem.js';


export default { 
  title: 'UserListItem',
  decorators: [withInfo]
};

export const Default = () => (
  <UserListItem 
    avatar="https://picsum.photos/400"
    name="Hello World"
    email="abc@expamble.com"
    phone="0123123123"
  />
);

