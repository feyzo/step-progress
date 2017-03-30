import React from 'react';
import renderer from 'react-test-renderer';

import Circle from './Circle';

test('Renders a circle', () => {
  const component = renderer.create(
    <Circle
      stroke={10}
    />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});