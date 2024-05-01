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
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';
import UpdateDetails from './pages/UpdateDetails';
import ArtAndCraftCategories from './components/ArtAndCraftCategories';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch(` https://b9a10-art-and-craft-server.vercel.app/artCraft`)
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
        path: '/details/:id',
        element: <ArtDetails />,
        loader: ({ params }) => fetch(` https://b9a10-art-and-craft-server.vercel.app/artCraft/${params.id}`)
      },
      {
        path: "/addCraft",
        element: <PrivateRoute>
          <AddCraft />
        </PrivateRoute>
      },
      {
        path: "/myArtAndCraft",
        element: <PrivateRoute>
          <MyArtAndCraft />
        </PrivateRoute>,
        loader: () => fetch(` https://b9a10-art-and-craft-server.vercel.app/artCraft`)
      },
      {
        path: '/update/:id',
        element: <PrivateRoute>
          <UpdateDetails />
        </PrivateRoute>,
        loader: ({ params }) => fetch(` https://b9a10-art-and-craft-server.vercel.app/artCraft/${params.id}`)
      },
      {
        path: "/allArtAndCraft",
        element: <AllArtAndCraft />,
        loader: () => fetch(` https://b9a10-art-and-craft-server.vercel.app/user`)
      },
      {
        path: "/categories",
        element: <ArtAndCraftCategories />,
      },


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
