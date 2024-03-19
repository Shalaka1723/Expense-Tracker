import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Dashboard from './Components/Dashboard'
import Setting from './Components/Setting'


export default  function App() {
  return (
    <>
    <Routes>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/Setting" element={<Setting/>}/>
    </Routes>

    </>
  )
}


