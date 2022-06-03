import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import FieldAutocomplete from '../FieldAutocomplete';
import FieldSearch from '../FieldSearch';

export default function SearchingGrid() {
  return (
    <Box sx={{ flexGrow: 1 }} style={{height: '100%'}}>
      <Grid container spacing={2} style={{height: '100%'}}>
        <Grid item xs={4} style={{height: '100%'}}>
            <Paper elevation={3} style={{height: '100%', backgroundColor: '#f3f3f3'}}>
                <Typography variant="h6" gutterBottom component="div" style={{textAlign: 'center', padding: '10px'}}>Maydon qo'shish</Typography>
                <FieldAutocomplete/>
            </Paper>
        </Grid>
        <Grid item xs={8}>
            <Paper elevation={3} style={{height: '100%', backgroundColor: '#f3f3f3'}}>
              <Typography variant="h6" gutterBottom component="div" style={{textAlign: 'center', padding: '10px'}}>Saralash maydonlari</Typography>
              <FieldSearch/>
            </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
