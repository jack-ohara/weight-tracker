import React, { useState } from "react";
import styled from "styled-components";
import { AddNewWeight } from "../../data-acccess/weightAccess";

const InputForm = styled.form`
  flex-grow: 5;
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
  -webkit-appearance: button;
  font-size: 0.75em;
  margin-top: 0.5em;
  border-radius: 4px;
  text-decoration: none;
  background: #eee;
  border: 0;
  padding: 0.4rem;
  transition: background 100ms ease-in-out;

  &:hover,
  &:focus {
    background: #bbb;
  }
`;

export const WeightInputForm = () => {
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10));
  const [weight, setWeight] = useState();

  const onSubmit = (event) => {
    event.preventDefault();

    AddNewWeight(date, weight);
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
          max={new Date().toISOString().substr(0, 10)}
          onChange={(e) => setDate(e.target.value)}
        />
        <WeightSelectArea>
          <NumberInput
            type="number"
            step="0.1"
            name="weight"
            id="weight"
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
            }}
          />
          Kg
        </WeightSelectArea>
      </InputArea>

      <SubmitButton type="Submit" value="Submit" readOnly />
    </InputForm>
  );
};
