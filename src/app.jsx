import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About.jsx";
import Contact from "./Components/contactus";
import Error from "./Components/error.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));


const App = () => {
  return (
    <div className="mainApp">
      <Header />
      <Outlet />
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
             {
    path : "/Home",
    element : <Body/>,

  },{
    path : "/contact",
    element : <Contact/>,

  },
  {
    path : "/About",
    element : <About/>,
   

  },
    ],
    errorElement : <Error/>
  },

])

root.render(<RouterProvider router={AppRouter} />);