import React from 'react';
import styled from 'styled-components';

const CircleSVG = styled.circle`
  fill: #FFF;
`;

function Circle({ stroke, strokeWidth = 5, radius = 10 }) {
  const center = radius + (strokeWidth / 2);
  const width = (radius * 2) + strokeWidth;

  return (
    <svg width={ width } height={ width }>
      <CircleSVG
        cx={center}
        cy={center}
        r={radius}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export default Circle;
