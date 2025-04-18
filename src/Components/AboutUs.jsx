import React from "react";

export default function AboutUs() {
  return (
    <section id="about-us" className="flex xl:text-2xl text-xl gap-6 text-[#6D4F25] py-8">
      <img src="img/aboutus-img.png" alt="" className="w-1/3" />
      <div className="xl:space-y-12 space-y-8">
        <div className="xl:space-y-4 space-y-2">
          <h1 className="text-xl text-right">ABOUT US</h1>
          <h1 className="xl:text-4xl text-2xl font-semibold">Because flavor isn't just a taste — it's a feeling.</h1>
        </div>

        <div className="xl:space-y-10 space-y-6">
          <div className="flex gap-6 items-center">
            <img src="img/about1-img.png" alt="" className="xl:size-24 size-16" />
            <p>We use only the freshest and finest ingredients, handpicked to ensure every dish bursts with authentic flavor and unbeatable quality.</p>
          </div>
          <div className="flex gap-6 items-center">
            <img src="img/about2-img.png" alt="" className="xl:size-24 size-16" />
            <p>Each meal is prepared by skilled hands and a heart that loves good food. From preparation to plating, every detail matters.</p>
          </div>
          <div className="flex gap-6 items-center">
            <img src="img/about3-img.png" alt="" className="xl:size-24 size-16" />
            <p>We're committed to delivering the same great taste in every bite no shortcuts, no compromises, just top-tier food you can count on.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
