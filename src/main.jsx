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
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Blog from './Components/Blog/Blog.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<ErrorPage></ErrorPage>,
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
        loader:()=>fetch('/data.json'),
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
      {
        path:'/blog',
        
        element:<Blog></Blog>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
