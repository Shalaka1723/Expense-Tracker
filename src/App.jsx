import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Dashboard from './components/Dashboard'
import Setting from './components/Setting'
import Overview from './components/Overview'


export default  function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/Overview" element={<Overview/>}/>
      <Route path="/Setting" element={<Setting/>}/>

    
    </Routes>

    </>
  )
}


