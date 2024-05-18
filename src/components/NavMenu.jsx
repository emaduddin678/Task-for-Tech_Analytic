import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavMenu = () => {

  const pathname = usePathname();
    const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <div className="relative ">
      <button
        onClick={toggleMenu}
        className="rounded  p-2 text-gray-600 transition hover:text-gray-600/75"
      >
        <Image
          src="/bar.svg"
          width={24}
          height={24}
          alt="Picture of the author"
        />
      </button>

      {isActive && (
        <div
          className="absolute pb-4 end-0 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-[#212529] shadow-lg"
          role="menu"
          onBlur={closeMenu}
          tabIndex={-1}
        >
          <div className="p-2">
            <strong className="block p-2 text-xs font-medium uppercase text-gray-400">
              {" "}
              Pages{" "}
            </strong>

            <ul className="nav flex flex-col justify-start items-start ps-6 pb-5 gap-6 text-sm">
              <li className={`inline ${pathname === "/" ? "active" : ""}`}>
                <Link
                  className="text-white transition hover:text-gray-500/75 font-semibold "
                  href="/"
                >
                  Products
                </Link>
              </li>

              <li className={`${pathname === "/cart" ? "active" : ""}`}>
                <Link
                  className="text-white transition hover:text-gray-500/75 font-semibold"
                  href="/cart"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          <div className="p-2">
            <strong className="block p-2 text-xs font-medium uppercase text-gray-400">
              {" "}
              Authenticate{" "}
            </strong>

              <a
              className=" ms-6 rounded-md hover:text-[#525CEB] hover:bg-white bg-[#525CEB] px-5 py-2.5 text-sm hover:font-medium font-medium text-white shadow transition-all duration-100"
              href="#"
            >
              Login
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavMenu;
