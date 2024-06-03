import React, { useEffect, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import RadioGroup from "@mui/material/RadioGroup";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Navbar from "./Navbar";
import { ThemeProvider } from "@mui/material/styles";
import {  transactionApi} from "../apis/api";
import dayjs from "dayjs";
import { Tcard } from "./Tcard";
import MUIDataTable from "mui-datatables";

// const columns = [
//   {
//     name: "date",
//     label: "Date",
//     options: {
//       filter: true,
//       sort: true,
//     },
//   },
//   {
//     name: "amount",
//     label: "Amount",
//     options: {
//       filter: true,
//       sort: false,
//     },
//   },
//   {
//     name: "radio",
//     label: "Category",
//     options: {
//       filter: true,
//       sort: false,
//     },
//   },
//   {
//     name: "note",
//     label: "Note",
//     options: {
//       filter: true,
//       sort: false,
//     },
//   },
// ];

// const data = [
//   { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
//   { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
//   { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
//   { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
// ];

// const options = {
//   // filterType: "checkbox", 
// };

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

  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [date, setDate] = useState(dayjs());
  const [radio, setRadio] = useState("");
  const [open, setOpen] = React.useState(false);
  const [tableData,setTableData] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(date.$d, amount, note, radio);
  
  let traAdd = () => {
    transactionApi(amount, note, date, radio);
  };

  // let callData = async() =>{
  //   let listSave = await listApi();
  //   setTableData(listSave)
  // }


  // useEffect(() => {
  //   callData()
  // }, [])
  
console.log(tableData)

  return (
    <>
      <div className="bg-slate-50 flex flex-row">
        <Navbar />
        <div className=" bg-white rounded-3xl shadow-lg w-screen h-screen m-8 p-5">
          <div className=" flex  bg-white w- border px-6 py-4 h-fit rounded-3xl shadow-lg gap-3  ">
            <div className=" ">
              <input
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
                name="amount"
                type="number"
                placeholder="Enter Amount."
                className="border rounded-md p-2 my-2"
              ></input>
              <input
                value={note}
                onChange={(e) => {
                  setNote(e.target.value);
                }}
                name="note"
                type="text"
                placeholder="Enter Note"
                className="border rounded-md p-2 py-3 my-2"
              ></input>
            </div>
            <div className="">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DateTimePicker"]}>
                  <DateTimePicker
                    label="Basic date time picker"
                    value={date}
                    onChange={(newValue) => {
                      setDate(newValue);
                    }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>

            <div className="">
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Category
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="food"
                    control={
                      <Radio
                        onChange={(e) => {
                          setRadio(e.target.value);
                        }}
                      />
                    }
                    label="Food"
                  />
                  <FormControlLabel
                    value="bills"
                    control={
                      <Radio
                        onChange={(e) => {
                          setRadio(e.target.value);
                        }}
                      />
                    }
                    label="Bills"
                  />
                  <FormControlLabel
                    value="travel"
                    control={
                      <Radio
                        onChange={(e) => {
                          setRadio(e.target.value);
                        }}
                      />
                    }
                    label="Travel"
                  />
                  <FormControlLabel
                    value="shopping"
                    control={
                      <Radio
                        onChange={(e) => {
                          setRadio(e.target.value);
                        }}
                      />
                    }
                    label="Shopping"
                  />
                </RadioGroup>
              </FormControl>
            </div>

            <button
              onClick={() => {
                traAdd();
              }}
              className=" place-self-end border px-6 py-4 h-fit m-6 text-3xl rounded-3xl  bg-lime-300 text-white shadow-lg "
            >
              Add a transaction <AddCircleIcon />
            </button>
          </div>

          <div>
            <h1 className=" text-center text-4xl font-medium m-6 text-lime-600">
              Transactions
            </h1>
          </div>
          {/* <MUIDataTable
            title={"Transaction List"}
            data={tableData}
            columns={columns}
            options={options}
          /> */}
        </div>
      </div>
    </>
  );
};

export default Transactions;
