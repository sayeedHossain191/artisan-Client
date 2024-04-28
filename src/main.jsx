import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Root from './layout/Root';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import ArtDetails from './pages/ArtDetails';
import AddCraft from './pages/AddCraft';
import Login from './pages/Login';
import Register from './pages/Register';
import MyArtAndCraft from './pages/MyArtAndCraft';
import AllArtAndCraft from './pages/AllArtAndCraft';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('http://localhost:5000/artCraft')
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: "/details",
        element: <ArtDetails />,
        loader: () => fetch('http://localhost:5000/artCraft')
      },
      {
        path: "/addCraft",
        element: <AddCraft />
      },
      {
        path: "/myArtAndCraft",
        element: <MyArtAndCraft />
      },
      {
        path: "/allArtAndCraft",
        element: <AllArtAndCraft />
      },


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
