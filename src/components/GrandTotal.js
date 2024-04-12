import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function GrandTotal() {

  const cart = useSelector(state => state.cart.cart)
  const total = useSelector(state => state.money.total)
  return (
    <div className="grand-total">
      <h2>
        Զամբյուղի ընդհանուր քանակը <span>{cart.length}</span>
      </h2>
      <div className="price">
        <span>Ենթագումար</span>
        <h4>{total} դր</h4>
      </div>
      <span>Առաքում</span>
      <span>Առաքման արժեքը: 400 դր</span>
      <div className="total-field">
        <h3>Ընդհանուր</h3>
        <h3>{total + 400}դր</h3>
      </div>
      <button>
        <Link to="/Վճարման Համակարգ">ԱՆՑՆԵԼ ՎՃԱՐՄԱՆ</Link>
      </button>
    </div>
  );
}
