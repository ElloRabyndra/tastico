import Nav from "../Components/Nav";
import Hero from "../Components/Hero";

export default function Home() {
  return (
    <section id="home" className="lg:px-16 px-8 space-y-10">
      <Nav />
      <Hero />
    </section>
  );
}
