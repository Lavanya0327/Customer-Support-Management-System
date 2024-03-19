import React,{useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Signup = () => {
    const[username,setUserName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const handleSignup=()=>{
        axios.post('http://localhost:3001/User',
        {"username":username,"email":email,"password":password})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
  return (
    <div>
        <form onSubmit={handleSignup}>
            <label>Username:</label>
            <input type='text' value={username} onChange={(e)=>{setUserName(e.target.value)}}/>
            <br></br>
            <br></br>
            <label>Email:</label>
            <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <br></br>
            <br></br>
            <label>Password:</label>
            <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <br></br>
            <br></br>
            <button type='submit'>Signup</button>
            <br></br>
            <br></br>
            <Link to="/login">Already have an account?Log in</Link>
        </form>
    </div>
  )
}

export default Signup