import React from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import styled from 'styled-components';
import { GetWeights } from '../../../data-acccess/weightAccess';

const GraphContainer = styled.section``;

const ToolTipContainer = styled.div`
  background: #c6c6c67d;
  padding: 0.1em 0.2em;
  border-radius: 3px;
  color: black;
`;

export const AllWeightsGraph = () => {
  const getDataMin = (dataMin) => {
    return Math.floor(dataMin);
  };

  const getDataMax = (dataMax) => {
    return Math.ceil(dataMax);
  };

  return (
    <GraphContainer>
      <LineChart width={360} height={200} data={GetWeights()}>
        <Line type="monotone" dataKey="weight" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="date" />
        <YAxis unit="Kg" type="number" domain={[getDataMin, getDataMax]} />
        <Tooltip content={<CustomTooltip />} />
      </LineChart>
    </GraphContainer>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && label && payload) {
    let date = label;

    if (label) {
      const dateData = label.split('-');
      date = `${dateData[2]}/${dateData[1]}/${dateData[0]}`;
    }

    return (
      <ToolTipContainer>
        <p className="label">{`${date}: ${payload[0].value}Kg`}</p>
      </ToolTipContainer>
    );
  }

  return null;
};
