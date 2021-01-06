import React from 'react';
import ReactDOM from 'react-dom';
import ErrorMessage from './ErrorMessage';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ErrorMessage />, div);
  ReactDOM.unmountComponentAtNode(div);
});