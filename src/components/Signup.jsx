import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { input, storeUser, userInCookie } from './utils';
import { useNavigate } from 'react-router-dom';

// Renamed to match the file name
export default function Login({setUser}) {

  const navigate = useNavigate()
  const [Email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  let signUp = async () => {
    if (Email !== "" || password !== "") {
      console.log("User signing up...");
      let data = {
        email: Email,
        name : name,
        password: password,
        role: "admin"
      }
    
      try {
        console.log("creating user...");
        let user = await axios.post('http://localhost:3001/signup',data,{
          headers: {
            'Content-Type': 'application/json'
          }
        })
        let userDetails = user.data.data
        if(user?.data?.users?.acknowledged) {
          console.log("User signed up successfully!")
          storeUser(userDetails?._id,userDetails?.name,userDetails?.email,userDetails?.role)
          setUser(userDetails)
          navigate("/")
        }
        else if(user.data.error) {
          console.log("User already exists")
        }
      }
      catch(err) {
        console.log("Error in signing up , check you internet connections ", );
        console.log(err);
      }
    }
    else {
      console.log("Please fill all the fields")
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
      <br /><br /><br /><br /><br />

      <center>
        <h1>SIGNUP</h1>
      </center>

      <TextField id="filled-basic" label="Name" name='name' onChange={evt => input(evt,setEmail,setPassword,setName) } value={name} variant="outlined" />
      <TextField name='email' onChange={evt => input(evt,setEmail,setPassword,setName) } id="outlined-basic" value={Email}  label="Email" variant="outlined" />

      <TextField name='password' onChange={evt => input(evt,setEmail,setPassword,setName) } id="filled-basic" label="Password" variant="outlined" />
      <br></br>
      <Button onClick={signUp} color="success" variant='contained'>create an account</Button>


    </Box>
  );
}

