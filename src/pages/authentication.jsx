import { useState } from "react";
import Login from "./login.jsx";
import Signup from "./signup.jsx";
import "../styles/login.css";



let Authpage = () => {
  let [activeTab, setTab] = useState(0);

  

  return (
    <div className="login-page">
      <div className="login-inbox">
        <h3>{activeTab===0?"Login" :"Sign up"}</h3>
        <div className="login-button-group">
          <button onClick={() => setTab(0)} className={` ${activeTab===0 ?"active-btn":""}`}>Login</button>
          <button onClick={() => setTab(1)}  className={` ${activeTab===1 ?"active-btn":""}`}>Sign-up</button>
        </div>

        <div className="login-content">
          {activeTab === 0 ? <Login /> : <Signup />}
       
        </div>
      </div>
    </div>
  );
};

export default Authpage;
