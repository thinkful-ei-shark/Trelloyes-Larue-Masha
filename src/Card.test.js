import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Card from './Card.js';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Card />, div);
  ReactDOM.unmountComponentAtNode(div);
})

it('renders as expected', () => {
  const tree = renderer
    .create(<Card 
      title="this is title" 
      content="this is content" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});