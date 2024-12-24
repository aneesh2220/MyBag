import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormI from "./pages/form.jsx";
import Dashboard from "./pages/dashboard.jsx";
import SettingsI from "./pages/settings.jsx";
import Login from "./pages/login.jsx";
import Authpage from "./pages/authentication.jsx";
import ProductList from "./pages/productlist.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/form",
    element: <FormI />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/settings",
    element: <SettingsI />,
  },
  {
    path: "/auth",
    element: <Authpage />,
    
  },
  {
    path:"/products",
    element:<ProductList/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
