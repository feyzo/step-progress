import React from 'react';
import styled from 'styled-components';
import Circle from './Circle';

const colors = {
  normal: '#d3d3d3',
  complete: '#3f00d2'
};

const StepContainer = styled.div`
  flex: ${(props) => props.showLine ? 1 : 0 };
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 30px;
`;

const Button = styled.button`
  position: relative;
  display: flex;
  color: ${(props) => props.color };
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  outline: 0;
  cursor: pointer;
`;

const Label = styled.span`
  position: absolute;
  top: -30px;
  text-align: center;
  width: 80px;
  left: 50%;
  margin-left: -40px;
  font-weight: bold;
  font-size: 16px;
  color: ${(props) => props.color};
`;

const Line = styled.div`
  flex: 1;
  height: 5px;
  background-color: ${(props) => props.stroke};
  margin: 0 -2px;
`;

function Step({ name, complete, showLine, completeLine, onClick }) {
  const stroke = complete ? colors.complete : colors.normal;
  const lineStroke = completeLine ? colors.complete : colors.normal;

  return (
    <StepContainer showLine={showLine}>
      <Button color={stroke} onClick={onClick} type="button">
        <Label color={stroke}>{name}</Label>
        <Circle stroke={ stroke } />
      </Button>
      { showLine && (<Line stroke={ lineStroke } />)}
    </StepContainer>
  );
}

export default Step;

