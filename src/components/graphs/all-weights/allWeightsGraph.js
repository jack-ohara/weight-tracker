import React, { useState, useEffect } from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export const AllWeightsGraph = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const weights = JSON.parse(localStorage.getItem('weights') ?? {});

    const cleanedData = [];

    Object.entries(weights).forEach((entry) =>
      cleanedData.push({ date: entry[0], weight: entry[1] })
    );

    setData(cleanedData);
  }, []);

  return (
    <LineChart width={360} height={200} data={data}>
      <Line type="monotone" dataKey="weight" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="date" />
      <YAxis unit="Kg" type="number" domain={['dataMin - 2', 'dataMax + 2']} />
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
