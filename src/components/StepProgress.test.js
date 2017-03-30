import React from 'react';
import renderer from 'react-test-renderer';
import StepProgress from './StepProgress';

jest.mock('./Step', () => 'Step');

const steps = [{
  name: 'step 1',
  complete: true
}, {
  name: 'step 2',
  complete: true
}, {
  name: 'step 3',
  complete: false
}]

test('Renders three steps', () => {
  const component = renderer.create(
    <StepProgress
      steps={ steps }
      onStepChange={ jest.fn() }
    />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});