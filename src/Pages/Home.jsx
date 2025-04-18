import Nav from "../Components/Nav";
import Hero from "../Components/Hero";
import BestMenu from "../Components/BestMenu";
import AboutUs from "../Components/AboutUs";

export default function Home() {
  return (
    <section id="home" className="lg:px-16 px-8 space-y-10">
      <Nav />
      <Hero />
      <BestMenu />
      <AboutUs />
    </section>
  );
}
