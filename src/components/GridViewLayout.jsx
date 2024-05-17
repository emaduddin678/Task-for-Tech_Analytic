
import { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import AddToCartBtn from "./AddToCartBtn";
import Image from "next/image";

const GridViewLayout = ({ products }) => {
  // const products = products;
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // Calculate total pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Calculate the index range for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div
      className={`cartContainer  justify-between gap-3 grid grid-cols-2 lg:grid-cols-3`}
    >
      {currentProducts.length &&
        currentProducts.map((prod) => {
          return (
            <div
              key={prod.id}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow flex flex-col justify-between"
            >
              <div className="pt-3">
                <Image
                  src={`${prod.image}`}
                  width={300}
                  height={320}
                  className="w-auto mx-auto h-44 p-4 imageBoxShadow rounded-md"
                  alt="cart image"
                  quality={100}
                />

                <div className="p-3 !self-baselinea !self-start ">
                  <a
                    href="#"
                    className="text-base font-semibold tracking-tight text-gray-900 "
                  >
                    {prod.title}
                  </a>
                </div>
              </div>
              <div className="flex flex-col p-3 pt-0">
                <div>
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <Rating
                      style={{ maxWidth: 100 }}
                      value={prod.rating.rate}
                      readOnly
                    />
                  </div>
                  <p className="text-gray-500 ">({prod.rating.count} Review)</p>
                </div>
                <div className="flex justify-between">
                  <span className="text-xl font-bold text-[#F2415A] ">
                    ${prod.price}
                  </span>
                  <AddToCartBtn product={prod} />
                </div>
              </div>
            </div>
          );
        })}
      <ol className="flex justify-center gap-1 text-xs font-medium mt-6">
        <li>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === 1}
          >
            <span className="sr-only">Prev Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>

        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          return (
            <li key={pageNumber}>
              <button
                onClick={() => handlePageChange(pageNumber)}
                className={`block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900 ${
                  currentPage === pageNumber
                    ? "border-blue-600 bg-blue-600 text-white"
                    : ""
                }`}
              >
                {pageNumber}
              </button>
            </li>
          );
        })}

        <li>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === totalPages}
          >
            <span className="sr-only">Next Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>
      </ol>
    </div>
  );
};
export default GridViewLayout;
