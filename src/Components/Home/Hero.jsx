import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="-mt-12 sm:mt-0 sm:flex justify-between items-center text-xl space-y-6">
      <div className="w-full sm:w-1/2 xl:space-y-12 space-y-6">
        <h1 className="text-[#6D4F25] xl:text-5xl text-4xl font-bold">SATISFY YOUR CRAVING FLAVORSOME</h1>
        <p className="">Flavorsome is where bold flavors, fresh ingredients, and heartfelt cooking come together to satisfy your every craving.</p>
        <button className="hover:text-black hover:bg-transparent hover:border-2 hover:border-[#6D4F25] bg-[#6D4F25] lg:px-12 px-6 border-2 py-2 rounded-full cursor-pointer text-white">{"More About Us ->"}</button>
      </div>
      <img src="img/hero-home-img.png" alt="" className="w-10/12 mx-auto sm:mx-0 sm:w-5/12" />
    </section>
  );
}
