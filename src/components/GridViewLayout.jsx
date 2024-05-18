import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import AddToCartBtn from "./AddToCartBtn";
import Image from "next/image";

const GridViewLayout = ({ products }) => {
  

  return (
    <div
      className={`cartContainer  justify-between gap-3 grid grid-cols-2 lg:grid-cols-3 pb-10`}
    >
      {products.length &&
        products.map((prod) => {
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
                  <h1
                   
                    className="text-base font-semibold tracking-tight text-gray-900 "
                  >
                    {prod.title}
                  </h1>
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
                <div className="flex justify-between flex-col xl:flex-row lg:flex-col md:flex-row">
                  <span className="text-xl font-bold text-[#F2415A]">
                    ${prod.price}
                  </span>
                  <AddToCartBtn product={prod} />
                </div>
              </div>
            </div>
          );
        })}
      
    </div>
  );
};
export default GridViewLayout;
