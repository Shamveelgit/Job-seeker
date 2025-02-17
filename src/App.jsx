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




function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<User />} />
        <Route path='/' element={<Browse />} />
      </Routes>

    </>
  )
}

export default App
