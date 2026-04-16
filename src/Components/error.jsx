import { useRouteError } from "react-router-dom";
import React from "react";
const Error = ()=>{

    const err = useRouteError();
    console.log(err);
    return <div  className="errorCont">
        <h1>Oppps!!</h1>
        <h3>something went wrong</h3>
        <h3 >{err.status} : {err.statusText}</h3>
    </div>
}
export default Error;
 