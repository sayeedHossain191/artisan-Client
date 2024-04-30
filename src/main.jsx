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
        path: '/details/:id',
        element: <ArtDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/artCraft/${params.id}`)
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
        loader: () => fetch('http://localhost:5000/artCraft')
      },
      {
        path: '/update/:id',
        element: <PrivateRoute>
          <UpdateDetails />
        </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/artCraft/${params.id}`)
      },
      {
        path: "/allArtAndCraft",
        element: <AllArtAndCraft />,
        loader: () => fetch('http://localhost:5000/user')
      },
      {
        path: "/allArtAndCraft",
        element: <ArtAndCraftCategories />,
        loader: () => fetch('http://localhost:5000/ceramicsAndPottery')
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
