"use client";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import GridViewLayout from "./GridViewLayout";
import ListViewLayout from "./ListViewLayout";

const OurAllProducts = (props) => {
  const grid = useSelector((state) => state.viewReducer);
  const products = props.products;
  const currentPage = useSelector(
    (state) => state.currentPageReducer.currentPage
  );
  // console.log(currentPage)


    const productsPerPage = props.productsPerPage;
    // console.log("🚀 ~ OurAllProducts ~ productsPerPage:", productsPerPage)
  // Calculate the index range for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  // console.log("🚀 ~ OurAllProducts ~ indexOfLastProduct:", indexOfLastProduct)
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // console.log("🚀 ~ OurAllProducts ~ indexOfFirstProduct:", indexOfFirstProduct)

  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  // console.log(products, currentProducts)

  return (
    <Fragment>
      {grid.grid ? (
        <GridViewLayout products={currentProducts} />
      ) : (
        <ListViewLayout products={currentProducts} />
      )}
    </Fragment>
  );
};

export default OurAllProducts;
