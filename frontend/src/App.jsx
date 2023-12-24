import React from 'react'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Login from './pages/login-page/Login'
import Register from './pages/register-page/Register'
import Main from './pages/main-page/Main'
import OtpConfirm from './pages/otpConfirm-page/OtpConfirm'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Main/>}/>
        <Route path='/otp' element={<OtpConfirm/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App