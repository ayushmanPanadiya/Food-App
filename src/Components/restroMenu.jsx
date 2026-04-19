import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Menu_API = "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4784527&lng=77.4906915&restaurantId="
const RestroMenu = ()=>{
 
    const[resInfo,setresInfo]= useState(null)
    

    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu();
    },[])
 

 const fetchMenu = async()=>{
   const menuData = await fetch(Menu_API+resId) 
   const menu = await menuData.json();
  
   setresInfo(menu)

 }
 if (!resInfo) return <h1>Loading...</h1>;

// menu header--------------------------------------------

const cards = resInfo?.data?.cards;

const restaurantCard = cards?.find(
  (c) => c?.card?.card?.info
);

const info = restaurantCard?.card?.card?.info;

// menu-----------------------------------------------

const menuCards = resInfo?.data?.cards?.find(
  (c) => c?.groupedCard
)?.groupedCard?.cardGroupMap?.REGULAR?.cards;

const recommended = menuCards?.find(
  (c) => c?.card?.card?.title?.toLowerCase() === "recommended"
);

const dishes = recommended?.card?.card?.itemCards;

return (
  <div className="menuHeader">
    <div className="menuPageMain">
    <h1>{info?.name}</h1>
    <div className="menuPageSubmain">
        <h3 className="menuRating">{info?.avgRating}ratings</h3>
        <h3>Outlet : {info?.locality}</h3>
        <h3>delivery time : {info?.sla?.minDeliveryTime}-{info?.sla?.maxDeliveryTime} min</h3>
    </div>

    </div>
   <div className="menuList">

  {/* main data */}
  

 <div className="menuList">
  {dishes?.length ? (
    dishes.map((item) => {
      const info = item?.card?.info;
      const price = info?.price || info?.defaultPrice;

      return (
        <div className="mainMenu" key={info?.id}>
          <h2 className="menuDish">{info?.name}</h2>
          <h2 className="dishPrice">₹ {price / 100}</h2>
          <h2 className="dishInfo">{info?.description}</h2>
        </div>
      );
    })
  ) : (
    <h2>No dishes found</h2>
  )}
</div>


    </div>
    </div> 
  
  
);
}
 


export default RestroMenu;

