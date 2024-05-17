"use client"
import React, { useState } from "react";

const Checkbox = () => {
      const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const [isChecked, setIsChecked] = useState(false);
  return (
    <input
      id="link-checkbox"
      type="checkbox"
      value=""
      className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:outline-none"
      checked={isChecked}
      onChange={handleCheckboxChange}
    />
  );
};

export default Checkbox;
