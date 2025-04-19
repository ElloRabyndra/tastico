import Nav from "../Components/Nav";
import Hero from "../Components/Home/Hero";
import BestMenu from "../Components/Home/BestMenu";
import AboutUs from "../Components/Home/AboutUs";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <section id="home" className="lg:px-16 px-8 space-y-10">
      <Nav />
      <Hero />
      <BestMenu />
      <AboutUs />
      <Footer />
    </section>
  );
}
