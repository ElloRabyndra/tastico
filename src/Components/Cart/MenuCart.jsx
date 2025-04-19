import React from "react";

export default function MenuCart({ title, price, quantity }) {
  return (
    <li className="border-b-2 border-black flex justify-between py-4">
      <div className="flex gap-6">
        <img src={`img/${title}.png`} alt={title} className="w-32" />
        <div className="flex flex-col justify-between">
          <h1 className="text-2xl font-medium">{title}</h1>
          <span className="text-xl">Rp {price},00</span>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <p>Add Opsional Note</p>
        <div className="flex justify-between items-center text-xl">
          <button className="size-12 rounded-full border-2 border-black overflow-hidden text-center">+</button>
          <span className="">{quantity}</span>
          <button className="size-12 rounded-full border-2 border-black overflow-hidden text-center">-</button>
        </div>
      </div>
    </li>
  );
}
