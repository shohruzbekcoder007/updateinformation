import React, { useMemo, useState } from "react";
import TableCell from "@mui/material/TableCell";
import { GroupItemTableRow } from "../styles";
import SelectSmall from "../SelectSmall";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CellRenderer from "../../CellRenderer";
import { globalState, getTableOrder, setDeletedRowId } from "../../globalState";
import MuiAlert from "@mui/material/Alert";
import axios from "../../baseUrl";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import AlertDialog from '../AlertDialog'
import { main_logic } from '../../logic/main_logic'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function RenderRow({ row }) {

  const [edit, setEdit] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  ///Snackbar///
  const [state, setState] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "left",
  });

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  ///Snackbar///

  let newRow = row;

  const order = useMemo(() => {
    return getTableOrder();
  }, [globalState.tableOrder]);

  const updatePerson = (id, updateRow) => {
    axios
      .put(`/v1/${id}/update_person/`, updateRow, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data && response.data.message == "1") {
          setState({
            open: true,
            vertical: "bottom",
            horizontal: "left",
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const deletePerson = (id, deleteRow) => {
    axios
      .delete(`/v1/${id}/delete_person/`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
        deleteRow,
      })
      .then((response) => {
        setIsDeleted(true);
        setDeletedRowId(id);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const changeSelect = (label, arg) => {
    row[label] = arg;
  };

  const changeLogic = () => {
    return main_logic(row);
  }

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          <i>
            <b>{row.first_label_last_label}</b>
          </i>{" "}
          ma'lumotlari o'zgartirildi!
        </Alert>
      </Snackbar>
      {isDeleted ? (
        <></>
      ) : (
        <GroupItemTableRow key={row.id}>
          <TableCell>
            {
                (!edit)?
                <>
                    <IconButton
                      aria-label="delete"
                      onClick={() => {
                          deletePerson(row.id, row);
                      }}
                    >
                    <DeleteIcon color="secondary" />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      onClick={() => {
                          setEdit(!edit);
                      }}
                    >
                    <NoteAltIcon color="disabled" />
                    </IconButton>
                </>:
                <>
                    <AlertDialog changeLogic={changeLogic} updatePerson={() => {updatePerson(row.id, row)}}/>
                    <IconButton
                      aria-label="delete"
                      onClick={() => {
                          setEdit(!edit);
                      }}
                    >
                    <DisabledByDefaultIcon color="disabled" />
                    </IconButton>
                </>
            }
          </TableCell>
          {order.map((elem) => {
            if(elem.checked){
              if (edit === false) {
                return (
                  <TableCell key={elem.content_table_id}>
                    <CellRenderer
                      content_table_id={elem.content_table_id}
                      value={row[elem.text]}
                    />
                  </TableCell>
                );
              } else {
                if (elem.select) {
                  return (
                    <TableCell key={elem.content_table_id}>
                      <SelectSmall
                        content_table_id={elem.content_table_id}
                        selectedOption={row[elem.text]}
                        changeSelect={(arg) => {
                          changeSelect(elem.text, arg);
                        }}
                      />
                    </TableCell>
                  );
                } else {
                  return (
                    <TableCell key={elem.content_table_id}>
                      <TextField
                        id="standard-multiline-flexible"
                        multiline
                        maxRows={4}
                        defaultValue={row[elem.text] || ""}
                        onChange={(event) => {
                          newRow[elem.text] = event.target.value;
                        }}
                        variant="standard"
                      />
                    </TableCell>
                  );
                }
              }
            }
            
          })}
        </GroupItemTableRow>
      )}
    </>
  );
}
