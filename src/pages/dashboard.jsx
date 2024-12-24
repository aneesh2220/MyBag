import itemData from "../data/items.js";
import Sidebar from "../components/sidebar.jsx";
import { dataBase } from "../firebase.js";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useEffect } from "react";

let Dashboard = () => {





  let fetchData = async () => {
    let fetchDataCall = await getDocs(collection(dataBase, "products"));
    let itemo = fetchDataCall.docs.map((val) => ({
      id: val.id,
       ...val.data(),
    }));

    console.log(itemo);




    
  };





  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="dashboard">
      <Sidebar activa={0} />
          </div>
  );
};

export default Dashboard;
