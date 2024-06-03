import axios from "axios";

export const transactionApi = async (amount, note, date, radio) => {
  const tEntry = "http://localhost:7000/transaction";

  let call = await axios
    .post(
      tEntry,
      {
        inputAmount: amount,
        inputNote: note,
        inputDate: date.toISOString(),
        inputRadio: radio,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

// export const listApi = async ()=>{
//   const lEntry = "http://localhost:7000/list";
//   let response 
//   let apiCall = await axios.get(
//     lEntry,    
//     {
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//   }).then((res)=>{
//     response = res.data.data
//     // console.log(res)
//   }).catch((error)=>{console.log(error)})
//   // console.log(response)
//   return response
// }