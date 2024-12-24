import "../styles/modal.css";
import { ImCross } from "react-icons/im";

let ProductModal = ({ exit, val }) => {
  return (
    <div className="product-modal">
      <div className="exit-payments" onClick={exit}>
        <ImCross />
      </div>

      <div className="content">
        <p>{val.name}</p>
        <p>{val.categry}</p>
        <p>{val.type}</p>
        <p>{val.quantity}</p>
        <p>{val.status}</p>
      </div>
    </div>
  );
};

export default ProductModal;
