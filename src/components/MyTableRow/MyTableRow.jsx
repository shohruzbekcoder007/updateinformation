import React, { Suspense } from "react"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import TableRow from "@mui/material/TableRow"
import { styled } from "@mui/material/styles"
import IconButton from "@mui/material/IconButton"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import { getTableOrder, globalState } from "../../globalState"
import { observer } from "mobx-react"
import CellRenderer from "../../CellRenderer"
import CustomizedTables from "../CustomizedTables"

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
      minWidth: 150,
      padding: "0 5px",
      lineHeight: 1
    },
  },
  "&:nth-of-type(even)": { 
    td: {
      minWidth: 150,
      padding: "0 5px",
      lineHeight: 1
    },
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default observer(function MyTableRow({ row }) {

  const [open, setOpen] = React.useState(false)
  const [order, setOrder] = React.useState(getTableOrder())
  
  React.useEffect(() => {
    setOrder(getTableOrder())
  },[globalState.tableOrder]);

  return (
    <>
      <StyledTableRow
        role="checkbox"
        key={row.id}
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
          "& > *": { borderBottom: "unset" },
        }}
      >
        <TableCell align="center">
          <div>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </div>
        </TableCell>
        {
          order.map((elem) => {
            if(elem.checked == true){
              return (
                <StyledTableCell key={elem.content_table_id}>
                  <CellRenderer content_table_id={elem.content_table_id} value={row[elem.text]}/>
                </StyledTableCell>
              )
            }
          })
        }
        
      </StyledTableRow>
      {
      open ? 
        <Suspense fallback={<div>Loading...</div>}>
          <CustomizedTables idPerson={row.id_person} />
        </Suspense> : 
        <></>
      }
    </>
  );
})
