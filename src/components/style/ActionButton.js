import styled from "@emotion/styled";

export const ActionButton = styled.button`
  background-color: gray;
  min-width: 130px;
  font-size: 1rem;
  padding: 2px;
  border: none;
  transition: background 250ms ease-in-out;
  &:hover {
    background: #445666;
    color: #fff;
    font-weight: bold;
  }
  &:active {
    transform: scale(0.99);
  }
`;
