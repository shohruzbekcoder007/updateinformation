import React, { useEffect, useState } from "react";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { TableHeaderTitle, TableHeaderTitlePopover } from "../styles";
import SearchInputComp from "../SearchInputComp";
import { getTableOrder, globalState } from "../../globalState";
import { observer } from "mobx-react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default observer(function MyTableHeader() {

  const [filter, setFilter] = useState({})
  const [rows, setRows] = useState(getTableOrder())

  useEffect(() => {
    setRows(getTableOrder());
  }, [globalState.tableOrder]);


  return (
    <TableHead>
      <TableRow>
        <TableCell><TableHeaderTitle style={{ display: 'flex', alignItems: 'center'}}><NavigateNextIcon/> Group</TableHeaderTitle></TableCell>
        {rows.map(elem => {
          if(elem.checked)
            return (
                <TableHeaderCell elem={elem} setFilter={setFilter} key={elem.content_table_id}/>
            );
        })}
        
      </TableRow>
    </TableHead>
  );
});


const TableHeaderCell = ({elem, setFilter}) => {
  return (
    <TableCell className="table-header-cell">
      {
        (elem.label.length > 10)?
        <TableHeaderTitle>{elem.label.slice(0,10)}...</TableHeaderTitle>:
        <TableHeaderTitle>{elem.label}</TableHeaderTitle>
      }
      <TableHeaderTitlePopover className="table-header-cell-popover">
        {elem.label}
        <SearchInputComp setFilter={setFilter} faild={elem.text}/>
      </TableHeaderTitlePopover>
    </TableCell>
);
}