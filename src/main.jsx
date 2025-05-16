import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Layout from './Components/Layout/Layout.jsx';
import Home from './Components/Home/Home.jsx';
import Statics from './Components/Statics/Statics.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import ExploreCutting from './Components/ExploreCutting/ExploreCutting.jsx';
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:'/',
        loader:()=>fetch('/data.json'),
        element:<Home></Home>
      },
      {
        path:'/home',
        loader:()=>fetch('/data.json'),
        element:<Home></Home>
      },
      {
        path:'/statics',
        element:<Statics></Statics>
      },
      {
        path:'/dashboard',
        loader:()=>fetch('/data.json'),
        element:<Dashboard></Dashboard>
      },
      {
        path:'/explore',
        loader:()=>fetch('/data.json'),
        element:<ExploreCutting></ExploreCutting>
      },
      {
        path:'/explore/:productId',
        loader:()=>fetch('/data.json'),
        element:<ProductDetails></ProductDetails>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
