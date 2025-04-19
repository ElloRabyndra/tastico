import Nav from "../Components/Nav";
import Hero from "../Components/Menu/Hero";
import OurMenu from "../Components/Menu/OurMenu";
import Footer from "../Components/Footer";

export default function Menu() {
  return (
    <section id="menu" className="lg:px-16 px-8 space-y-10">
      <Nav />
      <Hero />
      <OurMenu />
      <Footer />
    </section>
  );
}
