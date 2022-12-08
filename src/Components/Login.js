import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import {setEmail,setPassword,loginDetails} from "../Store/LoginSlice"
function Login() {
const dispatch=useDispatch()
const data=useSelector(store=>store.login)

console.log(data)

const handleEmail=(event)=>{
  dispatch(setEmail(event.target.value))
}
const handlePassword=(event)=>{
  dispatch(setPassword(event.target.value))
}
const handleLogin=()=>{
  dispatch(loginDetails(data.email,data.password))
}
  return (
    <div>
      <input type="text" placeholder="enter email" onChange={handleEmail} />
      <input type="password" placeholder="enter password" onChange={handlePassword}/>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login