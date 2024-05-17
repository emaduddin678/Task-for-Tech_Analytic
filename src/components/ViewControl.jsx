"use client";
import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { changeView } from "@/lib/features/views/viewsSlice";

const ViewControl = () => {
  const viewReducer = useSelector((state) => state.viewReducer);
  // console.log("🚀 ~ ViewControl ~ grid:", viewReducer);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center mr-2 gap-3">
      <button onClick={() => dispatch(changeView())}>
        <Image
          src={"/grid.svg"}
          width={25}
          height={25}
          alt={"This is grid icon."}
        />
      </button>

      <button onClick={() => dispatch(changeView())}>
        <Image
          src={"/list.svg"}
          width={25}
          height={25}
          alt={"This is list icon."}
        />
      </button>
    </div>
  );
};

export default ViewControl;
