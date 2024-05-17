import React  from "react";
import ProductsCart from "@/components/ProductsCart";
import Checkbox from "./Checkbox";
import Price from "./Price";

const MyCartView = ({ cartPage }) => {
 
  return (
    <div className="flex justify-center items-center py-16">
      <div className="w-[620px] py-3 px-2 overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <button
          type="button"
          className="py-3 font-semibold rounded bg-[#212529] text-white w-full text-xs"
        >
          Selected Products
        </button>

        <ProductsCart />
        {/* All product added by an user is start here     */}

        <div className="mt-6 w-full">
          <Price cartPage={cartPage} />

          <div className="flex items-center mt-6">
            <Checkbox />
            <label
              htmlFor="link-checkbox"
              className="ml-8 leading-5	tracking-widest  ms-2 text-sm font-medium text-black "
            >
              I've read and agree to the
              <a href="#" className=" text-black underline">
                 terms and conditions,  refund policy & privacy policy
              </a>
              .
            </label>
          </div>

          <button
            type="button"
            className={`${
              cartPage ? "mx-auto" : "ml-auto"
            }   mt-6 px-3 py-[10px]  font-semibold rounded block  bg-[#212529] text-white text-xs`}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCartView;
