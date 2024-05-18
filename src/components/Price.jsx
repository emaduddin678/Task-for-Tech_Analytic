"use client";
import React from "react";
import {   useSelector } from "react-redux";

const Price = ({cartPage}) => {
  const totalPrice = useSelector((state) => state.cartReducer.totalPrice);

  return (
    <h3
      className={`mt-0.5 font-bold ${
        cartPage ? "text-center" : "text-right"
      }  text-lg text-[#212529] uppercase`}
    >
      Total: ${totalPrice.toFixed(2)}
    </h3>
  );
};

export default Price;
