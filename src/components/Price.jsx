"use client";
import React from "react";
import {   useSelector } from "react-redux";

const Price = ({cartPage}) => {
  const totalPrice = useSelector((state) => state.cartReducer.totalPrice);
  const formattedPrice = (
    typeof totalPrice === "number" ? totalPrice : 0
  ).toFixed(2);

  return (
    <h3
      className={`mt-0.5 font-bold ${
        cartPage ? "text-center" : "text-right"
      }  text-lg text-[#212529] uppercase`}
    >
      {/* Total: ${parseInt(totalPrice).toFixed(2)} */}
      Total: ${formattedPrice}
      {/* Total: ${typeof totalPrice} */}
    </h3>
  );
};

export default Price;
