import Rating from "@/Rating/rating";
import Image from "next/image";
import AddToCartBtn from "./AddToCartBtn";
const ListViewLayout = ({ products }) => {
  return (
    <div className={`cartContainer  justify-between gap-3 grid grid-cols-1`}>
      {products.map((prod, i) => {
        return (
          <div key={i} className="mx-auto max-w-screen-xl  py-4 ">
            <div className="mx-auto max-w-3xl">
              <div className="mt-8">
                <ul className="space-y-4">
                  <li className="flex gap-4 bg-[#F7F8F8]  rounded">
                    <Image
                      src={`${prod.image}`}
                      width={100}
                      height={320}
                      alt="cart image"
                      quality={100}
                    />

                    <div className="mt-3 self-start">
                      <h3 className=" text-[#212529] text-base">
                        Wireless Bluetooth Headset Ear s{" "}
                      </h3>

                      <dl className="mt-4 space-y-px text-[10px] text-gray-600">
                        <div>
                          <Rating
                            ratingInPercent={prod.rating.rate * 20}
                            iconSize="l"
                            showOutOf={true}
                            enableUserInteraction={false}
                            onClick={false}
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
                          $8.50
                        </p>
                      </dl>
                    </div>

                    <div className="flex flex-1 items-end pb-5 justify-end  mr-5">
                      <AddToCartBtn product={prod} />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ListViewLayout;
