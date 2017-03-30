import React from 'react';
import styled from 'styled-components';
import Step from './Step';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

function StepProgress(props) {
  const { steps } = props;
  const stepCount = steps.length;

  return (
    <Container>{
      steps.map((s, i) => {
        const next = steps[i + 1];

        return (
          <Step
            name={ s.name }
            complete={ s.complete }
            isLast={ i === stepCount - 1 }
            isNextComplete={ next && next.complete }
            key={ s.name }
          />)
        })
    }</Container>
  );
}

export default StepProgress;

