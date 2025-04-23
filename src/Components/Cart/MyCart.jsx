import React from "react";
import MenuCart from "./MenuCart";

export default function MyCart() {
  return (
    <section id="my-cart" className="-mt-12 rounded-2xl border-2 border-black p-5 sm:p-12 space-y-2">
      <div>
        <h1 className="text-[#6D4F25] text-3xl font-semibold">My Cart</h1>
      </div>
      <ul className="space-y-4">
        <MenuCart title="Gogigaru Bibimbap" price={"59.000"} quantity={1} />
        <MenuCart title="Spaghetti Bolognese" price={"60.000"} quantity={1} />
        <MenuCart title="Chicken Salted Egg" price={"40.000"} quantity={1} />
      </ul>
      <div className="flex justify-between items-center text-xl font-semibold text-[#6D4F25]">
        <p>Total Price</p>
        <span>Rp. 147.000,00</span>
      </div>
    </section>
  );
}
