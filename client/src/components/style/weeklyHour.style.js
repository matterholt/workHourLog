/** @jsx jsx */
import { css, jsx } from "@emotion/core";


const activeInput = css`
  background-color: #434a52;
  cursor: pointer;
  color: #c4c7c9;
  font-weight: 600;
`;

const hourInput = css`
  display: flex;
  justify-content: center;
  width: min-content;
  flex-flow: column;
  align-items: center;
`;
const hourInput__container = css`
  display: grid;
  grid-template-rows: 100px;
  grid-template-columns: repeat(4, 150px);
  align-items: center;
`;
const hourInput__day = css`
  font-size: 20px;
`;
export { activeInput,hourInput, hourInput__container, hourInput__day };
