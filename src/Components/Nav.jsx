import React from "react";
import { NavLink } from "react-router";

export default function Nav() {
  return (
    <nav id="nav" className="flex items-center justify-start sm:justify-center md:justify-between xl:text-xl lg:text-lg">
      <div className="hidden md:flex items-center justify-between lg:gap-6 gap-2">
        <img src="img/logo.png" alt="" className="lg:w-10 w-6" />
        <h1 className="text-[#6D4F25] font-medium">Tastico</h1>
      </div>
      <ul className="flex lg:gap-6 gap-2 py-8 text-black items-center justify-end *:after:content-[''] *:after:block *:after:border *:after:border-[#6D4F25] *:after:scale-x-0 *:after:transition-all *:after:duration-300">
        <li className="hover:text-[#6D4F25] hover:after:scale-x-105 cursor-pointer">
          <NavLink to={"/"} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#6D4F25]" : "")}>
            Home
          </NavLink>
        </li>
        <li className="hover:text-[#6D4F25] hover:after:scale-x-105 cursor-pointer">
          <NavLink to={"/menu"} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#6D4F25]" : "")}>
            Menu
          </NavLink>
        </li>
        <li className="hover:text-[#6D4F25] hover:after:scale-x-105 cursor-pointer">
          <NavLink to={"/offer"} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#6D4F25]" : "")}>
            Offer
          </NavLink>
        </li>
        <li className="hover:text-[#6D4F25] hover:after:scale-x-105 cursor-pointer">
          <NavLink to={"/service"} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#6D4F25]" : "")}>
            Service
          </NavLink>
        </li>
        <li className="hover:text-black hover:bg-transparent hover:border-2 hover:border-[#6D4F25] bg-[#6D4F25] lg:px-12 px-6 border-2 py-2 rounded-full cursor-pointer text-white">
          <NavLink to={"/cart"} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "" : "")}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
