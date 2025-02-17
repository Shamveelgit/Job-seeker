import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { boxClasses, Button } from '@mui/material';
import { input, storeUser } from './utils';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


// Renamed to match the file name
export default function Login({setUser}) {

  const [Email, setEmail] = React.useState('');
  const [Password, setPassword] = React.useState('');

  const navigate = useNavigate()

  const Login = async () => {
    try {
      let url = "http://localhost:3001/login"
      let user = await axios.post(url,{
        email: Email,
        password: Password,
      }, {
        headers: {
          'Content-Type': 'application/json'
        },
      })
      let userDetails = user?.data;
      if(user?.data.email) {
        console.log("Login successful")
        storeUser(userDetails?._id, userDetails?.name, userDetails?.email, userDetails?.role)
        setUser(userDetails)
        navigate("/")
      }
      else {
        console.log("Login failed")
      }
    }
    catch(err) {
      console.log("Server connection error: ");
      console.log(err);
      
    }
  }

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
        <br /><br />
        <h1>LOGIN</h1>
      </center>

      <TextField name='email' value={Email} onChange={(evt) => input(evt, setEmail, setPassword)} id="outlined-basic" label="Username" variant="outlined" />
      <br />
      <TextField name='password' value={Password} onChange={(evt) => input(evt, setEmail, setPassword)} id="filled-basic" label="Password" variant="outlined" />
      <br />
      <Button onClick={Login} color="warning" variant='contained'>Submit</Button>


    </Box>
  );
}

