import React from 'react';
import ReactDOM from 'react-dom';
import EducationCard from './EducationCard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EducationCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});