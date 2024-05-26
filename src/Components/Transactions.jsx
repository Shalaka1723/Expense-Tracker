import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import RadioGroup from '@mui/material/RadioGroup';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Box, Button, FormControl, FormControlLabel, FormLabel, Modal, Radio, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Navbar from "./Navbar";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Transactions = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    
    <>
    <div className="bg-slate-50 flex flex-row">
      <Navbar/>
      <div className=" bg-white rounded-3xl shadow-lg w-screen h-screen m-8 p-5" >

          <div className=" flex  bg-white w- border px-6 py-4 h-fit rounded-3xl shadow-lg gap-3  "> 
          

                  
                      <div className=" " >
                        <input placeholder="Enter Amount." className="border rounded-md p-2 my-2"></input>
                        <input placeholder="Enter Note" className="border rounded-md p-2 py-3 my-2"></input>
                      </div>
                      <div className="">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DateTimePicker']}>
                              <DateTimePicker label="Basic date time picker" />
                            </DemoContainer>
                          </LocalizationProvider>
                      </div>

                        <div className=""> 
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">Category</FormLabel>
                            <RadioGroup
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              name="row-radio-buttons-group"
                              >
                              <FormControlLabel value="food" control={<Radio />} label="Food" />
                              <FormControlLabel value="bills" control={<Radio />} label="Bills" />
                              <FormControlLabel value="travel" control={<Radio />} label="Travel" />
                              <FormControlLabel value="shopping" control={<Radio />} label="Shopping" />

                            </RadioGroup>
                        </FormControl>
                        </div>

                      <button
                        className=" place-self-end border px-6 py-4 h-fit m-6 text-3xl rounded-3xl  bg-cyan-300 text-white shadow-lg ">
                        Add a transaction {' '}
                        <AddCircleIcon/>
                      </button>
                  </div>

                <div>
                <h1 className=" text-center text-4xl font-medium m-6 text-cyan-600">Transactions</h1>
                </div>  

      </div>
    </div>
    </>
  )
}

export default Transactions