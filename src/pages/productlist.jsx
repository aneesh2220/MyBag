import { getDocs, collection, query, where } from "firebase/firestore";
import Sidebar from "../components/sidebar.jsx";
import { dataBase } from "../firebase.js";
import { useEffect, useState } from "react";
import "../styles/productList.css";
import ProductModal from "../components/modal.jsx";

let ProductList = () => {
  let [productList, setproductList] = useState([]);
  let [modal, setModal] = useState(false);
  let[current,setCurrent]= useState();

  let fetchProducts = async () => {
    let userId = localStorage.getItem("userId");
    let collectionRef = collection(dataBase, "products");
    let runQ = query(collectionRef, where("userId", "==", userId));

    let loadData = await getDocs(runQ);
    let documents = loadData.docs.map((val) => ({ id: val.id, ...val.data() }));
    setproductList(documents);
    console.log(documents);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="product-page">
      <Sidebar activa={2} className="sidebar" />

      <div className="product-list">
        <div className="list-header">
          <p>Name</p>
          <p>Categry</p>
          <p>Type</p>
          <p>Quantity</p>
          <p>Status</p>
        </div>

        {productList.map((val, index) => (
          <div
            key={val.id}
            className="list-item"
            onClick={() => {
              setModal(true);
              setCurrent(val)
            }}
          >
            <p>{val.name}</p>

            <p>{val.categry}</p>
            <p>{val.type}</p>
            <p>{val.quantity}</p>
            <p>{val.status}</p>
          </div>
        ))}

        {modal === true ? (
          <ProductModal
val={current}
            exit={() => {
              setModal(false);
            }}
          />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
