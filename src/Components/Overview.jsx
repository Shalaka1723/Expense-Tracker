import React from 'react'
import Navbar from './Navbar'

function Overview() {
  return (
    <>
    
      <div className='flex h-screen'>
         <Navbar className=' w-'/> 

        <div className='flex flex-col cols-2 h-screen w-screen '>
            <div className=' bg- flex h-1/3'> A
                <div className=' bg-cyan-100 text-cyan-600 shadow-lg m-4 border-2 rounded-md w-1/4 text-center content-center text-3xl p-6 '>
                    <h1 className='pb-6'>Total Transactions</h1>
                    <h1>20</h1>
                </div>
                <div className=' bg-cyan-100 text-cyan-600 shadow-lg m-4 border-2 rounded-md w-1/4 text-center content-center text-3xl p-6 '>
                    <h1 className='pb-6'>Income</h1>
                    <h1>1200000</h1>
                </div>
                <div className=' bg-cyan-100 text-cyan-600 shadow-lg m-4 border-2 rounded-md w-1/4 text-center content-center text-3xl p-6 '>
                    <h1 className='pb-6'>Expenses</h1>
                    <h1>50000</h1>
                </div>
                <div className=' bg-cyan-100 text-cyan-600 shadow-lg m-4 border-2 rounded-md w-1/4 text-center content-center text-3xl p-6 '>
                    <h1 className='pb-6'>Balance</h1>
                    <h1>115000</h1>
                </div>


            </div>
            <div className=' bg-slate-800 h-2/3'> B</div>
         </div>
      </div>
    </>
  )
}

export default Overview