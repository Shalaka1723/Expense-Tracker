import React from "react";

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Navbar from "./Navbar";
import Monthly from "./Monthly";
import { Pie } from "recharts";
import AddCircleIcon from '@mui/icons-material/AddCircle';


export default function Dashboard() {
  return (
    <>

    <div className="flex flex-rows-2"> 
        <Navbar />
        <div className="flex flex-col gap-5 bg-slate-200 self-center w-screen h-screen p-3">
        
            {/* col top */}
            <div className="flex h-1/2"> 

            
              <div className=" bg-slate-300 ">  {/* top left */}
                <Pie/>
              </div>
                        
              <div> {/* top right */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar />
              </LocalizationProvider>
              </div>

            </div>
              
            {/* col down */}
            <div className=" flex h-1/2 bg- rounded-xl shadow-md ">
              <div className="w-fit border px-6 py-4 h-fit text-4xl rounded-3xl bg-cyan-500 text-white ">
                <button className="">Add a transaction </button>
                <AddCircleIcon sx={{ color: "white" }}/>
              </div>
              
              <div className="w-1/2"><Monthly/></div>
              
            </div>
        
        
        </div>

    </div>

    </>
  );
}
