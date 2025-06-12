import React from "react";

const Platform = () => {
  const platformList = [
    {
      logo: "/home.png",
      title: "Verified Listings",
      text: `Every property is verified by our team to ensure quality and
              accuracy.`,
    },
    {
      logo: "/search.png",
      title: "Smart Search",
      text: `Find exactly what you need with our advanced filtering options.`,
    },

    {
      logo: "/shield.png",
      title: "Secure Payments",
      text: `Rent payments are protected and secure with our payment system.`,
    },
    {
      logo: "/schedule.png",
      title: "24/7 Support",
      text: `Our customer service team is available around the clock.`,
    },
    {
      logo: "/head_mounted_device.png",
      title: "Virtual Tours",
      text: `View properties remotely with our virtual tour technology.`,
    },
    {
      logo: "/favorite.png",
      title: "Favorite Properties",
      text: `Save and compare your favorite listings to make decisions easier.`,
    },
  ];
  const linkStyle =
    "cursor-pointer active:scale-95 hover:scale-105 transistion-all duration-100";

  return (
    <section className=" bg-primary-light text-black py-16 h-screen max-lg:h-[unset] flex justify-center items-center  px-32  max-md:px-[4%]">
      <article>

      
      <article>
        <div className="flex items-center justify-center max-sm:gap-x-3">
          <img src="/Star.png" />
          <p className="text-4xl lato-bold max-sm:text-xl text-center">
            {" "}
            <span className="lato-bold-italic">Why</span> Choose Our Platform
          </p>
          <img src="/Star.png" />
        </div>
        <p className="max-w-[46rem] text-center mx-auto mt-4 lato-regular text-2xl max-sm:text-base px-3">
          We've simplified the rental process with features designed for both
          tenants and landlords.
        </p>
      </article>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3   ">
        {platformList.map((data, index) => {
          const isNotLastColumn = index % 3 !== 2;
          const isNotLastRow = index < platformList.length - 3;

          return (
            <article
              key={index}
              className={`flex gap-x-6 items-start pb-3 p-10 ${
                isNotLastColumn ? "border-r border-r-black/30 max-lg:border-0" : ""
              } ${isNotLastRow ? "border-b border-b-black/30 max-lg:border-0" : ""}`}
            >
              <div className=" min-w-8">
                <img src={data.logo} className="w-full h-auto object-contain" />
              </div>
              <div className="pb-3 w-full">
                <h1 className="text-2xl lato-bold max-sm:text-xl">{data.title}</h1>
                <p className="text-xl max-sm:text-base lato-regular mt-3 break-words ">
                  {data.text}
                </p>
              </div>
            </article>
          );
        })}
      </section>
      <div className="w-fit mx-auto mt-5">
          <button
        className={`px-6 py-3 border-rental-yellow text-rental-yellow border rounded-full font-semibold ${linkStyle}`}
      >
        view all
      </button>
      </div>
    </article>
    </section>
  );
};

export default Platform;
