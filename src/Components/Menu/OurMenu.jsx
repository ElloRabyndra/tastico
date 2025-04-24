import React from "react";
import Card from "../Card";

export default function OurMenu() {
  return (
    <section id="best-menu" className="flex flex-col items-center justify-center text-xl space-y-12 -mb-10 -mx-8 lg:-mx-16 px-12 bg-[#F4F4F4] py-16">
      <div className="text-center space-y-4">
        <h1 className="text-[#6D4F25] text-xl">BEST MENU</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 gap-6 items-center justify-center">
        <Card title="Gogigaru Bibimbap" desc="A bowl of harmony, packed with bold Korean flavors." price={"59.000"} />
        <Card title="Spaghetti Bolognese" desc="A classic Italian favorite with rich, meaty perfection in every twirl." price={"60.000"} />
        <Card title="Chicken Salted Egg" desc="Golden perfection meets rich salted egg bliss." price={"40.000"} />
        <Card title="Gogigaru Bibimbap" desc="A bowl of harmony, packed with bold Korean flavors." price={"59.000"} />
        <Card title="Spaghetti Bolognese" desc="A classic Italian favorite with rich, meaty perfection in every twirl." price={"60.000"} />
        <Card title="Chicken Salted Egg" desc="Golden perfection meets rich salted egg bliss." price={"40.000"} />
      </div>

      <span className="text-[#6D4F25]">See More Menu</span>
    </section>
  );
}
