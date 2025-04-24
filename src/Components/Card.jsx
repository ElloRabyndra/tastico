import React from "react";

export default function Card({ title, desc, price }) {
  return (
    <section id="card" className="min-w-72 max-w-80 lg:max-w-96  bg-white rounded-4xl xl:p-8 p-4 space-y-4 text-base">
      <img src={`img/${title}.png`} alt={title} />
      <div className="space-y-4 xl:text-xl">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p>{desc}</p>
        <div className="flex items-center justify-between">
          <span className="text-[#6D4F25] font-medium">Rp. {price}, 00</span>
          <button className="hover:text-black hover:bg-transparent hover:border-[#6D4F25] bg-[#6D4F25] xl:px-6 px-4 border-2 py-2 rounded-full cursor-pointer text-white">Order Now</button>
        </div>
      </div>
    </section>
  );
}
