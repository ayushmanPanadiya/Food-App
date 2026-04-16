import React from "react";  
import RestroCard from "./RestroCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";

const API_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4788084&lng=77.4920192&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"                                                 




const Body = () => {

const[restro, setrestro] = useState([]);
const[filteredRes,setfilteredRes] = useState([]);

  useEffect(()=>{
  fetchApi();
},[]);

const[searchText,setsearchText] = useState("");

const fetchApi = async()=>{
   let response = await fetch(API_URL);
   let data = await response.json();

   setrestro(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   setfilteredRes(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}



  
  if(restro.length===0){
    return <Shimmer/>
  }

  return (
    <div className="bodyCont">
     
     <input type="text" className="searchBox" value={searchText}  onChange={(e)=>{
      setsearchText( e.target.value);
       }}></input>
    
    
    <button
  className="searchBtn"
  onClick={() => {
    const filtered = restro.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setfilteredRes(filtered);
  }}
>
  Search
</button>

      <button className="filter-btn" onClick={()=>{
        const filtered = restro.filter(
         (x) => x.info.avgRating >= 4.5
);

setrestro(filtered);
      }
       
      } >Filter Restro</button>

      <div className="appBody">
      {filteredRes.map((res) => (
  <RestroCard key={res.info.id} resData={res} />
))}
      
      </div>
    </div>
  );
};

export default Body;