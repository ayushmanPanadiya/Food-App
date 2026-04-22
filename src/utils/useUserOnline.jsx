import { useState,useEffect } from "react";

const useUserOnline = () =>{
   
  const [onlineStatus,setonlineStatus] = useState(true);

   useEffect(()=>{
      window.addEventListener("online",()=>{
        setonlineStatus(true);
      });
     
      window.addEventListener("offline",()=>{
        setonlineStatus(false);
      })

   },[])
   
   
   return onlineStatus; 
}

export default useUserOnline;