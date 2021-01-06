import React from 'react';
import ReactDOM from 'react-dom';
import SkillsIcons from './SkillsIcons';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SkillsIcons />, div);
  ReactDOM.unmountComponentAtNode(div);
});