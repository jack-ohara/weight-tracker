import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [date, setDate] = useState("");
  const [weightValue, setWeightValue] = useState(0.0);
  const [weightUnit, setWeightUnit] = useState(
    localStorage.getItem("weightUnit")
  );

  useEffect(() => {
    let weights = localStorage.getItem("weights");

    if (!weights) {
      localStorage.setItem("weights", JSON.stringify({}));
    }

    //setDate(getTodaysDate());
  }, []);

  // const getTodaysDate = () => {
  //   const date = new Date();

  //   return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  // };

  const onSubmit = (event) => {
    event.preventDefault();

    let kgValue = weightValue;

    if (weightUnit === "lb") {
      kgValue = weightValue / 2.20462;
    }

    const weights = JSON.parse(localStorage.getItem("weights"));
    weights[date] = kgValue;

    localStorage.setItem("weights", JSON.stringify(weights));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weight Tracker</h1>
      </header>
      <form className="weight-input" onSubmit={onSubmit}>
        <label htmlFor="weight">Input Weight:</label>
        <div className="inputs">
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <div className="weight-select">
            <input
              type="number"
              step="0.1"
              name="weight"
              id="weight"
              value={weightValue}
              onChange={(e) => {
                setWeightValue(e.target.value);
              }}
            />
            <select
              name="unit"
              id="unit"
              value={weightUnit}
              onChange={(e) => {
                setWeightUnit(e.target.value);
                localStorage.setItem("weightUnit", e.target.value);
              }}>
              <option value="kg">Kg</option>
              <option value="lb">lb</option>
            </select>
          </div>
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
