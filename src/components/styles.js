import styled from "styled-components";
import TableContainer from '@mui/material/TableContainer';
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export const MyTableContainer = styled(TableContainer)`
    height: calc(100vh - 55px)
`;

export const MyTableCell = styled(TableCell)`
    background-color: #3c3c3c;
    color: #fff;
    font-weight: bold;
`;

export const TableHeaderTitle = styled.h6`
    padding-bottom: 10px;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SearchInput = styled.input`
    width: 100%;
`;

export const GroupItemTableRow = styled(TableRow)`
    background-color: rgb(0 0 0 / 14%);
`