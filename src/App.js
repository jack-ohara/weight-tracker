import React, { useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import { Graphs } from "./components/graphs/graphs";
import { ImportExport } from "./components/import-export";
import { Stats } from "./components/stats/stats";
import { WeightInputForm } from "./components/weight-input-form/weightInputForm";

const Container = styled.div`
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #282c34;
  color: white;
`;

const AppHeader = styled.header`
  font-size: calc(10px + 2vmin);
`;

const App = () => {
  return (
    <Container>
      <AppHeader className="App-header">
        <h1>Jack's Weight Tracker</h1>
      </AppHeader>

      <WeightInputForm />

      <Graphs />
      <Stats />

      <ImportExport />
    </Container>
  );
};

export default App;
