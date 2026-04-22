import { useEffect,useState } from "react";
const Menu_API = "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4784527&lng=77.4906915&restaurantId="


const useRestroMenu = (resId) =>{

    const[resInfo,setresInfo]= useState(null)
       
    useEffect(()=>{
        fetchMenu();
    },[])
 

 const fetchMenu = async()=>{
   const menuData = await fetch(Menu_API+resId) 
   const menu = await menuData.json();
  
   setresInfo(menu)

 }
 return resInfo;

}

export default useRestroMenu;