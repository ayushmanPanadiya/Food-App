import React from "react";
import MenuList from "./menulist";
import { useState } from "react";



const ResCategory = ({resCatinfo,showMenu,setshowIndex})=>{
const { title, itemCards } = resCatinfo?.card?.card;


 const clickHandler =()=>{
   setshowIndex();
  }
  return (
    <div>
       <div className=" mt-0.5  bg-white px-4 py-3 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-all duration-300">
         
        <div className="flex justify-between " onClick={clickHandler} >
             <h2 className="font-semibold text-lg text-gray-800">{title} ({itemCards.length})</h2>
         
         <span className="text-xl text-gray-600 transform transition-transform duration-300">⌄</span>
        </div>

         <div>
          {showMenu && <MenuList menuInfo={itemCards}/>}
        </div>
        </div>
        
    </div>
  )

}

export default ResCategory;