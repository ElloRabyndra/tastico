import React from "react";

export default function Nav() {
  return (
    <nav id="nav" className="lg:px-16 px-8 flex items-center justify-between xl:text-xl lg:text-lg">
      <div className="flex items-center justify-between lg:gap-6 gap-2">
        <img src="img/logo.png" alt="" className="lg:w-10 w-6" />
        <h1 className="text-[#6D4F25] font-medium">Tastico</h1>
      </div>
      <ul className="flex lg:gap-6 gap-2 py-8 text-black items-center justify-end">
        <li className="hover:text-[#6D4F25] cursor-pointer">Home</li>
        <li className="hover:text-[#6D4F25] cursor-pointer">Menu</li>
        <li className="hover:text-[#6D4F25] cursor-pointer">Offer</li>
        <li className="hover:text-[#6D4F25] cursor-pointer">Services</li>
        <li className="hover:text-black hover:bg-transparent hover:border-2 hover:border-[#6D4F25] bg-[#6D4F25] lg:px-12 px-6 border-2 py-2 rounded-full cursor-pointer text-white">Login</li>
      </ul>
    </nav>
  );
}
