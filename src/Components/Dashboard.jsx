import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import RadioGroup from '@mui/material/RadioGroup';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from "./Navbar";
import Monthly from "./Monthly";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PieArcLabel from "./Pie";
import { Box, Button, FormControl, FormControlLabel, FormLabel, Modal, Radio, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

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

export default function Dashboard() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="flex flex-row">
        <Navbar />
        <div className="flex flex-col gap-5 bg-slate-50 self-center  w-screen h-screen p-5">
          {/* col top */}
          <div className="flex h-1/2 p-5 justify-around gap-20">
            <div className=" bg- h-fit w-fit p-10 border rounded-3xl shadow-lg  ">
              {" "}
              {/* top left */}
              <PieArcLabel />
            </div>

            <div className="border rounded-3xl shadow-lg ">
              {" "}
              {/* top right */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
              </LocalizationProvider>
            </div>
          </div>

          {/* col bottom */}
          <div className=" flex h-1/2 p-5 items-center justify-between gap-20">
             <div className=" bg-white w-[450px] border px-6 py-4 h-fit rounded-3xl shadow-lg "> {/*col bottom  left */}
                <Button
                  endIcon={<AddCircleIcon sx={{ color: blue[400] }} />}
                  onClick={handleOpen}
                  style={{backgroundColor: "cyan"}}
                  className="border px-6 py-4 h-fit m-6 text-3xl rounded-3xl  text-white shadow-lg "
                >
                  Add a transaction{" "}
                </Button>
                <Modal
              
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <input placeholder="Enter Amount." className="border rounded-md p-4"></input>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DateTimePicker']}>
                        <DateTimePicker label="Basic date time picker" />
                      </DemoContainer>
                    </LocalizationProvider>
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
                  </Box>
                </Modal>

              <div>
                <h2>Quick List</h2>
                <ul className="  checked:">
                  <li>Phone Bill</li>
                  <li>Phone Bill</li>
                  <li>Phone Bill</li>
                </ul>
              </div>
            </div>

            <div className="w-[550px] h-[350px] pl-5 border rounded-3xl shadow-lg ">
              <Monthly />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
