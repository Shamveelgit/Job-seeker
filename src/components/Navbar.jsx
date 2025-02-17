import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { AppBar } from '@mui/material';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            JOB PORTAL
          </Typography>
          <Link to='/login'>
          <Button color="warning" variant='contained'>Login</Button>  
          </Link>
          <Link to='/signup'>
          <Button color="success" variant='contained'>Signup</Button>  
          </Link>
          <Link to='/dashboard'>
          <Button color="secondary" variant='contained'>User</Button>  
          </Link>
          <Link to='/'>
          <Button color="error" variant='contained'>Browse</Button>  
          </Link>
         
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}
