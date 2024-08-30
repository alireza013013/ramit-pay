import { useState } from 'react'
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './pages/login/Login'
import { PersonalAccount } from './pages/personalAccount/PersonalAccount'
import { Dashboard } from './pages/dashboard/Dashboard'
import { Transactions } from './pages/dashboard/transactions/Transactions'
import { Home } from './pages/dashboard/home/Home'
import { Profile } from './pages/dashboard/profile/Profile'
import { MyPayment } from './pages/dashboard/myPayment/MyPayment'
import { TransactionDetail } from './pages/dashboard/transactionDetail/TransactionDetail'

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

        <Route path="/dashboard" element={<Dashboard />}>
          <Route index path="home" element={<Home />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="payment" element={<MyPayment />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="/dashboard/transactions/:id" element={<TransactionDetail />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;