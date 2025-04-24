import React from "react";
import { useState } from "react";
import { NavLink } from "react-router";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav id="nav" className="flex items-center justify-between xl:text-xl lg:text-lg">
      {/* Logo Tastico */}
      <div className="flex items-center justify-between lg:gap-6 gap-2">
        <img src="img/logo.png" alt="" className="lg:w-10 w-6" />
        <h1 className="text-[#6D4F25] font-medium">Tastico</h1>
      </div>

      {/* Hamburger */}
      <div className="py-8">
        <button 
          onClick={() => setIsOpen(true)} 
          className="sm:hidden text-[#6D4F25]"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>


      {/* Desktop Navigation */}
      <ul className="hidden sm:flex lg:gap-6 gap-2 py-8 text-black items-center justify-end *:after:content-[''] *:after:block *:after:border *:after:border-[#6D4F25] *:after:scale-x-0 *:after:transition-all *:after:duration-300">
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

      {/* Mobile Navigation */}
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsOpen(false)} />
          <div className="fixed inset-y-0 right-0 w-64 bg-white z-50 p-6 shadow-lg">
            <button 
              onClick={() => setIsOpen(false)} 
              className="mb-8 text-[#6D4F25]"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <ul className="flex flex-col gap-6">
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
              <li className="hover:text-black hover:bg-transparent hover:border-2 hover:border-[#6D4F25] bg-[#6D4F25] lg:px-12 px-6 border-2 py-2 rounded-full cursor-pointer text-white text-center">
                <NavLink to={"/cart"} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "" : "")}>
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
}
