import * as React from 'react';
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import BaseTable from './../BaseTable';
import TemporaryDrawer from '../TemporaryDrawer/TemporaryDrawer';
import Sidebar from '../Sidebar';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function MyGrid(props) {
  return (
    <React.Fragment>
        <Box style={{display: 'flex', flexDirection: 'row'}}>
            <Sidebar/>
            <BaseTable/>
        </Box>
    </React.Fragment>
  );
}
