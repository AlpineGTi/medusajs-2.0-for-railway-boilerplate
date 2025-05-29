import React from "react";

const Hero = () => (
  <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 text-center">
    <h1 className="text-4xl md:text-6xl font-bold text-blue-800 mb-4">
      Denver’s Largest Source for New & Used Skis and Snowboards
    </h1>
    <p className="text-lg md:text-2xl text-blue-700 mb-6 max-w-2xl mx-auto">
      Get your whole family on the slopes—affordably! Shop the best selection of
      new and used gear, plus expert tunes, repairs, and rentals. Serving the
      Denver metro area.
    </p>
    <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
      <a
        href="/shop/skis"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded shadow"
      >
        Shop Skis
      </a>
      <a
        href="/shop/snowboards"
        className="bg-blue-400 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded shadow"
      >
        Shop Snowboards
      </a>
      <a
        href="/services"
        className="bg-white border border-blue-600 text-blue-700 font-semibold py-3 px-8 rounded shadow hover:bg-blue-100"
      >
        Rentals & Repairs
      </a>
    </div>
    <div className="text-blue-600 font-medium">
      <span>Family-owned • Local Denver Experts • All Budgets Welcome</span>
    </div>
  </section>
);

export default Hero;
