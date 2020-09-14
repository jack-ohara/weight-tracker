import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GetWeights } from '../../../data-acccess/weightAccess';

const Container = styled.div`
  text-align: left;
`;

const DeltaValue = styled.span`
  color: ${(props) => (props.isNegative ? 'green' : 'red')};
`;

export const LastSevenDays = () => {
  const [sevenDayDelta, setSevenDaysDelta] = useState('0Kg');
  const [isNegative, setIsNegative] = useState(true);

  useEffect(() => {
    const weights = GetWeights();

    const lastSevenDays = weights
      .slice(weights.length - 7)
      .map((e) => e.weight);

    const deltaNumber = lastSevenDays[6] - lastSevenDays[0];

    let deltaString;

    if (deltaNumber > 0) {
      deltaString = `+${deltaNumber.toFixed(2)}Kg`;
      setIsNegative(false);
    } else if (deltaNumber === 0.0) {
      deltaString = '--';
      setIsNegative(false);
    } else {
      deltaString = `${deltaNumber.toFixed(2)}Kg`;
      setIsNegative(true);
    }

    setSevenDaysDelta(deltaString);
  }, []);

  return (
    <Container>
      Last Seven Days:{' '}
      <DeltaValue isNegative={isNegative}>{sevenDayDelta}</DeltaValue>
    </Container>
  );
};
