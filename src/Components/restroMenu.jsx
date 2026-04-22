import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestroMenu from "../utils/useRestroMenu";

const RestroMenu = ()=>{
 
const {resId} = useParams();

const resInfo = useRestroMenu(resId);

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
  <div className="menuHeader ml-100  ">
    <div className="menuPageMain bg-gray-100 w-200 h-40  shadow-gray-500 rounded-xl">
    <h1 className="font-bold text-2xl mx-5 pt-4">{info?.name}</h1>
    <div className="menuPageSubmain ml-5 mt-2">
        <h3 className="menuRating">{info?.avgRating}⭐ ratings</h3>
        <h3>Outlet : {info?.locality}</h3>
        <h3>delivery time : {info?.sla?.minDeliveryTime}-{info?.sla?.maxDeliveryTime} min</h3>
    </div>

    </div>
   <div className="menuList w-200">

  {/* main data */}
  

 <div className="menuList mt-5 ">
  {dishes?.length ? (
    dishes.map((item) => {
      const info = item?.card?.info;
      const price = info?.price || info?.defaultPrice;

      return (
        <div className="mainMenu mainMenu   p-4 mb-4 bg-white rounded-lg shadow-sm" key={info?.id}>
          <h2 className="menuDish font-bold mt-10">{info?.name}</h2>
          <h2 className="dishPrice mt-1">₹ {price / 100}</h2>
          <div className="w-120 mt-2.5 h-15 overflow-hidden"><h2  className="dishInfo text-sm">{info?.description}</h2></div>
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

