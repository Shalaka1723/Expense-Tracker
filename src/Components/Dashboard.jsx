import React from "react";
import { Chart } from "react-google-charts";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Navbar from "./Navbar";

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


export default function Dashboard() {
  return (
    <>

    <div className="flex flex-rows-2"> 
      <Navbar />

      <div className="grid grid-cols-2 grid-rows-2 gap-5 bg-pink-300 self-center w-full p-3">
      
          {/* grid L1 */}
          <div className="border-2">
            <h1>QUICK </h1>
          </div>
          
          {/* grid R1 */}
          <div>
            <Chart
            chartType="PieChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
            />
          </div>
            
          {/* grid L2 */}
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
          </LocalizationProvider>
          </div>


          {/* grid R2 */}
          <div>abaaac</div>
      
      
      </div>

      </div>

    </>
  );
}
