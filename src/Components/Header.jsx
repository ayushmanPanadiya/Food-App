import React from "react";
import image from 'url:../assets/logo.png';
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useUserOnline from "../utils/useUserOnline";
import UserData from "../utils/context";
import { useSelector } from "react-redux";
const Header = () => {


const [btnName,setbtnName] = useState("login")

const data = useContext(UserData);
const onlineStatus = useUserOnline();

// subscribing to the store using selector
const cartItems = useSelector((store)=> store.cart.items)

    console.log(image);
  return (
    <div className="headCont flex justify-between shadow-sm shadow-gray-300 mb-2 h-20">
  
  {/* Logo + Username together on the left */}
  <div className="flex items-center gap-3">
    <img
      src={image}
      className="logoImg h-20"
      alt="logo"
    />
    <h3 className="font-bold text-lg text-gray-700">Hello, {data.loggedUser}</h3>
  </div>

  {/* Nav on the right */}
  <div className="navCont mr-5 flex items-center">
    <ul className="navItems flex">
      <li className="mx-5 font-semibold text-lg">
        Online Status :{onlineStatus ? "✅" : "❌"}
      </li>
      <li className="mx-3 font-semibold text-lg"><Link to="/">Home</Link></li>
      <li className="mx-3 font-semibold text-lg"><Link to="/Contact">Contact Us</Link></li>
      <li className="mx-3 font-semibold text-lg">Help</li>
      <li className="mx-3 font-semibold text-lg"><Link to="/grocery">Grocery</Link></li>
      <li className="mx-3 font-semibold text-lg"><Link to="/About">About Us</Link></li>
      <li className="mx-3 font-semibold text-lg"><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
      <button className="logBtn font-bold text-lg" onClick={() => {
        btnName === "login" ? setbtnName("logout") : setbtnName("login")
      }}>{btnName}</button>
    </ul>
  </div>

</div>
  );
};

export default Header;

