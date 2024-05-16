"use client";
import React from "react";

const AddToCartBtn = (props) => {
   
  const handleCart = () => {
    const productData = props.product;
     let productArray = [];
     
     
     const existingProducts = localStorage.getItem("myProduct");
     if (existingProducts) {
       productArray = JSON.parse(existingProducts);
     }

     productArray.push(productData);
    localStorage.setItem("myProduct", JSON.stringify(productArray));
  };
 
  return (
    <>
      <button
        className="text-white bg-[#212529] transition duration-100	 hover:bg-[#F2415A] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-[10px] py-[6px] text-center "
        onClick={handleCart}
      >
        Add to cart
      </button>
     
    </>
  );
};

export default AddToCartBtn;
