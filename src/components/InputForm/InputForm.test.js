import React from 'react';
import ReactDOM from 'react-dom';
import InputForm from './InputForm';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InputForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});