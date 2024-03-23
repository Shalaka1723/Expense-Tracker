import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Dashboard from './components/Dashboard'
import Setting from './components/Setting'


export default  function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/Setting" element={<Setting/>}/>
    </Routes>

    </>
  )
}


