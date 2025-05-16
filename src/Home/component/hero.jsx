import React from "react";
import Navbar from "./navbar";

const Hero = () => {
  const btnStyle = `hover:scale-105 active:scale-95 transition-all duration-100  px-6 py-3 rounded-xl lato-regular  text-lg`;
  return (
    <section>
      <article
        className="h-screen text-white relative pt-6  px-32"
        style={{
          backgroundImage: 'url("/renatlhero.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
        }}
      >

        <div className="bg-black absolute top-0 left-0 w-full h-full opacity-50 z-10"></div>

        <section className="absolute right-24 bottom-24">
          <article className="relative w-fit">
            <div className="animate-spin-slow">
              <img src="/scroll.png" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center z-20 hover:scale-105">
              <img src="/arrow.png" />
            </div>
          </article>
        </section>
        
        <section className="relative z-20">
          <Navbar />
          <article className="mt-28 w-[30vw] px-2 ">
            <h1 className="text-6xl lato-bold ">
              Find your Perfect Rental Home
            </h1>
            <p className="text-lg lato-regular-italic text-primary-light my-4">
              Simplifying the rental process for both tenants and landlords with
              our modern platform.
            </p>
            <div className="inline-flex gap-x-4">
              <button className={`bg-renatal-blue ${btnStyle}`}>
                Find a house
              </button>
              <button className={`border-primary-light border ${btnStyle}`}>
                List your property
              </button>
            </div>
            <section className="flex items-center gap-x-4 mt-4 text-sm lato-regular">
              <article className="flex items-center gap-x-1">
                <p className="w-3 h-3 rounded-full bg-rental-yellow"></p>
                <p className="">10,000+ Properties</p>
              </article>
              <article className="flex items-center gap-x-1">
                <p className="w-3 h-3 rounded-full bg-rental-yellow"></p>
                <p className="">10,000+ Properties</p>
              </article>
            </section>
          </article>
        </section>
      </article>
    </section>
  );
};

export default Hero;
