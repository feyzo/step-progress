import React, { Component } from 'react';
import styled from 'styled-components';
import StepProgress from './components/StepProgress';

const initialSteps = [{
  name: 'Design',
  complete: false
}, {
  name: 'Build',
  complete: false
}, {
  name: 'Launch',
  complete: false
}];

const AppContainer = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20%;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.onStepChange = this.onStepChange.bind(this);
    this.processSteps = this.processSteps.bind(this);

    this.state = {
      steps: this.processSteps(initialSteps)
    };
  }

  processSteps(steps) {
    const lastCompleteStepIndex = steps
      .map(step => step.complete)
      .lastIndexOf(true);

    return steps
      .map((step, index) => {
        const enabled = (
          // If no steps are selected
          (lastCompleteStepIndex === -1 && index === 0) ||
          // Enable last complete step
          index === lastCompleteStepIndex ||
          // Enable next step from last complete step
          index === lastCompleteStepIndex + 1
        );

        return {
          ...step,
          enabled
        }
      });
  }

  onStepChange(changedStep) {
    const steps = this.state.steps
      .map(step => {
        if (step === changedStep) {
          step.complete = !changedStep.complete;
        }

        return step;
      });

    this.setState({
      steps: this.processSteps(steps)
    });
  }

  render() {
    return (
      <AppContainer>
        <StepProgress
          steps={ this.state.steps }
          onStepChange={ this.onStepChange }
        />
      </AppContainer>
    );
  }
}

export default App;
