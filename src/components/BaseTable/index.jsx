import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TablePagination from "@mui/material/TablePagination";
import axios from "../../baseUrl";
import { MyTableContainer } from "../styles";
import MyTableHeader from "../MyTableHeader";
import MyTableRow from "../MyTableRow/MyTableRow";
import { observer } from "mobx-react";
import { globalState } from '../../globalState';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default observer(function BaseTable() {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(100);
  const [rows, setRows] = React.useState([]);
  const [pageCount, setPageCount] = React.useState(0);
  const [deleted, setDeleted] = React.useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  React.useEffect(() => {
    axios
      .get(`/v1/?length=${rowsPerPage}&start=${page * rowsPerPage}` + globalState.searchInputsQuestion, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setRows(response.data.results);
        setPageCount(response.data.count);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [rowsPerPage, page, globalState.searchInputsQuestion]);

  React.useEffect(() => {
    setDeleted(globalState.deletedRowId)
  },[globalState.deletedRowId]);

  return (
    <div sx={{ width: "100%", overflow: "hidden" }}>
      
      <MyTableContainer>
        
        <Table stickyHeader aria-label="sticky table" size="small">
          <MyTableHeader/>
          {/* {Object.keys(rows).length === 0 ? (
            <Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={true}
            >
              <CircularProgress color="inherit" /> //loadingpopover
            </Backdrop>
          ) : ( */} 
            <TableBody>
              {rows.map((row) => {
                if(deleted != row.id)
                  return <MyTableRow row={row} key={row.id} />
              })}
            </TableBody>
          {/* )} */}
        </Table>
      </MyTableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={pageCount}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  )
})
