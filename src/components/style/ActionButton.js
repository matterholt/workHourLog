import styled from "@emotion/styled";

export const ActionButton = styled.button`
  background-color: #bebebe;
  min-width: 130px;
  font-size: 1rem;
  padding: 2px;
  border: none;
  margin: 5px;

  transition: background 250ms ease-in-out;
  &:hover {
    background: #445666;
    color: #fff;
    font-weight: bold;
    box-shadow: 5px 6px 9px gray;
  }
  &:active {
    transform: scale(0.99);
    box-shadow: 5px 6px 9px gray;
  }
`;
