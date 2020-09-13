import React, { useState, useEffect } from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { cleanData } from '../../weight-input-form/weightInputForm';

export const AllWeightsGraph = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const weights = JSON.parse(localStorage.getItem('weights')) ?? {};

    const cleanedData = cleanData(weights);

    setData(cleanedData);
  }, []);

  const minWeightLimit =
    Math.round(Math.min(...data.map((e) => parseFloat(e['weight'])))) - 3;

  const getDataMin = (dataMin) => {
    return Math.round(dataMin) - 1;
  };

  const getDataMax = (dataMax) => {
    return Math.round(dataMax) + 1;
  };

  return (
    <LineChart width={360} height={200} data={data}>
      <Line type="monotone" dataKey="weight" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="date" />
      <YAxis unit="Kg" type="number" domain={[getDataMin, getDataMax]} />
      <Tooltip
        formatter={(value, name, _props) => {
          const formattedValue = `${value}Kg`;
          const formattedName = `${name[0].toUpperCase()}${name.slice(1)}`;
          return [formattedValue, formattedName];
        }}
      />
    </LineChart>
  );
};
