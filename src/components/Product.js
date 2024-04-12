import { list } from "../utils/list";
import React from "react";

import ProductShape from "./UI/ProductShape";
import {  useSelector } from "react-redux";

export default function Product() {
  const activeCat = useSelector(state => state.category.activeCat)
  return (
    <React.Fragment>
      <h2 className="activeCat">{activeCat}</h2>
      <div className="single-container">
        {list.map((prod) => {
          if (prod.category === activeCat) {
            return <ProductShape prod={prod} key={prod.id}/>;
          }
        })}
      </div>
    </React.Fragment>
  );
}
