import React from 'react';
import ReactDOM from 'react-dom';
import ExperienceCard from './ExperienceCard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ExperienceCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});