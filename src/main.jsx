import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './Pages/Home';
import { PrivacyPolicyUpperLower } from './Pages/PrivacyPolicyUpperLower';
import { NoPage } from './Pages/NoPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/privacy-policy-upper-lower",
    element: <PrivacyPolicyUpperLower />
  },
  {
    path: "*",
    element: <NoPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
