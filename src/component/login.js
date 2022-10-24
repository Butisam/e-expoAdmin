import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";
import { auth } from './config/firebase';
import '../component/login.css'



function Login() {

  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("")
  let navigate = useNavigate();

  const signIn = (email,password)=>{

    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      navigate("/Dashboard")
      console.log("welcome");
    }).catch((err)=> {
      console.log(err);
      console.log(err.message);
    })
    // navigate("/Dashboard")

  }

  const Resgister =()=>{
    console.log("error");
    navigate("/Resgister")
  }
  
  return (
    <div className='wrapper'>
    <div>
      <h1> Welcome </h1>
      <form>
        <input type="text" placeholder="Username"  onChange={(e) => setEmail(e.target.value)}/><br></br>
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/><br></br>
        <button type="submit" id="login-button1" onClick={signIn}>Login</button>
        <button type="submit" id="login-button" onClick={Resgister}>Register</button>
      </form>
    </div>
    </div>
  
    )
}

export default Login