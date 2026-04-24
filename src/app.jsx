import React,{lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About.jsx";
import Contact from "./Components/contactus";
import Error from "./Components/error.jsx";
import RestroMenu from "./Components/restroMenu.jsx";
import { useContext,useState,useEffect } from "react";
import UserData from "./utils/context.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.jsx";
import CartPage from "./Components/cart.jsx";
const Grocery = lazy(()=>import("./Components/grocery.jsx"))

const root = ReactDOM.createRoot(document.getElementById("root"));



const App = () => {
  
  const[userName,setUserName] = useState();
useEffect(()=>{
  const data = {
    name : "Mr. Beast"
  }
  setUserName(data.name);
},[])

  return (
    <Provider store={appStore}>
     <UserData.Provider value={{loggedUser : userName}}>
    <div className="mainApp">
      <Header />
      <UserData.Provider value= {{loggedUser:"Mr least"}}>
      <Outlet />
      </UserData.Provider>
    </div>
    </UserData.Provider> 
    </Provider>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,   // ✅ default route
        element: <Body />,
      },
      {
        path: "contact",   // ✅ no leading slash needed
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "grocery",
        element: <Suspense fallback={<h1>loading....</h1>}><Grocery /></Suspense>,
      },
      {
        path: "restaurants/:resId",
        element: <RestroMenu />,
      },
    ],
  },
]);
root.render(<RouterProvider router={AppRouter} />);