import { useContext } from "react";
import { useState } from "react";
import { Context } from "../store/Context";
import { useDispatch } from "react-redux";
import { moneyActions } from "../store/money-slice";
import { useSelector } from "react-redux";
export default function Counts({ prod }) {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const $ = useContext(Context);
  const cart = useSelector(state => state.cart.cart)
  function handleItemReduce() {
    if (prod.point === "p") {
      if (prod.quanity <= 1) {
        setCount((prod.quanity = 1));
      } else {
        setCount((prod.quanity -= 1));
        dispatch(moneyActions.countTheMoney(prod));
        if (cart.includes(prod)) {
          dispatch(moneyActions.totalForCountsReduce1(prod));
        }
      }
    } else {
      if (prod.quanity <= 0.25) {
        setCount((prod.quanity = 0.25));
      } else {
        setCount((prod.quanity -= 0.25));
        dispatch(moneyActions.countTheMoney(prod));
        if (cart.includes(prod)) {
          dispatch(moneyActions.totalForCountsReduce2(prod));
        }
      }
    }
  }

  function handleItemAdd() {
    if (prod.point === "p") {
      setCount((prod.quanity += 1));
      dispatch(moneyActions.countTheMoney(prod));
      if (cart.includes(prod)) {
        dispatch(moneyActions.totalForCountsAdd1(prod));
      }
    } else {
      setCount((prod.quanity += 0.25));
      dispatch(moneyActions.countTheMoney(prod));
      if (cart.includes(prod)) {
        dispatch(moneyActions.totalForCountsAdd2(prod));
      }
    }
  }

  return (
    <div className="counts">
      <button onClick={handleItemReduce}>-</button>
      <span>{prod.quanity}</span>
      <button onClick={handleItemAdd}>+</button>
    </div>
  );
}
