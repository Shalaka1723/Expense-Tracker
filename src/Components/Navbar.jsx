import React from 'react'
import { Link } from 'react-router-dom';
import etlogo from "../assets/images/etlogo.jpg"

export default function Navbar() {
  return (
    <>
      <div className='bg-cyan-200 flex flex-col  left-0 top-0  w-64 p-5'>
        <img src={etlogo} className=' w-24 rounded-full self-center mb-4 '/>
        <h1 className='text-bold text-lg'>MY EXPENSE TRACKER</h1>

        <ul className='mt-20 flex flex-col justify-between'>
          
         
          <Link to={"/"} className='border rounded border-slate-900 text-center p-2 m-1 '>Dashboard</Link>
          <Link to={"/Transactions"} className='border rounded border-slate-900 text-center p-2 m-1 '>Transactions</Link>
          <Link to={"/Overview"} className='border rounded border-slate-900 text-center p-2 m-1 '>Overview</Link>
          <button className='border rounded border-slate-900 p-2 m-1 '>Home</button>
          <button className='border rounded border-slate-900 p-2 m-1 '>My Account</button>
          <button className='text-cyan-700 font-bold m-4 p-2 rounded-3xl bg-cyan-100 border border-cyan-700'>Log Out</button>
        </ul>

        
      </div>


    </>
  )
}
