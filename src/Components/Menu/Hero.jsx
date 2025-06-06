import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="-mt-12 sm:mt-0 sm:flex justify-between items-center text-xl space-y-6">
      <div className="w-full sm:w-1/2 space-y-2 sm:space-y-6">
        <h1 className="text-[#6D4F25]">MOST FAVORITE</h1>
        <h1 className="text-[#6D4F25] xl:text-5xl text-4xl font-semibold">Signature Crispy Chicken Steak with Tartar Sauce</h1>
        <p className="text-lg">
          Crispy chicken steak fried to golden perfection—crunchy on the outside, tender and juicy on the inside. Served with our special house-made tartar sauce that's rich, creamy, and slightly tangy, creating a delicious harmony of
          flavors. A comforting classic with a modern twist, perfect for any time of the day.
        </p>
        <div className="flex items-center gap-4">
          <span className="text-[#6D4F25] font-semibold text-2xl sm:text-xl xl:text-4xl">Rp 49.000, 00</span>
          <span className="border-2 px-6 py-1 border-[#6D4F25] rounded-full text-2xl sm:text-xl xl:text-2xl text-[#6D4F25] font-semibold"> Disc 20%</span>
        </div>
        <button className="hover:text-black hover:bg-transparent hover:border-2 hover:border-[#6D4F25] bg-[#6D4F25] lg:px-12 px-6 border-2 py-2 rounded-full cursor-pointer text-white">{"Add to Cart ->"}</button>
      </div>
      <img src="img/hero-menu-img.png" alt="" className="hidden sm:block mx-auto sm:mx-0 sm:w-5/12" />
    </section>
  );
}
