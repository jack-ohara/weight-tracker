import React from 'react';
import styled from 'styled-components';
import { AllWeightsGraph } from './all-weights/allWeightsGraph';

const Container = styled.div`
  flex-grow: 1;
`;

export const Graphs = () => {
  return (
    <Container>
      <AllWeightsGraph />
    </Container>
  );
};
