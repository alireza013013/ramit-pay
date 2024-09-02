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
import { PaymentDetail } from './pages/dashboard/paymentDetail/PaymentDetail'
import { AddInventory } from './pages/dashboard/addInventory/AddInventory'
import { ResultPay } from './pages/dashboard/resultPay/ResultPay'
import { InPersonTransaction } from './pages/dashboard/inPersonTransactions/InPersonTransaction'
import { RegisterDeposit } from './pages/dashboard/registerDeposit/RegisterDeposit'
import { RegisterBooking } from './pages/dashboard/registerBooking/RegisterBooking'
import { ResultBooking } from './pages/dashboard/resultbooking/Resultbooking'
import { SubmitDeposit } from './pages/dashboard/submitDeposit/SubmitDeposit'
import { Update } from './pages/dashboard/updates/Update'


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
          <Route path="inpersontransactions" element={<InPersonTransaction />} />
        </Route>

        <Route path="/dashboard/transactions/:id" element={<TransactionDetail />} />
        <Route path="/dashboard/payment/:id" element={<PaymentDetail />} />
        <Route path="/dashboard/addinventory" element={<AddInventory />} />
        <Route path="/dashboard/resultpay/:status" element={<ResultPay />} />
        <Route path="/dashboard/registerdeposit" element={<RegisterDeposit />} />
        <Route path="/dashboard/registerbooking" element={<RegisterBooking />} />
        <Route path="/dashboard/resultbooking/:status" element={<ResultBooking />} />
        <Route path="/dashboard/submitdeposit" element={<SubmitDeposit />} />
        <Route path="/dashboard/update" element={<Update />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App;