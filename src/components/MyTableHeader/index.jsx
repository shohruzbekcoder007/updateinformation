import React, { useEffect, useState } from "react";
import TableHead from "@mui/material/TableHead";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { TableHeaderTitle } from "../styles";
import SearchInputComp from "../SearchInputComp";
import { getTableOrder, globalState } from "../../globalState";
import { observer } from "mobx-react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
    td: {
      minWidth: 220,
    },
  },
  "&:nth-of-type(even)": {
    td: {
      minWidth: 220,
    },
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default observer(function MyTableHeader() {

  const [filter, setFilter] = useState({})
  const [rows, setRows] = useState(getTableOrder())

  useEffect(() => {
    setRows(getTableOrder());
  }, [globalState.tableOrder]);


  return (
    <TableHead>
      <StyledTableRow>
        <StyledTableCell>Group</StyledTableCell>
        {rows.map(elem => {
          return (
            <StyledTableCell key={elem.content_table_id}>
              <TableHeaderTitle>{elem.name_savol}</TableHeaderTitle>
              <SearchInputComp setFilter={setFilter} faild={elem.text}/>
            </StyledTableCell>
          );
        })}
      </StyledTableRow>
    </TableHead>
  );
});
