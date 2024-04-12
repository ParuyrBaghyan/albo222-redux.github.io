import Counts from "../Counts";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { favoriteActions } from "../../store/favorite-slice";
import { cartActions } from "../../store/cart-slice";
import { moneyActions } from "../../store/money-slice";

export default function ProductShape({ prod }) {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favorite.favorite);
  const cart = useSelector((state) => state.cart.cart);

  const addCart = (prod) => {
    if (!cart.includes(prod)) {
      dispatch(cartActions.addToCart(prod));
      dispatch(moneyActions.totalForApp(prod));
    }
  };

  function handleAddToHeart(prod) {
    if (favorite.includes(prod)) {
      dispatch(favoriteActions.removeFromFav(prod.id));
    } else {
      dispatch(favoriteActions.addToFav(prod));
    }
  }

  return (
    <div className="products-item">
      <FaHeart
        className="active-heart"
        onClick={() => handleAddToHeart(prod)}
        style={{
          fill: favorite.includes(prod) ? "gold" : "#288435",
        }}
      />
      <div
        className="products-picture"
        style={{ background: `url(${prod.product})` }}
      ></div>
      <div className="products-content">
        <h2>{prod.name}</h2>
        <span>
          {prod.price} դրամ 1 {prod.point === "p" ? "հատ" : "կգ"}-ը
        </span>
        <Counts prod={prod} />
        <button
          style={{
            color: cart.includes(prod) ? "gold" : "#288435",
          }}
          onClick={() => {
            addCart(prod);
          }}
        >
          ԱՎԵԼԱՑՆԵԼ
        </button>
      </div>
    </div>
  );
}
