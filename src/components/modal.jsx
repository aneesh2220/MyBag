import { useState } from "react";
import "../styles/modal.css";
import { ImCross } from "react-icons/im";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { dataBase } from "../firebase.js";

let ProductModal = ({ exit, val }) => {
  let [quantity, setQuantity] = useState(val.quantity);
  let [status, setStatus] = useState(val.status);

  let handleSave = async (e) => {
    e.preventDefault();
    try {
      let docRef = doc(dataBase, "products", val.id);
      await updateDoc(docRef, { quantity: quantity });
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
