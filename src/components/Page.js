import React, { useState } from "react";
import SweetPagination from "sweetpagination";
import { list } from "../utils/list";
import { categoryListForFilter } from "../utils/categoryListForFilter";
import ProductShape from "./UI/ProductShape";
import { categoryActions } from "../store/category-slice";
import { useDispatch, useSelector } from "react-redux";

export default function Page() {
  const dispatch = useDispatch()
  const activeCat = useSelector(state => state.category.activeCat)
  const [currentPageData, setCurrentPageData] = useState([]);
  const filtered = [];
  list.map((item) => filtered.push(item.price));
  let max = Math.max(...filtered);
  let min = Math.min(...filtered);
  const [minPoint, setMinPoint] = useState(min);
  const [filterProd, setFilterProd] = useState(currentPageData);
  const [show, setShow] = useState(true);

  const filterElements = (x) => {
    let filtered = list.filter(
      (item) => x === item.category && minPoint <= item.price
    );
    setFilterProd(filtered);
  };

  function handleFilterProducts(listName){
    filterElements(listName);
    setShow(false);
    dispatch(categoryActions.setActiveCat(listName));
  }

  return (
    <div>
      <div className="container-picture">
        <h2>ԽԱՆՈՒԹ</h2>
      </div>
      <h2 className="products-filter">Ապրանքների ֆիլտրացում</h2>
      <div className="cont">
        <div className="cont-left">
          {categoryListForFilter.map((list) => {
            return (
              <label className="list-name" key={list.id}>
                <span
                  onClick={() => {handleFilterProducts(list.name)}}
                >
                  {list.name}
                </span>
              </label>
            );
          })}
          <input
            type="range"
            value={minPoint}
            min={min}
            max={max}
            onChange={(e) => {
              setMinPoint(e.target.value);
              filterElements(activeCat);
            }}
          />
          <div className="maxormin">
            <span>{minPoint}դր</span>
            <span>{max}դր</span>
          </div>
        </div>
        <div className="cont-right">
          {!show
            ? currentPageData.map((prod) => {
                return <ProductShape prod={prod} key={prod.id}/>;
              })
            : currentPageData.map((prod) => {
                return <ProductShape prod={prod} key={prod.id}/>;
              })}
        </div>
      </div>
      <SweetPagination
        currentPageData={setCurrentPageData}
        dataPerPage={16}
        getData={show ? list : filterProd}
        navigation={true}
      />
    </div>
  );
}
