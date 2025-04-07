import "./register.css";
import React from 'react';
import { NavLink , useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";
export default function Register() {

  let navigate = useNavigate();

  const [username, setuserName] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setloading] = useState("");
  const [error, seterror] = useState("");


  // const {userInfo ,loading} = useSelector(state => state.user)
  // const {error } =useSelector(state=> state.user)
//Using redux
  const handleUpdate = async (e) => {
    e.preventDefault();
    // updateUser({username,email,password},dispatch)
    try {
      var user = { "username":username,"password": password }
      const {data} = await axios.post(`${baseUrl}/auth/register`, user )
      console.log(data.accessToken,!data.accessToken)
      if(!data.accessToken)
      {
          console.log("Please try again later")
      }
      else{
          localStorage.setItem("blogUser", JSON.stringify(data));
          navigate("/");
      }
      console.log(data)
    } catch (error) {
      console.log(error.response.data)
      seterror(error.response.data)

    }
  }
  const removeUser = (e) => {
    e.preventDefault();
    // dispatch(remove());
  }
    return (
      <>
      
        <div className="register">
            <span className="registerTitle">Register</span>
            {error && 
              <div class="alert alert-danger" style={{margin:"1.5rem"}}>
                  {error}
              </div>
            }
            <form className="registerForm">
                <label >Username</label>
                <input type="text" className="registerInput" placeholder="Enter your Username..." onChange={(e) => setuserName(e.target.value)}></input>
                
                {/* <label >Email</label>
                <input type="text" className="registerInput" placeholder="Enter your email..." onChange={(e) => setEmail(e.target.value)}></input> */}
                <label >Password</label>
                <input type="password" className="registerInput"   placeholder="Enter your password..." onChange={(e) => setPassword(e.target.value)}></input>
                <button disabled={loading} className="registerButton" onClick={handleUpdate}>Register</button>
                {console.log(error)}
                {loading === false && <span className="succes">Registration completed</span>}

            </form>
            <button className="LoginButton"><NavLink to="/login"style={{textDecoration:"none",color:"inherit"}} >Login</NavLink></button>

        </div>
        </>
    )
}
