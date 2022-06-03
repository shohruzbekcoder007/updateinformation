import React, { useMemo } from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { getTableOrder, setCheckboxed } from '../../globalState';

export default function Checkboxes() {

    const checkedList = useMemo(() => {
        return getTableOrder()
    },[])

  return (
      <Box sx={{ display: 'flex', flexDirection: 'column', paddingLeft: "10px"}}>
        {
            checkedList.map((checked, index) => {
                return (
                    <MyCheckbox checked={checked} key={index}/>
                )
            })
        }
    </Box>
  );
}

const MyCheckbox = ({checked}) => {

    const [itemChecked, setItemChecked] = React.useState(checked.checked);
    const chackedHandler = (event) => {
        setItemChecked(event.target.checked)
        setCheckboxed(checked.content_table_id,event.target.checked)
    }

    return (
        <FormControlLabel
            label={checked.label.slice(0,20)+"..."}
            control={<Checkbox size="small" checked={itemChecked} onChange={chackedHandler} />}
        />
    )
}