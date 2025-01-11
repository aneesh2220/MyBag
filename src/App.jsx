import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import FormI from "./pages/form.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Authpage from "./pages/authentication.jsx";import ProductList from "./pages/productlist.jsx";
;


function App() {

  let userId = localStorage.getItem("userId")
  return (
    <div className="App">
      {
        userId !=null
        ?<ProductList/>
        :<Authpage/>
        
      }



    </div>
  );
}

export default App;
