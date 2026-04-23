import React from "react";
const MENU_URL= "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/";
const MenuList =({menuInfo})=>{
    return(
        menuInfo.map((menu)=>(
            <div key={menu?.card?.info?.id}>
            
                <div className="mainMenu mainMenu   p-4 mb-4 bg-white rounded-lg shadow-sm">
                     <img 
          src={MENU_URL+menu?.card?.info?.imgId}
          
        />
          <h2 className="menuDish font-bold mt-10">{menu?.card?.info?.name}</h2>
         <h2 className="dishPrice mt-1">₹ {menu?.card?.info?.price / 100}</h2>
          <div className="w-120 mt-2.5 h-15 overflow-hidden"><h2  className="dishInfo text-sm">{menu?.card?.info?.description}</h2></div>
        </div>
       
        < /div>
        ))
    )
          
}
export default MenuList;