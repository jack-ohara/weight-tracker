import React, { useState, useEffect } from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import styled from 'styled-components';
import { cleanData } from '../../weight-input-form/weightInputForm';

export const AllWeightsGraph = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const weights = JSON.parse(localStorage.getItem('weights')) ?? {};

    const cleanedData = cleanData(weights);

    const sortedDate = cleanedData.sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );

    setData(sortedDate);
  }, []);

  const minWeightLimit =
    Math.round(Math.min(...data.map((e) => parseFloat(e['weight'])))) - 3;

  const getDataMin = (dataMin) => {
    return Math.floor(dataMin);
  };

  const getDataMax = (dataMax) => {
    return Math.ceil(dataMax);
  };

  const renderTooltip = (payloadData) => {
    return payloadData;
  };

  return (
    <LineChart width={360} height={200} data={data}>
      <Line type="monotone" dataKey="weight" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="date" />
      <YAxis unit="Kg" type="number" domain={[getDataMin, getDataMax]} />
      <Tooltip content={<CustomTooltip />} />
    </LineChart>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  const Container = styled.div`
    background: #c6c6c67d;
    padding: 0.1em 0.2em;
    border-radius: 3px;
    color: black;
  `;

  if (active) {
    const dateData = label.split('-');
    const date = `${dateData[2]}/${dateData[1]}/${dateData[0]}`;

    return (
      <Container>
        <p className="label">{`${date}: ${payload[0].value}Kg`}</p>
      </Container>
    );
  }

  return null;
};
