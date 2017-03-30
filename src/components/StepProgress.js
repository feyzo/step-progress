import React from 'react';
import styled from 'styled-components';
import Step from './Step';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

function StepProgress(props) {
  const { steps, onStepChange } = props;
  const stepCount = steps.length;

  return (
    <Container>{
      steps.map((s, i) => {
        const next = steps[i + 1];

        return (
          <Step
            name={ s.name }
            complete={ s.complete }
            showLine={ i !== stepCount - 1 }
            completeLine={ next && next.complete }
            key={ s.name }
            onClick={onStepChange.bind(null, s)}
          />)
        })
    }</Container>
  );
}

export default StepProgress;

