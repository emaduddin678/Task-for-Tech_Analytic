"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavMenu from "./NavMenu";

const Navbar = () => {
  const pathname = usePathname();
  // console.log(pathname);

  return (
    <header className="bg-[#212529]">
      <div className="mx-auto max-w-screen-xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" href="/">
              <Image
                src="/logo.png"
                width={180}
                height={50}
                alt="Picture of the author"
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="nav flex items-center gap-6 text-sm">
                <li className={` ${pathname === "/" ? "active" : ""}`}>
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
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <a
              className=" md:block hidden rounded-md bg-[#525CEB] px-5 py-2.5 text-sm font-medium text-white shadow"
              href="#"
            >
              Login
            </a>

            <div className="block md:hidden">
              
              <NavMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
