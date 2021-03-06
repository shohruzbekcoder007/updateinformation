import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import DragAndDropList from './DragAndDropList';
import Checkboxes from '../Checkboxes';
import { ModalTitle, ModalBody } from '../styles'
import SearchingGrid from '../SearchingGrid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <ChangeSidebar anchor={anchor}/>
    </Box>
  );

  return (
    <div style={{paddingTop: "20px"}}>
      {['left', 'right', 'top'].map((anchor, index) => {
        let text = "text";
        if(anchor === "left") text = "columnes"
        if(anchor === "right") text = "tartib"
        if(anchor === "top") text = "saralash"
        return (<React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)} sx={{width: "100%"}}>{text}</Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        )
      })}
    </div>
  );
}


const ChangeSidebar = ({anchor}) => {
  if(anchor === "left") {
    return (
        <>
          <ModalTitle type="text" component="h4" style={{textAlign: 'center', padding: "10px 0"}}>Tanlangan ustunlar</ModalTitle>
          <ModalBody>
            <Checkboxes />
          </ModalBody>
        </>
    )
  }
  if(anchor === "right") {
    return (
      <>
        <ModalTitle type="text" component="h4" style={{textAlign: 'center', padding: "10px 0"}}>Tartibni o'zgartirish</ModalTitle>
        <ModalBody>
          <DragAndDropList/>
        </ModalBody>
      </>
    )
  }
  if(anchor === "top") {
    return (
      <>
        <div style={{height: 420, padding: 20}}>
          <SearchingGrid/>
        </div>
      </>
    )
  }else{
    <></>
  }
}