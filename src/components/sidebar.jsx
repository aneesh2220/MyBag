import "../styles/sidebar.css";
import { IoGridOutline } from "react-icons/io5";
import { IoGrid } from "react-icons/io5";
import { MdOutlineGridView } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdOutlineAddBox } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiFillProduct } from "react-icons/ai";
import { HiOutlineLogout } from "react-icons/hi";
import { auth } from "../firebase.js";
import { signOut } from "firebase/auth";

let Sidebar = ({ activa = 0 }) => {
  let [active, setactive] = useState(activa);

  let navigate = useNavigate();

  let goDashboard = () => {
    setactive(0);
    navigate("/products");
  };

  let addItem = () => {
    setactive(1);
    navigate("/form");
  };

  let goProducts = () => {
    setactive(2);
    navigate("/products");
  };

  let goSetting = () => {
    setactive(3);
    navigate("/settings");
  };

  let setLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("userId");
    navigate("/auth");
  };

  return (
    <div className="sidebar">
      <h2 onClick={goDashboard}>
        <span>
          <BiSolidShoppingBagAlt className="main-icon" />
        </span>
        MY <span>Bag</span>
      </h2>
      <div className="sidebar-content">
        <div
          onClick={addItem}
          className={`divX ${active === 1 ? "active-div" : ""}`}
        >
          <MdOutlineAddBox className="sidebar-icon" />

          <a href="">Add Item</a>
        </div>
        <div
          className={`divX ${active === 2 ? "active-div" : ""}`}
          onClick={goProducts}
        >
          <AiFillProduct className="sidebar-icon" />
          <a href="">Products</a>
        </div>

        <div
          className={`divX ${active === 3 ? "active-div" : ""}`}
          onClick={goSetting}
        >
          <IoSettings className="sidebar-icon" />
          <a href="">Settings</a>
        </div>

        <div className={`divX`} onClick={setLogout}>
          <HiOutlineLogout className="sidebar-icon" />
          <a href="">Logout</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
