import React from "react";
import { DiApple } from "react-icons/di";
import { AiOutlineShopping } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-neutral-700 h-16 w-full z-50 text-white lg:flex justify-center border-b lg:border-none">
      <ul className="flex justify-evenly h-16 items-center px-10 hover:cursor-not-allowed xl:gap-8 gap-4">
        <li className="cursor-pointer">
          <Link href="/credits">
            <DiApple />
          </Link>
        </li>
        <li className="flex-1 lg:hidden"></li>
        <li className="hidden lg:block">Store</li>
        <li className="hidden lg:block">Mac</li>
        <li className="hidden lg:block">iPad</li>
        <li className="hidden lg:block">iPhone</li>
        <li className="hidden lg:block">Watch</li>
        <li className="hidden lg:block">Vision</li>
        <li className="hidden lg:block">AirPods</li>
        <li className="hidden lg:block">TV & Home</li>
        <li className="hidden lg:block">Entertainment</li>
        <li className="hidden lg:block">Accessories</li>
        <li className="hidden lg:block">Support</li>
        <li>
          <AiOutlineShopping />
        </li>
        <li className="">
          <GoSearch />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
