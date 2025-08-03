import { LOGO_URL } from "../utils/contants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header= () =>{
    const [btnlogin,setbtnlogin]=useState("Login");
    return (
        <div className="header">
            <div className="logocontainer">
                <img className="logo" src={ LOGO_URL } />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        btnlogin ==="Login"? setbtnlogin("Logout"): setbtnlogin("Login");
                    }}>{btnlogin}</button>
                </ul>
            </div>
        </div>
    )
} 

export default Header;