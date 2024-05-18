"use client";
import { clearCart } from "@/lib/features/products/cartSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const CartBtn = ({ btnTxt, btnType }) => {
  const isChecked = useSelector((state) => state.checkedReducer.checked);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (btnType === "clear") {
      dispatch(clearCart());
    } else if (btnType === "order") {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Thanks for Your Order",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    
    <button
      onClick={handleClick}
      disabled={btnType === "order" && !isChecked}
      type="button"
      className={`mt-6 px-3 py-[10px]  font-semibold rounded block  bg-[#212529] text-white text-xs`}
    >
      {btnTxt}
    </button>
  );
};

export default CartBtn;
