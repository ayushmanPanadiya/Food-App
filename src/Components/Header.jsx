import React from "react";
import image from 'url:../assets/logo.png';
import { useState } from "react";
import { Link } from "react-router-dom";



const Header = () => {


const [btnName,setbtnName] = useState("login")






    console.log(image);
  return (
    <div className="headCont">
      <img
        src={image}
        className="logoImg"
        alt="logo"
      />
      <div className="navCont">
        
        <ul className="navItems">
          <li><Link  to="/Home" >Home</Link></li>
          <li><Link to="/Contact" >Contact Us</Link></li>
          <li>Help</li>
          <li><Link to="/About">About Us</Link></li>
          <li>Cart</li>
          <button className="logBtn"  onClick={()=>{
            btnName === "login"?setbtnName("logout"):setbtnName("login")
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

