import React, { useState, useEffect } from "react";
import Card from "../Card";
import { fetchMenus } from "../../services/api";

export default function OurMenu() {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMenus = async () => {
      try {
        const data = await fetchMenus();

        const popularMenus = data.slice(0, 3);

        console.log(popularMenus);

        setMenus(popularMenus);
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
    <section id="best-menu" className="flex flex-col items-center justify-center text-xl space-y-12 -mb-10 -mx-8 lg:-mx-16 px-12 bg-[#F4F4F4] py-16">
      <div className="text-center space-y-4">
        <h1 className="text-[#6D4F25] text-xl">BEST MENU</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 gap-6 items-center justify-center">{menus && menus.map((menu) => <Card key={menu.ID} title={menu.name} desc={menu.cover} price={menu.price} />)}</div>

      <span className="text-[#6D4F25]">See More Menu</span>
    </section>
  );
}
