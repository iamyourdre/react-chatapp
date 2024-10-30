import { useState } from 'react'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Home from './pages/home/Home'
import { Navigate, BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'

function App() {
  const {user} = useAuthContext();
  return (
    <>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to='/login' />} />
        <Route path="/login" element={user ? <Navigate to='/' /> : <Login />} />
        <Route path="/signup" element={user ? <Navigate to='/' /> : <SignUp />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
