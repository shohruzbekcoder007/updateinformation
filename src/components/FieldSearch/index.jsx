import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { globalState, getSearchfields, searchFieldsToSearchText, deleteSearchfields } from '../../globalState';
import codes from '../../codes.json';
import Button from '@mui/material/Button'
import { FilterSearch } from "../styles"
import { observer } from "mobx-react";

export default observer(function FieldSearch() {

    const [fields, setFields] = useState(getSearchfields())

    useEffect(()=>{
        setFields(getSearchfields());
    }, [globalState.searchfields])

  return (
    <>
        <List
        sx={{
            width: "100%",
            height: 220,
            bgcolor: "background.paper",
            overflow: "auto",
            padding: "5px",
        }}
        >
        {fields.map((elem, index) => {
            return (
            <FieldItem elem={elem}/>
            );
        })}
        </List>
        <FilterSearch>
            <Button
                variant="contained"
                // disabled = {checkedField == null}
                onClick={() => {
                    searchFieldsToSearchText()
                    console.log("1")
                }}
            >
                Izlash
            </Button>
        </FilterSearch>
    </>
  );
})

const FieldItem = ({elem}) => {

    let results = codes.Z1.find(element => element.content_table_id == elem.content_table_id) || { label: elem.label }
    let answer = results.answers && results.answers.find(element => element.id == elem.value) || { label: elem.value } 
    return (
        <ListItem
            key={elem.field}
            secondaryAction={
              <>
                <IconButton
                    edge="end"
                    aria-label="comments"
                    onClick={() => {deleteSearchfields(elem.content_table_id)}}
                >
                  <HighlightOffIcon />
                </IconButton>
              </>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
              dense
            >
              <div style={{ display: "flex", justifyContent: "space-between", width: "100%", paddingRight: 50 }}>
                <Typography variant="p" gutterBottom component="div">
                    {results.label}
                </Typography>
                <Typography variant="p" gutterBottom component="div">
                    {answer.label}
                </Typography>
              </div>
            </ListItemButton>
          </ListItem>
    )
}