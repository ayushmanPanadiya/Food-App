import React from "react";
import image from 'url:../assets/logo.png';
import { useState } from "react";
import { Link } from "react-router-dom";
import useUserOnline from "../utils/useUserOnline";


const Header = () => {


const [btnName,setbtnName] = useState("login")


const onlineStatus = useUserOnline();



    console.log(image);
  return (
    <div className="headCont flex justify-between shadow-sm shadow-gray-300 mb-2 h-20">
      <img
        src={image}
        className="logoImg h-20"
        alt="logo"
      />
      <div className="navCont mr-5 flex items-center ">
        
        <ul className="navItems flex">
          <li className="mx-5 font-bold text-lg">
            Online Status :{onlineStatus?"✅":"❌"}
          </li>
          <li className="mx-2 font-bold text-lg"><Link  to="/Home" >Home</Link></li>
          <li className="mx-2 font-bold text-lg"><Link to="/Contact" >Contact Us</Link></li>
          <li className="mx-2 font-bold text-lg">Help</li>
          <li className="mx-1 font-bold text-lg"><Link  to="/grocery" >Grocery</Link></li>
          <li className="mx-2 font-bold text-lg"><Link to="/About">About Us</Link></li>
          <li className="mx-2 font-bold text-lg">Cart</li>
          <button className="logBtn font-bold text-lg"  onClick={()=>{
            btnName === "login"?setbtnName("logout"):setbtnName("login")
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

