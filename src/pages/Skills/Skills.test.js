import React from 'react';
import ReactDOM from 'react-dom';
import Skills from './Skills';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Skills />, div);
  ReactDOM.unmountComponentAtNode(div);
});