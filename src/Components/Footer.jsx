import React from "react";
import { NavLink } from "react-router";

export default function Footer() {
  return (
    <footer id="footer" className="-mx-8 lg:-mx-16 px-16 bg-[#262523] py-16 text-white md:flex space-y-6">
      <div className="md:w-1/3 space-y-4 md:space-y-8">
        <div className="flex items-center lg:gap-6 gap-2 text-2xl sm:text-3xl md:text-4xl">
          <img src="img/logo-white.png" alt="" className="lg:w-16 w-6" />
          <h1 className="text-white font-bold">Tastico</h1>
        </div>
        <p className="text-lg md:text-xl">At Tastico, we serve bold flavors and fresh ingredients in every dish, creating an unforgettable taste experience. Come for the flavor, stay for the experience!</p>
      </div>
      <div className="md:w-2/3 md:flex justify-evenly space-y-6">
        <div className="md:border-1 h-full md:border-white"></div>
        <ul className="flex-row text-xl space-y-4 md:space-y-6">
          <li className="font-bold text-2xl sm:text-3xl">Contact</li>
          <li>
            <span>Address</span>
            <p>Jl. Melati Putri, 20 Ilir, 247852</p>
          </li>
          <li>
            <span>Phone Number</span>
            <p>+62 8678-3864-5692</p>
          </li>
        </ul>
        <div className="md:border-1 h-full md:border-white"></div>
        <ul className="flex-row text-xl space-y-4 md:space-y-6">
          <li className="font-bold text-2xl sm:text-3xl">Page</li>
          <li>Home</li>
          <li>Menu</li>
          <li>Offer</li>
          <li>Service</li>
        </ul>
      </div>
    </footer>
  );
}
