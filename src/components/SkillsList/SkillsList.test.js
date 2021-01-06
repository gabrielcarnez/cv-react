import React from 'react';
import ReactDOM from 'react-dom';
import SkillsList from './SkillsList';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SkillsList />, div);
  ReactDOM.unmountComponentAtNode(div);
});