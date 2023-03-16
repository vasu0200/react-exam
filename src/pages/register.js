
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/register.css";
function Register(){
    const[state,setState]=useState({
        name:"",
        email:"",
        phone:"",
        password:""
    })
    const handleChange= (e)=>{
        const value= e.target.value;
        setState({
            ...state,
            [e.target.name]:value,
            [e.target.email]:value,
            [e.target.phone]:value,
            [e.target.password]:value,
        })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
          name: state.name,
          email: state.email,
          phone:state.phone,
          password:state.password
        };

        axios.post("https://app.codex.today/createUser", userData).then((response) => {
            console.log( "User Registerd Already");
          });
        };

    return(
        <div className="register-body">
            <h1 style={{textAlign:"center"}}>Register Form</h1>
        <div className="register">
            <div className="regblock">
                <form className="regform" onSubmit={handleSubmit}>
                    <h2>Register</h2>
                    <label htmlFor="name">Name:</label>
                    <input type="text" placeholder="Full Name"  onChange={handleChange} />
                    <label htmlFor="email">Email:</label>
                    <input type="email" placeholder="you@example.com"  onChange={handleChange} />
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" placeholder="0123456789"  onChange={handleChange} />
                    <label htmlFor="password">Password:</label>
                    <input type="password" placeholder="Enter 6 more characters" onChange={handleChange}  />
                    <button className="reg-btn" type="submit">Register</button>
                    <p className="logreg">Already have an account?  <Link to="/login"style={{fontWeight:"500",fontSize:"1.05rem"}}>Login</Link> </p>
                </form>
                <img src="https://res.cloudinary.com/cliqtick/image/upload/v1678959844/students/test_rwctqg.jpg" alt=".."/>
            </div>
        </div>
        </div>
    )
}
export default Register;
