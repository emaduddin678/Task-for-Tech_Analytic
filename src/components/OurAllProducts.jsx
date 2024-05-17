"use client";
import React, { Fragment, useState } from "react";
import Rating from "@/Rating/rating";
import AddToCartBtn from "@/components/AddToCartBtn";
import Image from "next/image";
import { useSelector } from "react-redux";
import GridViewLayout from "./GridViewLayout";
import ListViewLayout from "./ListViewLayout";

const OurAllProducts = (props) => {
  const grid = useSelector((state) => state.viewReducer);
  const products = props.products;
  return (
    <Fragment>
      {grid.grid ? (
        <GridViewLayout products={products} />
      ) : (
        <ListViewLayout products={products} />
      )}
    </Fragment>
  );
};

export default OurAllProducts;
