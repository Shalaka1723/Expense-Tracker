import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Setting from './components/Setting'
import Overview from './components/Overview'
import Transactions from './components/Transactions'
import Dashboard from './components/Dashboard'


export default  function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/Overview" element={<Overview/>}/>
      <Route path="/Setting" element={<Setting/>}/>
      <Route path="/Transactions" element={<Transactions/>}/>

    
    </Routes>

    </>
  )
}


