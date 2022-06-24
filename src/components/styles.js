import styled from "styled-components";
import TableContainer from '@mui/material/TableContainer';
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Typography } from '@mui/material';

export const MyTableContainer = styled(TableContainer)`
    height: calc(100vh - 55px)
`;

export const MyTableCell = styled(TableCell)`
    background-color: #3c3c3c;
    color: #fff;
    font-weight: bold;
`;

export const TableHeaderTitle = styled.h6`
    // padding-bottom: 10px;
    // height: 130px;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    padding: 0;
    margin: 0;
    font-size: 16px;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 30px;
`;

export const GroupItemTableRow = styled(TableRow)`
    background-color: rgb(0 0 0 / 14%);
    td {
        line-height: 1
    }
`

export const TableHeaderTitlePopover = styled.div`
    position: absolute;
    left: 0;
    top: 100%;
    background-color: #fff;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 5px;
`;

export const ModalTitle = styled(Typography)`
    text-align: center;
    padding: 10px 0px;
    position: fixed;
    background-color: #fff;
    width: 250px;
    z-index: 2;
    border-bottom: 2px solid;
`

export const ModalBody = styled(Typography)`
    padding-top: 55px;
`

export const FilterSearch = styled.div`
    padding: 18px;
    text-align: right;
`