"use client";

import { searchFilter } from "@/lib/features/filterSearch/filterSearch";
import { useDispatch, useSelector } from "react-redux";

const FilterProduct = () => {
  const filterReducer = useSelector((state) => state.filterReducer.search);
  const dispatch = useDispatch();

  const handleFilter = (event) => {
    dispatch(searchFilter(event.target.value));
  };
  console.log()
  return (
    <input
      type="search"
      onChange={handleFilter}
      value={filterReducer}
      name="Search"
      placeholder="Search An Item..."
      className="w-full rounded-3xl border-[#49525A] border outline-black text-black  py-2 pl-10 text-sm   focus:outline-none    focus:border-b-[#49525A]"
    />
  );
};

export default FilterProduct;
