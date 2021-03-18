import styled from '@emotion/styled'

const TableRow = styled.tr`
  background-color: #6b7077;
`
const HeaderTable = styled.th`
  min-width: 150px;

`

const TableHeader = () => (
  <TableRow>
    <HeaderTable>Day</HeaderTable>
    <HeaderTable>Punch In</HeaderTable>
    <HeaderTable>Punch Out</HeaderTable>
    <HeaderTable>Hours Worked</HeaderTable>
  </TableRow>
);
export default TableHeader;

