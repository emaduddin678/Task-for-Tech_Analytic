"use client";
import { addToCart } from "@/lib/features/products/cartSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
const AddToCartBtn = (props) => {
  const cart = useSelector((state) => state.cartReducer.cart);
  // console.log("🚀 ~ AddToCartBtn ~ cart:", cart);
  const dispatch = useDispatch();
  const handleCart = () => {
    const productData = props.product;
    let productArray = [];
    let filteredArray = [];

    const existingProducts = localStorage.getItem("myProduct");
    if (existingProducts) {
      productArray = JSON.parse(existingProducts);
      filteredArray = productArray.filter((p) => {
        return p.id === productData.id;
      });
      if (filteredArray.length) {
        productArray = productArray.filter((p) => {
          return p.id !== productData.id;
        });
        productArray.push({
          ...filteredArray[0],
          quantity: filteredArray[0].quantity + 1,
        });
      } else {
        productArray.push({ ...productData, quantity: 1 });
      }
    } else {
      productArray.push({ ...productData, quantity: 1 });
    }

    localStorage.setItem("myProduct", JSON.stringify(productArray));
  };

  return (
    <>
      <button
        className="text-white bg-[#212529] transition duration-100	 hover:bg-[#F2415A] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-[10px] py-[6px] text-center "
        onClick={() => dispatch(addToCart(props.product))}
      >
        Add to cart
      </button>
    </>
  );
};

export default AddToCartBtn;
