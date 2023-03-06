import "./login.css";
import React from 'react';
import { Link } from 'react-router-dom';

import { useState } from "react";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [authorname, setAuthorname] = useState("");
    const [password, setPassword] = useState("");

    const [error,setError] = useState(null)

	let navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            var user = { "username":authorname,"password": password }
            const {data} = await axios.post(`${baseUrl}/auth/login`, user );
            console.log(!data.accessToken);
            if(!data.accessToken)
            {
                console.log("Please try again later");
            }
            else{
                localStorage.setItem("blogUser", JSON.stringify(data));
                navigate("/");
            }
            console.log(data)
        } catch (error) {
            console.log(error.response.data)
            setError(error.response.data)
        }
    };

    return (
        <>
        
        <div className="login">
            
            <span className="loginTitle">Login</span>
            {error && 
            <div class="alert alert-danger" style={{margin:"1.5rem"}}>
                {error}
            </div>
        }
            <form className="loginForm">
                <label >Email</label>
                <input type="text" className="loginInput" placeholder="Enter your email..." onChange={(e) => setAuthorname(e.target.value)}></input>
                <label >Password</label>
                <input type="password" className="loginInput" placeholder="Enter your password..." onChange={(e) => setPassword(e.target.value)}></input>
                <button className="loginButton" onClick={submitHandler}>Login</button>
            </form>
            <button className="RegisterButton"><Link to="/register" style={{ textDecoration: "none", color: "inherit" }}>Register</Link></button>
        </div>
        </>
    )
}
