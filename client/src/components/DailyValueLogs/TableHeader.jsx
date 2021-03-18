/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";

const tableHead = css`
  background-color: #6b7077;
  min-width: 150px;
`;

const TableHeader = () => (
  <tr>
    <th css={tableHead}>Day</th>
    <th css={tableHead}>Punch In</th>
    <th css={tableHead}>Punch Out</th>
    <th css={tableHead}>Hours Worked</th>
  </tr>
);
export default TableHeader;
