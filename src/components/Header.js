import { LOGO_URL } from "../utils/contants";
import { useState } from "react";
const Header= () =>{
    const [btnlogin,setbtnlogin]=useState("Login");
    return (
        <div className="header">
            <div className="logocontainer">
                <img className="logo" src={ LOGO_URL } />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
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