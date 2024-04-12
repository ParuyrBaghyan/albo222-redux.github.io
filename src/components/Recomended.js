import { list } from "../utils/list";
import React from "react";
import ProductShape from "./UI/ProductShape";

export default function Recomended() {
  return (
    <React.Fragment>
      <h2 className="recomended-content">Առաջարկվող ապրանքներ</h2>
      <div className="products-container">
        {list.map((prod, i) => {
          if (i > 70 && i < 80) {
            return <ProductShape prod={prod} key={prod.id} />;
          }
        })}
      </div>
    </React.Fragment>
  );
}
