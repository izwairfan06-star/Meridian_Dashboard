import { useState } from 'react'
import './App.css'
import {createBrowserRouter, Router, RouterProvider} from "react-router-dom";
import Layout from './Pages/Layout';
import Overview from './Pages/Overview';
import Analytics from './Pages/Analytics';
import Customers from './Pages/Customers';
import Settings from './Pages/Settings';
import Transactions from './Pages/Transactions';
function App() {
  const router=createBrowserRouter([{
        path:"/",
        element:<Layout/>,
        children:[
          {
          index: true,
          element:<Overview/>
        },
        // {
        //   path: "/Overview",
        //   element:<Overview/>

        // },
        {
          path:"/Analytics",
          element: <Analytics/>
        },
      {
        path:"/Customers",
        element: <Customers/>
      },{
        path:"/Settings",
        element:<Settings/>
      },{
        path:"/Transaction",
        element: <Transactions/>
      }]
   }])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
