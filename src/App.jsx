import { useState } from 'react'
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './pages/login/Login'
import { PersonalAccount } from './pages/personalAccount/PersonalAccount'
import "./styles/fontDocument.css";


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
        </Route>
        <Route path="/personal-account">
          <Route index element={<PersonalAccount />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;