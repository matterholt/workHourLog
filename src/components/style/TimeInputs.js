/** @jsx jsx */
import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";

const bounce = keyframes`
  from {
    opacity: 0;
  }

  to{
  opacity: 1;
  }
`;

const TimeInputs = styled.p`
  border: solid;
  padding: 5px;
  font-size: 1rem;
  min-width: 100px;
  text-align: center;
  animation: ${bounce} 1s ease;
`;

export default TimeInputs;
