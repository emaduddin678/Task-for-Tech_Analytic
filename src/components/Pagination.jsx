"use client"
import { pageChange } from "@/lib/features/currenPage/pageSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductsPagination = ({ products, productsPerPage }) => {
 const currentPage = useSelector(
   (state) => state.currentPageReducer.currentPage
 );
 
  const dispatch = useDispatch();
  
  const totalPages = Math.ceil(products.length / productsPerPage);

  
  const handlePageChange = (pageNumber) => {

     dispatch(pageChange(pageNumber));
  };

  return (
    <ol className="flex justify-center gap-1 text-xs font-medium place-self-end justify-self-end mt-auto">
      <li>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white hover:bg-blue-500 hover:text-white  text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
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
              className={` transition-all duration-200 hover:bg-blue-500 hover:text-white  block size-8 rounded border border-gray-100 bg-blue text-center leading-8 text-gray-900 ${
                currentPage === pageNumber
                  ? "border-blue-600 bg-blue-600 text-white "
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
          className=" hover:bg-blue-500 hover:text-white inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
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
  );
};

export default ProductsPagination;
