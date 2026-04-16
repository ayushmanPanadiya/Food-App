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
    <div className="restroCont">
      <img
        src={IMG_URL + cloudinaryImageId}
        className="restroImg"
        alt="restaurant"
      />

      <h2>{name}</h2>
      <p>{cuisines?.join(", ")}</p>
      <p>⭐ {avgRating}</p>
      <p>{sla?.deliveryTime} mins</p>
      <p>{costForTwo}</p>
    </div>
  );
};

export default RestroCard;