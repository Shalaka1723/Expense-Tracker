import React from 'react'
import { Link } from 'react-router-dom';
import etlogo from "../assets/images/etlogo.jpg"

export default function Navbar() {
  return (
    <>
      <div className='bg-purple-950 sticky  flex flex-col  left-0 top-0 h-screen  w-64 p-5'>
        <img src={etlogo} className=' w-24 rounded-full self-center mb-4 '/>
        <h1 className='text-bold text-white text-lg'>MY EXPENSE TRACKER</h1>

        <ul className='mt-20 flex flex-col justify-between'>
          
         
          <Link to={"/"} className='border rounded border-white text-white font-semibold text-center p-2 m-1 '>Dashboard</Link>
          <Link to={"/Transactions"} className='border rounded border-white text-white text-center p-2 m-1 '>Transactions</Link>
          <Link to={"/Overview"} className='border rounded border-white text-white text-center p-2 m-1 '>Overview</Link>
          <button className='border rounded border-white text-white p-2 m-1 '>Home</button>
          <button className='border rounded border-white text-white p-2 m-1 '>My Account</button>
          <button className='text-lime-700 shadow-lg font-bold m-4 p-2 rounded-3xl bg-lime-200 border border-cyan-700'>Log Out</button>
        </ul>

        
      </div>


    </>
  )
}
