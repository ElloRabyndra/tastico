import React, { useState, useEffect } from "react";
import Card from "../Card";
import { fetchMenus } from "../../services/api";

export default function BestMenu() {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMenus = async () => {
      try {
        const data = await fetchMenus();

        setMenus(data);

        console.log(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    getMenus();
  }, []);

  if (loading) return <div>Loading best menus...</div>;
  if (error) return <div>Error loading menus: {error}</div>;

  return (
    <section id="best-menu" className="flex flex-col items-center justify-center text-xl space-y-12 -mx-8 lg:-mx-16 px-16 bg-[#E1BC64] py-16">
      <div className="text-center space-y-4">
        <h1 className="text-[#6D4F25] text-xl">BEST MENU</h1>
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl">POPULAR FOOD IN OUR RESTAURANT</h1>
      </div>

      <div className="flex flex-wrap lg:gap-12 gap-6 items-center justify-center">{menus && menus.map((menu) => <Card key={menu.ID} title={menu.name} desc={menu.cover} price={menu.price} />)}</div>
    </section>
  );
}
