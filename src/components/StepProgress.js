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
      steps.map((step, i) => {
        const { name, complete, enabled } = step;
        const next = steps[i + 1];
        const showLine = i !== stepCount - 1;

        return (
          <Step
            name={ name }
            complete={ complete }
            showLine={ showLine }
            enabled={ enabled }
            completeLine={ next && next.complete }
            key={ name }
            onClick={onStepChange.bind(null, step)}
          />)
        })
    }</Container>
  );
}

export default StepProgress;

