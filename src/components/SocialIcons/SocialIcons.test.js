import React from 'react';
import ReactDOM from 'react-dom';
import SocialIcons from './SocialIcons';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SocialIcons />, div);
  ReactDOM.unmountComponentAtNode(div);
});