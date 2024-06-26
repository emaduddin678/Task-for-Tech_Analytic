"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useDispatch, useSelector } from "react-redux";
import dynamic from "next/dynamic";
import { removeFromCart } from "@/lib/features/products/cartSlice";


const ProductsCart = () => {
  const cart = useSelector((state) => state.cartReducer.cart);
  const dispatch= useDispatch()
  return (
    <section className="mx-auto max-w-screen-xl  py-4 ">
      <div className="mx-auto max-w-3xl">
        <div className="mt-8">
          <ul className="space-y-4">
            {cart.length > 0 &&
              cart.map((prod, i) => {
                return (
                  <li
                    key={i}
                    className="flex items-center gap-4 bg-[#F7F8F8]  rounded"
                  >
                    <Image
                      src={`${prod.image}`}
                      width={100}
                      height={320}
                      alt="cart image"
                      quality={100}
                    />

                    <div className="mt-3 self-start">
                      <h3 className=" text-[#212529] text-base">
                        {prod.title}
                      </h3>

                      <div className="mt-4 space-y-px text-[10px] text-gray-600">
                        <Rating
                          style={{ maxWidth: 100 }}
                          value={prod.rating.rate}
                          readOnly
                        />

                        <p className="text-gray-500 ml-1">
                          ({prod.rating.count} Review)
                        </p>
                      </div>
                      <dl className="mt-4 space-y-px text-[10px] text-gray-600">
                        <p className="text-[#F2415A] font-bold text-xl">
                          ${prod.price}
                        </p>
                      </dl>
                    </div>

                    <div className="flex flex-1 items-center justify-end ">
                      <form className="flex flex-col gap-1 items-center justify-center mr-4">
                        <label className="text-gray-500" htmlFor="Line3Qty">
                          {" "}
                          Quantity{" "}
                        </label>

                        <input
                          type="number"
                          min="5"
                          disabled
                          placeholder={prod.quantity}
                          id="Line3Qty"
                          className="h-8 w-2  rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                        />
                      </form>
                      <button
                        onClick={() => dispatch(removeFromCart(prod))}
                        className="mr-3 transition  text-[#F2415A]"
                      >
                        <span className="sr-only">Remove item</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </section>
  );
};

// export default ProductsCart;
export default dynamic (() => Promise.resolve(ProductsCart), {ssr: false})
