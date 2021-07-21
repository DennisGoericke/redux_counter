import { createSlice } from "@reduxjs/toolkit";
/**
 * Call the saga methode first. then the slice
 */
const SECRET_TEXT = "MONEY IN BANK ACCOUNT:"

interface counterState {
  countValue : number,
  showSecret : boolean,
  secretText : string
}

const initialState: counterState = {
  countValue: 0,
  showSecret: true,
  secretText: ""
}

export const counterSlice = createSlice({

  name: "counter",
  initialState,
  reducers: {
    setIncrement: (state) => {
      state.countValue += 1
    }, 
    setDecrement: (state) => {
      state.countValue -= 1
    }, 
    setIncrementByValue: (state)=> {
      state.countValue += 33
    },
    setReset: (state) => {
      state.countValue = 0
    }, 
    setSecret: (state) => {
      state.showSecret = !(state.showSecret)
      if (state.showSecret){
        state.secretText = SECRET_TEXT
      } else {
        state.secretText = ""
      }
    }
  
  }
});

export const { setIncrement, setDecrement, setIncrementByValue, setReset, setSecret } = counterSlice.actions;

export default counterSlice.reducer;