import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/MainLayout/MainLayout.jsx';
import Home from './components/Pages/Home.jsx';
import Favourite from './components/Pages/Favourite.jsx';
import Login from './components/Pages/Login.jsx';
import Errorpage from './components/ErrorPage/Errorpage.jsx';
import Phone from './components/Pages/Phone.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/phone.json')
      },
      {
        path: '/favourite',
        element: <Favourite></Favourite>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/phones/:id',
        element: <Phone></Phone>,
        loader: () => fetch('/phone.json')

      },
    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
