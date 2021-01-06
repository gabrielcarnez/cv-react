import React from 'react';
import ReactDOM from 'react-dom';
import UserAvatar from './UserAvatar';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserAvatar />, div);
  ReactDOM.unmountComponentAtNode(div);
});