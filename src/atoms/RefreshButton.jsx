import React from "react";
import { HiRefresh } from "react-icons/hi";
import styled from "styled-components";

function RefreshButton(props) {
  return (
    <ButtonContainer onlyVeggie={props.onlyVeggie}>
      <button onClick={props.handleClick}>
        <HiRefresh />
      </button>
    </ButtonContainer>
  );
}
const ButtonContainer = styled.div`
  button {
    background: none;
    border: none;
    padding-top: 1rem;
    margin-left: 1rem;
    font-size: 3rem;
    transition: 0.3s;
    color: ${(props) => (props.onlyVeggie ? "var(--green)" : "var(--gray)")};
    &:hover {
      cursor: pointer;
      transform: scale(1.2);
    }
  }
  @media (max-width: 768px) {
    button {
      font-size: 2rem;
      padding-top: 0.5rem;
    }
  }
`;

export default RefreshButton;
