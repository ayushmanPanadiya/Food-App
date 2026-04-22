import React from "react";  
import RestroCard,{enhancedRestro} from "./RestroCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

const API_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4788078&lng=77.4920192&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"



const Body = () => {

const[restro, setrestro] = useState([]);
const[filteredRes,setfilteredRes] = useState([]);

const RestroOpen = enhancedRestro(RestroCard);

  useEffect(()=>{
  fetchApi();
},[]);

const[searchText,setsearchText] = useState("");

const fetchApi = async()=>{
   let response = await fetch(API_URL);
   let data = await response.json();

  const restaurants =
    data?.data?.cards?.find(
      (card) =>
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

  setrestro(restaurants);
  setfilteredRes(restaurants);
}


console.log(restro);
  
  // if(restro.length===0){
  //   return <Shimmer/>
  // }

  return (
    <div className="bodyCont ">
     
     <div className="flex flex-wrap">
      <input type="text" className="searchBox pl-2 w-70 border-1 rounded-sm m-5 outline-none bg-transparent " value={searchText} placeholder="Search restaurants, dishes & more" onChange={(e)=>{
      setsearchText( e.target.value);
       }}></input>
    
    
    <button
  className="searchBtn  bg-gray-200 text-black px-3 py-2 mx-2 mt-4 rounded-lg h-8 flex items-center justify-center hover:cursor-pointer" 
  onClick={() => {
    const filtered = restro.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setfilteredRes(filtered);
  }}
>
  Search
</button>

      <button className="filter-btn bg-gray-200 text-black px-3 py-2 mx-2 mt-4 rounded-lg h-8 flex items-center justify-center hover:cursor-pointer " onClick={()=>{
        const filtered = restro.filter(
         (x) => x.info.avgRating >= 4.5
);

setfilteredRes(filtered);
      }
       
      } >Filter Restro</button>
     </div>
     <div className="appBody flex flex-wrap ">
      {filteredRes.map((res) => (
  <Link to={`/restaurants/${res.info.id}`} key={res.info.id}>
    {res.info.isOpen
      ? <RestroOpen resData={res} /> 
      : <RestroCard resData={res} />}
  </Link>
))}
      
      </div> 
      
    </div>
  );
};

export default Body;

