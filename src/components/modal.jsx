import "../styles/modal.css";
import { ImCross } from "react-icons/im";

let ProductModal = ({ exit, name, type, quantity, status, categry }) => {
  return (
    <div className="product-modal">
      <div className="exit-payments" onClick={exit}>
        <ImCross />
      </div>

      <div className="content">
        <p>{name}</p>
        <p>{categry}</p>
        <p>{type}</p>
        <p>{quantity}</p>
        <p>{status}</p>
      </div>
    </div>
  );
};

export default ProductModal;
