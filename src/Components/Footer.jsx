import React from "react";

export default function Footer() {
  return (
    <footer id="footer" className="-mx-24 px-24 bg-[#262523] py-16 text-white flex gap-6">
      <div className="w-1/3 space-y-8">
        <div className="flex items-center lg:gap-6 gap-2 text-4xl">
          <img src="img/logo-white.png" alt="" className="lg:w-16 w-6" />
          <h1 className="text-white font-medium">Tastico</h1>
        </div>
        <p className="text-xl">At Tastico, we serve bold flavors and fresh ingredients in every dish, creating an unforgettable taste experience. Come for the flavor, stay for the experience!</p>
      </div>
      <div className="flex justify-evenly w-2/3">
        <div className="border-1 h-full borer-white"></div>
        <ul className="flex-row text-xl space-y-6">
          <li className="font-semibold text-2xl">Contact</li>
          <li>
            <span>Address</span>
            <p>Jl. Melati Putri, 20 Ilir, 247852</p>
          </li>
          <li>
            <span>Phone Number</span>
            <p>+62 8678-3864-5692</p>
          </li>
        </ul>
        <div className="border-1 h-full borer-white"></div>
        <ul className="flex-row text-xl space-y-4">
          <li className="font-semibold text-2xl">Page</li>
          <li>Home</li>
          <li>Menu</li>
          <li>Offer</li>
          <li>Service</li>
        </ul>
      </div>
    </footer>
  );
}
