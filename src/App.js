import React, { useState } from "react";
import ReactDom from "react-dom/client"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import UserContext from "./utils/UseContext";


import './index.css'
import GroupByUserComponent from "./Components/GroupByUserComponent";
import HeaderComponent from "./Components/Navbar/HeaderComponent";
const App=()=>{
  

const [navdata,setNavdata]=useState({
    group:{
        flag:false,
        status:true,
        name:false,
        priority:false,

    },
    order:{
        flag:false,
        priority:true,
        title:false
    }
})

    return (
        <>
        <UserContext.Provider value={{
            navdata:navdata,
            setNavdata:setNavdata

        }}>
        <HeaderComponent/>
       <Outlet/>
       </UserContext.Provider>
        </>
    )
}

const Applayout=createBrowserRouter([
   
    {
        path:"/",
        element:<App/>,
        children:[
               {
                path:"/",
                element:<GroupByUserComponent/>
               }
        ]
    }




])


const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Applayout}/>)