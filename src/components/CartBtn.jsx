import React from 'react'

const CartBtn = ({ btnTxt }) => {
  return (
    <button
      type="button"
      className={`mt-6 px-3 py-[10px]  font-semibold rounded block  bg-[#212529] text-white text-xs`}
    >
      {btnTxt}
    </button>
  );
};

export default CartBtn