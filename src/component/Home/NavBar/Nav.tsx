"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../../../public/assets/Logo.svg";
import { navLinks } from "@/constants/constants";
import Link from "next/link";
import { Heart, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navbg, setNavbg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavbg(true);
      if (window.scrollY <= 90) setNavbg(false);
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`transition-all duration-200 h-[10vh] z[-100] fixed w-full ${
        navbg ? "bg-white shadow-md" : "fixed"
      }`}
    >
      <div className="flex items-center h-full justify-between  w-[90%] xl:w-[80%] mx-auto ">
        {/* logo */}
        <div className="flex items-center space-x-2">
          <div className="w-[32px] h-[31px] lg:w-[39.813px] lg:h-[39px]  flex items-center justify-center flex-col">
            <Image src={logo} alt="logo" />
          </div>
          <h1 className="text-xl sm:block md:text-2xl text-black font-bold ">
            Fresh Harvest
          </h1>
        </div>
        {/* navlinks */}

        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link href={link.url} key={link.id} className="relative group">
              <p className="hover:text-black transition-colors">{link.label}</p>
              {/* Underline */}
              <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-0 h-[3px] bg-[#749B3F] rounded-full transition-all duration-300 group-hover:w-[14px]"></span>
            </Link>
          ))}
        </div>
        {/* button */}

        {/* Buttons */}
        <div className="flex items-center space-x-6">
          {/* Favorites */}
          <div className="flex items-center space-x-1 text-gray-600 hover:text-black cursor-pointer">
            <Heart className="w-5 h-5 hidden sm:block" />
            <span className="hidden sm:block">Favorites</span>
          </div>

          {/* Cart */}
          <div className="flex items-center space-x-1 text-gray-600 hover:text-black cursor-pointer">
            <ShoppingCart className="w-5 h-5" />
            <span className="hidden sm:block">Cart</span>
          </div>

          {/* Sign In Button */}
          <Button variant="ghost" className="hidden sm:block">
            Sign In
          </Button>

          {/* Mobile Menu Icon */}
          <Menu
            onClick={openNav}
            className="w-6 h-6 text-gray-600 cursor-pointer lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
