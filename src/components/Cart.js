import Counts from "./Counts";
import { Link } from "react-router-dom";
import GrandTotal from "./GrandTotal";
import { useDispatch } from "react-redux";
import { moneyActions } from "../store/money-slice";
import { useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  function handleRemoveItem(prod) {
    dispatch(cartActions.removeFromCart(prod.id));
    dispatch(moneyActions.totalForCart(prod));
    prod.point === "p" ? (prod.quanity = 1) : (prod.quanity = 0.25);
  }

  return (
    <div className="cart-container">
      <div className="cart">
        <div
          className="cart-information"
          style={{ display: cart.length === 0 ? "none" : "grid" }}
        >
          <span></span>
          <h3>ԱՊՐԱՆՔ</h3>
          <h3>ԳԻՆ</h3>
          <h3>ՔԱՆԱԿ</h3>
          <h3>ԵՆԹԱԳՈՒՄԱՐ</h3>
          <span></span>
        </div>
        {cart.length !== 0
          ? cart.map((prod) => {
              return (
                <div className="cart-item" key={prod.id}>
                  <div
                    className="back"
                    style={{ background: `url(${prod.product})` }}
                  ></div>
                  <h2>{prod.name}</h2>
                  <span>{prod.price}դր</span>
                  <Counts prod={prod} />
                  <span>{prod.quanity * prod.price}դր</span>
                  <button
                    onClick={() => {
                      handleRemoveItem(prod);
                    }}
                  >
                    x
                  </button>
                </div>
              );
            })
          : "Զամբյուղը դատարկ է"}
        <div
          className="cart-promo"
          style={{ display: cart.length === 0 ? "none" : "flex" }}
        >
          <button>
            <Link to="/Խանութ">ՇԱՐՈՒՆԱԿԵԼ ԳՆՈՒՄՆԵՐԸ</Link>
          </button>
          <div className="promo">
            <input type="text" placeholder="Կտրոնի կոդ" />
            <button>ԿԻՐԱՌԵԼ ԿՏՐՈՆԸ</button>
          </div>
        </div>
        <div
          className="total"
          style={{ display: cart.length === 0 ? "none" : "flex" }}
        >
          <GrandTotal />
        </div>
      </div>
    </div>
  );
}
