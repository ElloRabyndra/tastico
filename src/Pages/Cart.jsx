import Nav from "../Components/Nav";
import MyCart from "../Components/Cart/MyCart";
import Footer from "../Components/Footer";

export default function Cart() {
  return (
    <section id="cart" className="lg:px-16 px-8 space-y-10">
      <Nav />
      <MyCart />
      <button className="bg-[#6D4F25] hover:text-black hover:bg-transparent hover:border-2 hover:border-[#6D4F25] w-full py-2 rounded-full cursor-pointer text-white">Booking Table</button>
      <Footer />
    </section>
  );
}
