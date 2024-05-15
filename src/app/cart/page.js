import Image from "next/image";
import React from "react";

const Cartpage = () => {
  return (
    <div className="flex justify-center items-center py-16">
      <div className="w-[620px] py-3 px-2 overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <button
          type="button"
          className="py-3 font-semibold rounded bg-[#212529] text-white w-full text-xs"
        >
          Selected Products
        </button>

        {/* All product added by an user is start here     */}
        {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <header className="text-center">
                <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                  Your Cart
                </h1>
              </header>

              <div className="mt-8">
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 bg-[#F7F8F8]  rounded">
                    <Image
                      src={"/head.png"}
                      alt="product image"
                      width={160}
                      height={160}
                      className="rounded"
                    />

                    <div className="mt-3 self-start">
                      <h3 className=" text-[#212529] text-base">
                        Wireless Bluetooth Headset Single Ear
                      </h3>

                      <dl className="mt-4 space-y-px text-[10px] text-gray-600">
                        <div>
                          <button
                            type="button"
                            title="Rate 1 stars"
                            aria-label="Rate 1 stars"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-4 h-4 text-yellow-500"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          </button>
                          <button
                            type="button"
                            title="Rate 2 stars"
                            aria-label="Rate 2 stars"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-4 h-4 text-yellow-500"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          </button>
                          <button
                            type="button"
                            title="Rate 3 stars"
                            aria-label="Rate 3 stars"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-4 h-4 text-yellow-500"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          </button>
                          <button
                            type="button"
                            title="Rate 4 stars"
                            aria-label="Rate 4 stars"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-4 h-4 text-yellow-500"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          </button>
                          <button
                            type="button"
                            title="Rate 4 stars"
                            aria-label="Rate 4 stars"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-4 h-4 text-yellow-500"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          </button>
                        </div>

                        <div>
                          <p className="text-gray-500 ml-1">(121 Review)</p>
                        </div>
                      </dl>
                      <dl className="mt-4 space-y-px text-[10px] text-gray-600">
                        <p className="text-[#F2415A] font-bold text-xl">
                          $8.50
                        </p>
                      </dl>
                    </div>

                    <div className="flex flex-1 items-center justify-end gap-2">
                      <button className="mr-3 transition  text-[#F2415A]">
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
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* All product added by an user is start here     */}

        <div className="mt-6 w-full">
          <h3 className="mt-0.5 font-bold text-center text-lg text-[#212529] uppercase">
            Total: $0
          </h3>

          <div className="flex items-center mt-6">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:outline-none"
            />
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
            className="text-center mt-6 px-3 py-[10px]  font-semibold rounded block mx-auto bg-[#212529] text-white text-xs"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cartpage;
