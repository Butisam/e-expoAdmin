import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../component/login.css'
import { auth } from './config/firebase';

function Resgister() {

    const [email, setEmail]= useState("");
    const [user, setUser]= useState("");
    const [password, setPassword]= useState("")
    const [confirmPassword, setconfirmPassword]= useState("")
    const [firstName, setFirstName]= useState("")
    const [lastName, setLastName]= useState("")

let navigate = useNavigate();
const Register = (()=>{
    createUserWithEmailAndPassword(auth, email, password).then(()=>{
        navigate("/")
         console.log('registered')
    }).catch((error)=>{
        console.log(error);
        console.log(error.message);
    })
})


const Login =()=>{
    console.log("error");
    navigate("/")
  }
  return (
   <>
    <div className='wrapper'>
    <div>
      <h1> Welcome </h1>
      <form>
      <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/><br></br>
      <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/><br></br>
        <input type="text" placeholder="Username" onChange={(e) => setUser(e.target.value)}/><br></br>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/><br></br>
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/><br></br>
        <input type="password" placeholder="confirm Password" onChange={(e) => setconfirmPassword(e.target.value)}/><br></br>
        <button type="submit" id="login-button1" onClick={Login}>Have Account</button>
        <button type="submit" id="login-button" onClick={Register}>Register</button>
      </form>
    </div>
    </div>
   </>
   
   
  )
}

export default Resgister