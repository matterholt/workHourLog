/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";


const TableRow = css`
  background-color: #6b7077;
`

const TableHeader = () => (
  <thead>
  <tr css={TableRow}>
    <th>Day</th>
    <th>Punch In</th>
    <th>Punch Out</th>
    <th>Hours Worked</th>
  </tr>
    </thead>
);
export default TableHeader;

