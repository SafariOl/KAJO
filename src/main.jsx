import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/style.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,
    }
  ],
  {
    future: {
      v7_skipActionErrorRevalidation: true,
    },
  }
);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
