import axios from "axios";

export const transactionApi = async (amount,note) => {

    const tEntry = "http://localhost:5000/transaction"

    let call = await axios.post(
        tEntry,
        {
            inputAmount: amount,
            inputNote: note,

        },
        {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }}).then((response)=>{console.log(response)}).catch((error)=>{console.log(error)})
    
}
