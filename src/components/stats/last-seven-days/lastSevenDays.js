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

  const getDateSevenDaysAgo = () => {
    let date = new Date();

    date.setDate(date.getDate() - 7);

    return date;
  };

  useEffect(() => {
    const weights = GetWeights();

    let dateSevenDaysAgo = getDateSevenDaysAgo();

    const index = weights.findIndex(
      (e) => new Date(e.date) >= dateSevenDaysAgo
    );

    let deltaString;

    if (index !== -1) {
      const lastSevenDays = weights.slice(index).map((e) => e.weight);

      const deltaNumber = lastSevenDays.slice(-1)[0] - lastSevenDays[0];

      if (deltaNumber >= 0) {
        deltaString = `+${deltaNumber.toFixed(2)}Kg`;
        setIsNegative(false);
      } else {
        deltaString = `${deltaNumber.toFixed(2)}Kg`;
        setIsNegative(true);
      }
    } else {
      deltaString = '--';
      setIsNegative(false);
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
