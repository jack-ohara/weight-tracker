import React, { useState } from 'react';
import styled from 'styled-components';

const InputForm = styled.form`
  flex-grow: 1;
  font-size: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled.label`
  text-align: left;
`;

const InputArea = styled.div`
  text-align: left;
`;

const WeightSelectArea = styled.div`
  display: flex;
  flex-direction: row;
`;

const DateInput = styled.input`
  font-size: 0.75em;
  border-radius: 3px;
  border: 1px solid black;
  margin-bottom: 0.5em;
  padding: 0.3em 0.1em;
`;

const NumberInput = styled.input`
  font-size: 0.75em;
  border-radius: 3px;
  border: 1px solid black;
  margin-right: 0.5em;
`;

const SubmitButton = styled.input`
  font-size: 0.75em;
  margin-top: 0.5em;
`;

export const cleanData = (currnetData) => {
  if (Array.isArray(currnetData)) {
    return currnetData;
  }

  return Object.entries(currnetData).map((entry) => {
    return { date: entry[0], weight: entry[1] };
  });
};

export const WeightInputForm = () => {
  const [date, setDate] = useState('');
  const [weightValue, setWeightValue] = useState();

  const onSubmit = (event) => {
    event.preventDefault();

    const weights = JSON.parse(localStorage.getItem('weights')) ?? {};

    const cleanedData = cleanData(weights);

    cleanedData.push({ date: date, weight: weightValue });

    localStorage.setItem('weights', JSON.stringify(cleanedData));

    alert('Submitted!');
  };

  return (
    <InputForm onSubmit={onSubmit}>
      <Label htmlFor="weight">Input Weight:</Label>
      <InputArea>
        <DateInput
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <WeightSelectArea>
          <NumberInput
            type="number"
            step="0.1"
            name="weight"
            id="weight"
            value={weightValue}
            onChange={(e) => {
              setWeightValue(e.target.value);
            }}
          />
          Kg
        </WeightSelectArea>
      </InputArea>

      <SubmitButton type="Submit" value="Submit" />
    </InputForm>
  );
};
