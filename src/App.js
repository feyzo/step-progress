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

    this.state = {
      steps: [{
        name: 'Design',
        complete: false
      }, {
        name: 'Build',
        complete: false
      }, {
        name: 'Launch',
        complete: false
      }]
    };
  }

  render() {
    return (
      <AppContainer>
        <StepProgress steps={ this.state.steps }/>
      </AppContainer>
    );
  }
}

export default App;
