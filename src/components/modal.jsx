import { useState } from "react";
import "../styles/modal.css";
import { ImCross } from "react-icons/im";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { dataBase } from "../firebase.js";
import MyDropdown from "../components/dropdown.jsx";

let ProductModal = ({ exit, val }) => {
  let [quantity, setQuantity] = useState(val.quantity);
  let [status, setStatus] = useState(val.status);


  const options = [
    { label: "in-stock", value: "instock" },
    { label: "out-of-stock", value: "outofstock" },
    { label: "shortage", value: "shortage" },
    { label: "re-stocking", value: "restocking" },
  ];


  let handleSave = async (e) => {
    e.preventDefault();

    if (status === val.status) {
      if (quantity === 0) {
        setStatus('out-of-stock');
      }
      else if (quantity < 3) {
        setStatus('shortage');
      }
    }

    try {
      let docRef = doc(dataBase, "products", val.id);


      await updateDoc(docRef, { quantity: quantity, status: status });
      exit();
    } catch (error) {
      console.log(error);
    }
  };

  let handleDelete = async (e) => {
    

    try {
      let docRef = doc(dataBase, "products", val.id);
      await deleteDoc(doc(dataBase, "products", val.id));
      exit();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="product-modal">
      <div className="exit-payments" onClick={exit}>
        <ImCross />
      </div>

      <div className="content">
        <h2>Basic Details <span><button onClick={handleDelete}>Delete</button></span></h2>
        <p>
          <span>Name:</span>
          {val.name}
        </p>
        <p>
          <span>Category:</span>
          {val.categry}
        </p>
        <p>
          <span>Type:</span>
          {val.type}
        </p>
        <div>
          <div></div>

          <form onSubmit={handleSave}>
          <div className="editable">
              <h2>Quantity and Status</h2>
              <button type="submit">Save</button>
            </div>
            <div className="editable">
              <h3>Quantity:</h3>
              <input
                type="number"
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              />
              
              
            </div>

            <div className="editable">
              <h3>Status:</h3>
              <MyDropdown options={options} onSelectionChange={setStatus}/>
              
              
            </div>
            
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
