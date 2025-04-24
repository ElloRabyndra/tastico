import React from "react";

export default function MenuCart({ title, price, quantity }) {
  return (
    <li className="border-b-2 border-black sm:flex justify-between py-4 space-y-2">
      <div className="flex gap-6">
        <img src={`img/${title}.png`} alt={title} className=" size-20 sm:size-auto sm:w-32" />
        <div className="space-y-1">
          <h1 className="text-base sm:text-2xl font-medium">{title}</h1>
          <span className="text-sm sm:text-xl">Rp {price},00</span>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <p className="block">Add Opsional Note</p>
        <div className="flex items-center gap-3 text-xl">
          <button className="size-8 sm:size-12 rounded-full border-2 border-black overflow-hidden text-center cursor-pointer hover:border-none hover:bg-[#6D4F25] hover:text-white">+</button>
          <span className="text-base sm:text-xl">{quantity}</span>
          <button className="size-8 sm:size-12 rounded-full border-2 border-black overflow-hidden text-center cursor-pointer hover:border-none hover:bg-[#6D4F25] hover:text-white">-</button>
        </div>
      </div>
    </li>
  );
}
