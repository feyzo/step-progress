import React from 'react';
import renderer from 'react-test-renderer';

import Step from './Step';

jest.mock('./Circle', () => 'Circle');

test('Renders a step with circle', () => {
  const component = renderer.create(
    <Step
      name={ 'test' }
      complete={ 'true' }
      showLine={ true }
      enabled={ true }
      completeLine={ false }
      key={ 'test' }
      onClick={ jest.fn() }
    />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});