import React from 'react'
import Navbar from './Navbar'
import { PieChart } from 'recharts'
import Chart from 'react-google-charts'


export const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7], // CSS-style declaration
  ];
  
  export const options = {
    title: "My Daily Activities",
    pieHole: 0.4,
    is3D: false,
  };
  

function Overview() {
  return (
    <>
    
        <div >
            <Navbar/>


        </div>
            
         
    </>
  )
}

export default Overview
