import React from 'react';

function Circle({ stroke, strokeWidth = 5, radius = 10 }) {
  const center = radius + (strokeWidth / 2);
  const width = (radius * 2) + strokeWidth;

  return (
    <svg width={ width } height={ width }>
      <circle
        cx={center}
        cy={center}
        r={radius}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill="none"
      />
    </svg>
  );
}

export default Circle;
