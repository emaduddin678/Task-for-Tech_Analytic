"use client";
import { checkedFunc } from "@/lib/features/checkedCart/ceckedCart";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Checkbox = () => {
  const isChecked = useSelector((state) => state.checkedReducer.checked);
  const dispatch = useDispatch()
  const handleCheckboxChange = () => {
    dispatch(checkedFunc());
  };
  return (
    <input
      id="link-checkbox"
      type="checkbox"
      className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:outline-none"
      checked={isChecked}
      onChange={handleCheckboxChange}
    />
  );
};

export default Checkbox;
