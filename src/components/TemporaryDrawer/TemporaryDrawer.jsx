import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import DragAndDropList from '../TemporaryDrawer/TemporaryDrawer';
import { Typography } from '@mui/material';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
        <Typography type="text" component="h4" style={{textAlign: 'center', padding: "10px 0"}}>Tartibni o'zgartirish</Typography>
        <DragAndDropList/>
    </Box>
  );

  return (
    <div style={{position: "fixed", left: "30px", bottom: "20px", width: "50%", height: "30px",  zIndex: "100"}}>
        <React.Fragment>
          <Button onClick={toggleDrawer(true)}>{'Tatib'}</Button>
          <Drawer
            anchor='right'
            open={state}
            onClose={toggleDrawer(false)}
          >
            {list('right')}
          </Drawer>
        </React.Fragment>
    </div>
  );
}
