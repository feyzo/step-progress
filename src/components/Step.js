import React from 'react';
import styled from 'styled-components';
import Circle from './Circle';

const colors = {
  normal: '#d3d3d3',
  complete: '#3f00d2'
};

const StepContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 30px;
`;

const LastStepContainer = styled.div`
  align-items: center;
  padding-top: 30px;
`;

const Button = styled.a`
  position: relative;
  display: flex;
  color: ${(props) => props.complete ? colors.complete : colors.normal };
`;

const Label = styled.span`
  position: absolute;
  top: -30px;
  text-align: center;
  width: 80px;
  left: 50%;
  margin-left: -40px;
  font-weight: bold;
  color: inherit;
`;

const Line = styled.div`
  flex: 1;
  height: 5px;
  background-color: ${(props) => props.stroke};
  margin: 0 -2px;
`;

function Step({ name, complete, isNextComplete, isLast }) {
  const stroke = complete ? colors.complete : colors.normal;
  const lineStroke = isNextComplete ? colors.complete : colors.normal;

  if(!isLast) {
    return (
      <StepContainer>
        <Button href="/" complete={ true }>
          <Label>{name}</Label>
          <Circle stroke={ stroke } />
        </Button>
        <Line stroke={ lineStroke } />
      </StepContainer>
    );
  }

  return (
      <LastStepContainer>
        <Button href="/" complete={ false }>
          <Label>{name}</Label>
          <Circle stroke={ stroke } />
        </Button>
      </LastStepContainer>
    );
}

export default Step;

