import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestroMenu from "../utils/useRestroMenu";
import ResCategory from "./resCategory";

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

const categoryData = resInfo?.data?.cards
  ?.find((card) => card?.groupedCard)
  ?.groupedCard?.cardGroupMap?.REGULAR?.cards
  ?.filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

console.log(categoryData);  

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
    <div>
      {categoryData?.map((resCat) => (
  <ResCategory
    key={resCat?.card?.card?.title}
    resCatinfo={resCat}
  />
))}
    </div>
    



    </div>
    </div> 
  
  
);
}
 


export default RestroMenu;

