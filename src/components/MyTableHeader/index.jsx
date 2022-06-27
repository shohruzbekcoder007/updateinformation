import React, { useEffect, useState, useMemo } from "react";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { TableHeaderTitle, TableHeaderTitlePopover } from "../styles";
import SearchInputComp from "../SearchInputComp";
import {
  getTableOrder,
  globalState,
  getSearchInputsObject,
} from "../../globalState";
import { observer } from "mobx-react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SelectSmall from "./../SelectSmall";
import HeaderSearchSelect from "../HeaderSearchSelect";

export default observer(function MyTableHeader() {
  const [filter, setFilter] = useState({});
  const [rows, setRows] = useState(getTableOrder());
  const searchFields = useMemo(() => {
    return getSearchInputsObject();
  }, [globalState.searchInputsQuestion]);

  useEffect(() => {
    setRows(getTableOrder());
  }, [globalState.tableOrder]);

  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <TableHeaderTitle style={{ display: "flex", alignItems: "center" }}>
            <NavigateNextIcon /> Group
          </TableHeaderTitle>
        </TableCell>
        <TableCell>
          <TableHeaderTitle>T/R</TableHeaderTitle>
        </TableCell>
        {rows.map((elem) => {
          if (elem.checked)
            return (
              <TableHeaderCell
                elem={elem}
                setFilter={setFilter}
                key={elem.content_table_id}
                searchField={searchFields[elem.text]}
              />
            );
        })}
      </TableRow>
    </TableHead>
  );
});

const TableHeaderCell = ({ elem, setFilter, searchField }) => {
  return (
    <TableCell className="table-header-cell">
      {elem.label.length > 10 ? (
        <TableHeaderTitle>{elem.label.slice(0, 10)}...</TableHeaderTitle>
      ) : (
        <TableHeaderTitle>{elem.label}</TableHeaderTitle>
      )}
      <TableHeaderTitlePopover className="table-header-cell-popover">
        {elem.label}
        {elem.select ? (
          <HeaderSearchSelect
            content_table_id={elem.content_table_id}
            selectedOption={elem.content_table_id}
            faild={elem.text}
          />
        ) : (
          <SearchInputComp
            setFilter={setFilter}
            faild={elem.text}
            searchField={searchField}
          />
        )}
      </TableHeaderTitlePopover>
    </TableCell>
  );
};
