import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { boxClasses, Button } from '@mui/material';


// Renamed to match the file name
export default function Login() {
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh', // Full height to center vertically
        '& > :not(style)': { m: 1, width: '30ch' }
      }}
      noValidate
      autoComplete="off"
    >
      <center>
        <br/><br/>
      <h1>LOGIN</h1>
      </center>
      
      <TextField id="outlined-basic" label="Username" variant="outlined" />
      <br />
      <TextField id="filled-basic" label="Password" variant="outlined" />
      <br />
      <Button color="warning" variant='contained'>Submit</Button>

      
    </Box>
  );
}

