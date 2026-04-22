import React from "react";
import { IMG_URL } from "../assets/URL";
const RestroCard = (props) => {

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla
  } = props.resData?.info || {};   
  return (
    <div className="restroCont w-64 mx-5 my-2 bg-gray-100 rounded-lg overflow-hidden 
                border border-transparent 
                hover:border-gray-400 hover:shadow-md 
                transition-all duration-200">
      <img
        src={IMG_URL + cloudinaryImageId}
        className="restroImg w-full h-40 object-cover"
        alt="restaurant"
      />

      <h2 className="font-bold my-2 text-xl ml-2">{name}</h2>
      <p className="ml-2">{cuisines?.join(", ")}</p>
      <p className="ml-2">⭐ {avgRating}</p>
      <p className="ml-2">{sla?.deliveryTime} mins</p>
      <p className="ml-2">{costForTwo}</p>
    </div>
  );
};

export default RestroCard;

const getRatingCount = (str) => {
  if (!str) return 0;

  if (str.includes("K")) {
    return parseFloat(str) * 1000;
  }

  return parseInt(str);
};
// higher order component

export const enhancedRestro =(RestroCard)=>{
   
  return (props)=>{
  
  const totalRating =  props?.resData?.info?.totalRatingsString;
  const ratingCount = getRatingCount(totalRating);
 
    return(
      <div>
        {ratingCount > 5000 && (
          <label className="absolute bg-red-600 text-white px-2 py-1 rounded-md m-2 text-xs">
            🔥 Trending
          </label>
        )}
        {ratingCount > 1000 && ratingCount <= 5000 && (
          <label className="absolute bg-green-600 text-white px-2 py-1 rounded-md m-2 text-xs">
            ⭐ Popular
          </label>
        )}
        <RestroCard {...props}/>
      </div>
    )
  }
}