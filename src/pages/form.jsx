import { useState } from "react";
import "../styles/form.css";
import "../data/items.js";
import { useNavigate } from "react-router-dom";
import Dropdown from "../components/dropdown.jsx";
import Sidebar from "../components/sidebar.jsx";
import foodCategories, {
  clothingCategories,
  electronicsCategories,
  genderCategries,
} from "../hooks/constants.js";

import { dataBase } from "../firebase.js";
import { collection, addDoc } from "firebase/firestore";

let FormI = () => {
  let [name, setName] = useState("");
  let [quantity, setQuantity] = useState(0);
  let [selectItem, setSelectItem] = useState("");
  let [categry, setCategry] = useState("");
  let [brand, setBrand] = useState("");
  let [gender, setGender] = useState("");

  let navigate = useNavigate();

  let handleClick = async (e) => {
    e.preventDefault();

    let userId = localStorage.getItem("userId");

    let data = {
      name: name,
      quantity: quantity,
      categry: categry,
      type: selectItem,
      status: "instock",
      userId: userId,
    };

    if (selectItem === "electronics") {
      data.brand = brand;
    }
    if (selectItem === "clothing") {
      data.brand = brand;
      data.gender = gender;
    }

    await addDoc(collection(dataBase, "products"), data);

    navigate("/products");
  };

  const options = [
    { label: "food", value: "food" },
    { label: "electronics", value: "electronics" },
    { label: "clothing", value: "clothing" },
  ];

  return (
    <div className="formI">
      <Sidebar activa={1} />

      <form action="submit" onSubmit={handleClick}>
        <div className="form-Inbox">
          <p className="inbox-heading">Add Item </p>
          <div className="input-holder">
            <Dropdown options={options} onSelectionChange={setSelectItem} />

            <input
              type="text"
              id="item-name"
              placeholder="Name of the item"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              id="item-quantity"
              placeholder="Queantity of the item"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />

            {selectItem === "food" ? (
              <Dropdown
                options={foodCategories}
                onSelectionChange={setCategry}
              />
            ) : selectItem === "electronics" ? (
              <div>
                {" "}
                <Dropdown
                  options={electronicsCategories}
                  onSelectionChange={setCategry}
                />
                <input
                  type="text"
                  id="item-quantity"
                  placeholder="Brand of the item"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                />
              </div>
            ) : selectItem === "clothing" ? ( 
              <div>
                <input
                  type="text"
                  id="item-quantity"
                  placeholder="Brand of the item"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                />
                <Dropdown
                  options={clothingCategories}
                  onSelectionChange={setCategry}
                />
                <Dropdown
                  options={genderCategries}
                  onSelectionChange={setGender}
                />
              </div>
            ) : (
              <div></div>
            )}
          </div>

          <div className="add-btn">
            <input type="submit" placeholder="Add" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormI;
