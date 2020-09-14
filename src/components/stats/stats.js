import React from 'react';
import styled from 'styled-components';
import { LastSevenDays } from './last-seven-days/lastSevenDays';

const Container = styled.section`
  flex-grow: 1;
`;

export const Stats = () => {
  return (
    <Container>
      <LastSevenDays />
    </Container>
  );
};
