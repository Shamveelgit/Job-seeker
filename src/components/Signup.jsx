import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { storeUser, userInCookie } from './cookie';
import { useNavigate } from 'react-router-dom';

// Renamed to match the file name
export default function Login() {

  const navigate = useNavigate()
  const [Email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  let input = (evt) => {    
    if(evt.target.name === "email") {
      setEmail(evt.target.value)
    }
    else if(evt.target.name === "password") {
      setPassword(evt.target.value)
    }
  }

  let signUp = async () => {
    if (Email !== "" || password !== "") {
      console.log("User signing up...");
      let data = {
        email: Email,
        name : "user",
        password: password,
        role: "admin"
      }
      try {
        let user = await axios.post('http://localhost:3001/users',data,{
          headers: {
            'Content-Type': 'application/json'
          }
        })
        console.log(user);
        
        let userDetails = user.data.data
        if(user?.data?.users?.acknowledged) {
          console.log("User signed up successfully!")
          storeUser(userDetails?._id,userDetails?.name,userDetails?.email,userDetails?.role)
          console.log(userInCookie());
          navigate("/")
        }
      }
      catch(err) {
        console.log("Error in signing up: ", );
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

      <TextField name='email' onChange={input} id="outlined-basic" value={Email}  label="Email" variant="outlined" />

      <TextField name='password' onChange={input} id="filled-basic" label="Password" variant="outlined" />
      <TextField id="filled-basic" label="Confirm Password" variant="outlined" />
      <br></br>
      <Button onClick={signUp} color="success" variant='contained'>create an account</Button>


    </Box>
  );
}

