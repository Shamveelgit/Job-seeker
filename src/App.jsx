import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import {   Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import User from './components/User'
import Browse from './components/Browse'
import { userInCookie } from './components/utils'




function App() {
  const [user, setUser] = useState(userInCookie())
  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path='/signup' element={<Signup user={user} setUser={setUser}  />} />
        <Route path='/login' element={<Login user={user} setUser={setUser}  />} />
        <Route path='/dashboard' element={<User user={user} setUser={setUser}  />} />
        <Route path='/' element={<Browse user={user} setUser={setUser}  />} />
      </Routes>

    </>
  )
}

export default App
