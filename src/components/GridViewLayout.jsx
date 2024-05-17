import Rating from "@/Rating/rating";
import Image from "next/image";
import AddToCartBtn from "./AddToCartBtn";

const GridViewLayout = ({ products }) => {
  return (
    <div
      className={`cartContainer  justify-between gap-3 grid grid-cols-2 lg:grid-cols-3`}
    >
      {products.map((prod) => {
        return (
          <div
            key={prod.id}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow flex flex-col justify-between"
          >
            <div>
              <Image
                src={`${prod.image}`}
                width={300}
                height={320}
                className="!w-full h-80"
                alt="cart image"
                quality={100}
              />

              <div className="p-3 !self-baselinea !self-start ">
                <a href="#">
                  <h5 className="text-base font-semibold tracking-tight text-gray-900 ">
                    {prod.title}
                  </h5>
                </a>
              </div>
            </div>
            <div className="flex flex-col p-3 pt-0">
              <div>
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  <Rating
                    ratingInPercent={prod.rating.rate * 20}
                    iconSize="l"
                    showOutOf={true}
                    enableUserInteraction={false}
                    onClick={false}
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
    </div>
  );
};
export default GridViewLayout;
