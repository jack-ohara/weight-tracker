import styled, { css } from "styled-components";

const sharedStyled = css`
  font-size: 0.75em;
  margin-top: 0.5em;
  border-radius: 4px;
  text-decoration: none;
  background-color: #eee;
  color: #222;
  border: 0;
  padding: 0.4rem;
  transition: background-color 100ms ease-in-out;

  &:hover,
  &:focus {
    background-color: #bbb;
  }
`;

const Button = styled.button`
  ${sharedStyled}
`;

export const InputButton = styled.input`
  ${sharedStyled}
  -webkit-appearance: button;
`;

export default Button;
