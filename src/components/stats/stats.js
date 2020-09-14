import React from 'react';
import styled from 'styled-components';
import { LastSevenDays } from './last-seven-days/lastSevenDays';

const Container = styled.section``;

export const Stats = () => {
  return (
    <Container>
      <LastSevenDays />
    </Container>
  );
};
