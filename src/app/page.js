import Rating from "@/Rating/rating";
import AddToCartBtn from "@/components/AddToCartBtn";
import ProductsCart from "@/components/ProductsCart";
import { getAllProducts } from "@/utils/GetProducts";
import Image from "next/image";

export default async function Home() {
  const products = await getAllProducts();
  console.log(products[0].image);

  return (
    <main className="  p-24">
      <div className="grid  gap-4 grid-cols-5 ">
        <div className="col-span-3  rounded-lg ">
          <div className="filterBox mb-8">
            <div className="flex justify-between items-center">
              <h1 className="text-[#282828] font-semibold text-3xl">
                Our All Products
              </h1>
              <div className="flex justify-between items-center mr-2 gap-3">
                <Image
                  src={"/grid.svg"}
                  width={25}
                  height={25}
                  alt={"This is grid icon."}
                />
                <Image
                  src={"/list.svg"}
                  width={25}
                  height={25}
                  alt={"This is list icon."}
                />
              </div>
            </div>
            <fieldset className="w-full mt-5 space-y-1 text-gray-100">
              <label htmlFor="Search" className="hidden">
                Search An Item...
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="button"
                    title="search"
                    className="p-1 focus:outline-none focus:ring"
                  >
                    <svg
                      fill="#212529"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 text-gray-100"
                    >
                      <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                    </svg>
                  </button>
                </span>
                <input
                  type="search"
                  name="Search"
                  placeholder="Search An Item..."
                  className="w-full rounded-3xl border-[#49525A] border outline-black text-black  py-2 pl-10 text-sm   focus:outline-none    focus:border-b-[#49525A]"
                />
              </div>
            </fieldset>
          </div>

          <div className="cartContainer grid grid-cols-2 justify-between gap-3 lg:grid-cols-3">
            {/* single cart  */}
            {products.length > 0 &&
              products.map((prod) => {
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
                        {/* <div className="flex items-center  my-4">
                          
                        </div> */}
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
                        <p className="text-gray-500 ">
                          ({prod.rating.count} Review)
                        </p>
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
        </div>
        <div className="col-span-2 h-32 rounded-lg bg-gray-200">
          <ProductsCart />
        </div>
      </div>
    </main>
  );
}
