import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Image from "next/image";
import AddToCartBtn from "./AddToCartBtn";
const ListViewLayout = ({ products }) => {
  return (
    <div
      className={`cartContainer  justify-between gap-3 grid grid-cols-1 pb-10`}
    >
      <div className="mx-auto max-w-screen-xl  py-4 ">
        <div className="mx-auto max-w-3xl">
          <div className="mt-8">
            <ul className="space-y-4">
              {products.map((prod, i) => {
                return (
                  <li key={i} className="flex gap-4 bg-[#F7F8F8]  rounded">
                    <Image
                      src={`${prod.image}`}
                      width={100}
                      height={320}
                      alt="cart image "
                      className="flex-[1] w-16 mx-auto p-4 imageBoxShadow rounded-md"
                      quality={100}
                    />

                    <div className={"flex-[2]"}>
                      <div className="mt-3 self-start">
                        <h3 className=" text-[#212529] text-base">
                          {prod.title}
                        </h3>

                        <dl className="mt-4 space-y-px text-[10px] text-gray-600">
                          <div>
                            <Rating
                              style={{ maxWidth: 100 }}
                              value={prod.rating.rate}
                              readOnly
                            />
                          </div>

                          <div>
                            <p className="text-gray-500 ml-1">
                              ({prod.rating.count} Review)
                            </p>
                          </div>
                        </dl>
                        <dl className="mt-4 space-y-px text-[10px] text-gray-600">
                          <p className="text-[#F2415A] font-bold text-xl">
                            ${prod.price}
                          </p>
                        </dl>
                      </div>

                      <div className="flex flex-1 items-end pb-5 justify-end  mr-5">
                        <AddToCartBtn product={prod} />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListViewLayout;
