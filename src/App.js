import React, { Component } from 'react';
import styled from 'styled-components';
import StepProgress from './components/StepProgress';

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

    this.state = {
      steps: [{
        name: 'Design',
        complete: true
      }, {
        name: 'Build',
        complete: true
      }, {
        name: 'Launch',
        complete: false
      }]
    };
  }

  onStepChange(step) {
    console.log(step);
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
