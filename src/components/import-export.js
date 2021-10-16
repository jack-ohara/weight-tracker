import React, { useRef } from "react";
import styled from "styled-components";
import { GetWeights, SetWeights } from "../data-acccess/weightAccess";
import Button, { InputButton } from "./Button";

const Container = styled.div`
  display: flex;
  gap: 1em;
  margin-bottom: 1em;
`;

const StyledButton = styled(Button)`
  font-size: 1.1em;
`;

export function ImportExport() {
  const filePickerRef = useRef(null);

  function downloadData() {
    const data = GetWeights();

    const element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," +
        encodeURIComponent(JSON.stringify(data, null, 2))
    );
    element.setAttribute("download", "weight-tracker-data.json");

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  function importData() {
    const file = filePickerRef.current.files[0];

    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (event) => {
      const weights = JSON.parse(event.target.result);

      SetWeights(weights);

      window.location.reload();
    };
  }

  function openFilepicker() {
    filePickerRef.current.click();
  }

  return (
    <Container>
      <StyledButton onClick={() => openFilepicker()}>Import</StyledButton>
      <StyledButton onClick={() => downloadData()}>Export</StyledButton>
      <input
        type="file"
        ref={filePickerRef}
        onChange={() => importData()}
        style={{ display: "none" }}
      />
    </Container>
  );
}
