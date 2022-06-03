import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { getTableOrder, setSearchfields } from '../../globalState'
import Button from '@mui/material/Button'
import codes from '../../codes.json'

const allFields = getTableOrder();

export default function FieldAutocomplete() {

  const [checkedField, setCheckedField] = useState(null)
  const [checkedValue, setCheckedValue] = useState("")

  const answers = () => {
    return codes.Z1.find( (element) => element.content_table_id == checkedField.content_table_id ).answers
  }

  return (
    <div style={{textAlign: 'center', display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: "30px"}}>
        <div style={{paddingBottom: 25}}>
          <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={allFields}
              onChange={(_,newValue)=>{
                setCheckedField(newValue)
              }}
              sx={{ width: 400, margin: '0 auto' }}
              renderInput={(params) => <TextField {...params} label="Savol maydoni" />}
          />
        </div>
        <div style={{paddingBottom: 25}}>
        {
          (checkedField != null && checkedField.select === true)?<Autocomplete
            disablePortal
            id="combo-box-demo"
            options={answers()}
            onChange={(_,newValue)=>{
              setCheckedValue(newValue.id)
            }}
            sx={{ width: 400, margin: '0 auto' }}
            renderInput={(params) => <TextField {...params} label="Savol maydoni" />}
          />:
          <TextField
            id="outlined-password-input"
            label="Qiymat"
            type="text"
            disabled = {checkedField == null}
            sx={{ width: 400, margin: '0 auto' }}
            onChange={(event)=>{setCheckedValue(event.target.value)}}
          />
        }
        </div>
        <div style={{paddingBottom: 20}}>
          <Button
            variant="contained"
            disabled = {checkedField == null}
            onClick={() => {
              setSearchfields(checkedField.text, checkedValue, checkedField.content_table_id, checkedField.label)
              setCheckedField(null)
            }}
          >
            Qo'shish
          </Button>
        </div>
    </div>
  );
}
