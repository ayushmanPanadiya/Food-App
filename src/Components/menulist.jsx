import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const MENU_URL= "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/";
const MenuList =({menuInfo})=>{

  const dispatch = useDispatch();
  const addItemHandler=(menu)=>{
    // dispatching item
    dispatch(addItem(menu));
  }

    return(
        menuInfo.map((menu)=>(
            <div key={menu?.card?.info?.id} className="flex p-4 mb-4 bg-white rounded-lg shadow-sm justify-between">
            
           <div className="mainMenu mainMenu   ">
                     
          <h2 className="menuDish font-bold mt-10">{menu?.card?.info?.name}</h2>
         <h2 className="dishPrice mt-1">₹ {menu?.card?.info?.price / 100}</h2>
          <div className="w-120 mt-2.5 h-15 overflow-hidden"><h2  className="dishInfo text-sm">{menu?.card?.info?.description}</h2></div>
        </div>
        <div className="relative w-40 mr-5 mt-7 shrink-0">
  <img
    src={MENU_URL + menu?.card?.info?.imageId}
    className="w-40 h-30 object-cover rounded-lg"
    alt={menu?.card?.info?.name}
  />
  <button className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white text-green-600 font-bold text-sm px-4 py-1 rounded-lg shadow-md border border-green-600 whitespace-nowrap cursor-pointer "
     onClick={()=>addItemHandler(menu)}>
    + add item
  </button>
</div>
       
        </div>
        ))
    )
          
}
export default MenuList;