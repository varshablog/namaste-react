

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";

import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import Cart from "./components/Cart.js"
import RestaurantMenu from "./components/RestaurantMenu";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


import UserContext from "./utils/UserContext.js"
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";



const AppLayout=()=>{
   const [userInfo,setUserInfo]=useState();

   //Authentication
   useEffect(()=>{
      const data={
        name:"Akshay Saini",
      }
      setUserInfo(data.name);
   },[])

    return(
      <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser:userInfo,setUserInfo}}>
      <div id="app">
         <Header/>
          <Outlet />
      </div>
      </UserContext.Provider>
      </Provider>
  )
}

const root=ReactDOM.createRoot(document.getElementById("root"));

 const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children:[
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/",
        element:<Body />
      },
      // resId is dynamic variable
      {
        path:"/Restaurants/:resId",
        element:<RestaurantMenu />
      },
      {
        path:"/cart",
        element:<Cart/>
      }

    ],
    //For Error page
    errorElement:<Error />
  },
  
 ])

 root.render(<RouterProvider router={appRouter} />);