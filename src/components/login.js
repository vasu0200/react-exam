import "../styles/login.css";
import axios from "axios";
import React, { useState } from "react";

function Login(){
    const[state,setState]=useState({
        email:"",
        password:""
    })
    const handleChange= (e)=>{
        const value= e.target.value;
        setState({
            ...state,
            [e.target.email]:value,
            [e.target.password]:value
        })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
          email: state.email,
          password:state.password
        };

        axios.post("https://app.codex.today/login", userData).then((response) => {
            console.log("User Logged already");
          });
        };
    return(
        <div className="login-body">
            <h1 style={{textAlign:"center"}}>Login Form</h1>
        <div className="login">
            <div className="loginblock">
                <form className="loginform" onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <label htmlFor="email">Email :</label>
                    <input type="email" placeholder="you@example.com" onChange={handleChange}/>
                    <label htmlFor="password">Password :</label>
                    <input type="password" placeholder="Enter 6 more characters" onChange={handleChange}/>
                    <button className="log-btn" type="submit">Login</button>
                </form>
                <img src="https://res.cloudinary.com/cliqtick/image/upload/v1678959844/students/test_rwctqg.jpg" alt=".."/>
            </div>
        </div>
        </div>
    )
}
export default Login;