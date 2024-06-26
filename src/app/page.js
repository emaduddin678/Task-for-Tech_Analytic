import FilterProduct from "@/components/FilterProduct";
import MyCartView from "@/components/MyCartView";
import OurAllProducts from "@/components/OurAllProducts";
import ProductsPagination from "@/components/Pagination";
import ViewControl from "@/components/ViewControl";
import { getAllProducts } from "@/utils/GetProducts";

export default async function Home() {
  const products = await getAllProducts();



  return (
    <main className="px-10 py-20">
      <div className="grid  gap-4 grid-cols-5 ">
        <div className="lg:col-span-3 col-span-5  rounded-lg flex flex-col ">
          <div className="filterBox mb-8">
            <div className="flex justify-between items-center">
              <h1 className="text-[#282828] font-semibold text-3xl">
                Our All Products
              </h1>
              <ViewControl />
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
              <FilterProduct />
              </div>
            </fieldset>
          </div>

          <OurAllProducts products={products} productsPerPage={6} />
          <ProductsPagination  products={products} productsPerPage={6} />
        </div>
        <div className="lg:block hidden lg:col-span-2 rounded-lg mt-6">
          <MyCartView cartPage={false} productsPerPage={6} />
        </div>
      </div>
    </main>
  );
}
