import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About.jsx";
import Contact from "./Components/contactus";
import Error from "./Components/error.jsx";
import RestroMenu from "./Components/restroMenu.jsx";

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
        path: "restaurants/:resId",
        element: <RestroMenu />,
      },
    ],
  },
]);
root.render(<RouterProvider router={AppRouter} />);