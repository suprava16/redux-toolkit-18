import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const LoginSlice=createSlice({
  name: "login",
  initialState: {
    email: "",
    password: ""
  },
  reducers:{
    setEmail(state,action){
      state.email=action.payload
    },
    setPassword(state,action){
      state.password=action.payload
    }
  }
})
export const{setEmail,setPassword}=LoginSlice.actions
export default LoginSlice.reducer

//API calling
export function loginDetails(email, password) {
  return async function getDetails() {
    try {
      const res = await axios.post("https://reqres.in/api/login", { email: email, password: password })
      console.log(res)
    }
    catch (err) {
      console.log(err)
    }
  }
}