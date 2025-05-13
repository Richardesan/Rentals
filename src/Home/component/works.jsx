import React from "react";

const Works = () => {
  const tenantWork = [
    {
      img: "/1.png",
      title: "create an account",
      text: "Sign up and complete your profile with your preferences and requirements.",
    },
    {
      img: "/2.png",
      title: "Search Properties",
      text: "Browse our extensive collection of verified rental properties.",
    },
    {
      img: "/3.png",
      title: "Schedule Viewings",
      text: "Book in-person or virtual tours directly through our platform.",
    },
    {
      img: "/4.png",
      title: "Apply & Sign",
      text: "Submit your application and sign the lease agreement digitally.",
    },
  ];
  const landlordWork = [
    {
      img: "/1.png",
      title: "List Your Property",
      text: "Create detailed listings with photos, videos, and key information.",
    },
    {
      img: "/2.png",
      title: "Screen Tenants",
      text: "Review applications and background checks from qualified tenants.",
    },
    {
      img: "/3.png",
      title: "Manage Viewings",
      text: "Schedule and conduct property tours on your own schedule.",
    },
    {
      img: "/4.png",
      title: "Collect Rent",
      text: "Receive secure payments and manage your properties efficiently.",
    },
  ];
  const linkStyle =
    "cursor-pointer hover:text-white active:scale-95 hover:scale-105 transistion-all duration-100";

  return (
    <section
      className="h-screen text-white relative px-10 pt-14 flex items-center  "
      style={{
        backgroundImage: 'url("/works.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black absolute top-0 left-0 w-full h-full opacity-40 "></div>
      <section className=" flex justify-between items-center w-full">
        <article className=" text-white w-[15vw] ml-20">
          <p className="text-6xl lato-regular leading-tight">
            How it <span className="lato-regular-italic">works</span>
          </p>
          <p>
            Our streamlined process makes renting simple for everyone involved
          </p>
        </article>
        <article className="bg-white/10 backdrop-blur-sm border text-white border-white/20 px-14 py-5 flex gap-x-28 rounded-3xl items-center">
          <section>
            <article className="flex gap-x-1 pl-4">
              <img src="/yellow-brick.png" />
              <p className="text-xl lato-bold">For Tenants</p>
            </article>
            <div className="space-y-5 mt-4">
              {tenantWork.map((data, index) => {
                return (
                  <div className="flex items-center gap-x-3" key={index}>
                    <img src={data.img} />
                    <div>
                      <p className="capitalize text-lg lato-regular">
                        {data.title}
                      </p>
                      <p className="text-primary-light text-xs lato-light mt-3 w-56 break-words">
                        {data.text}
                      </p>
                    </div>
                  </div>
                );
              })}
              <button
                className={`px-6 py-3 border-primary-light border rounded-full font-semibold ${linkStyle}`}
              >
                Find your rental
              </button>
            </div>
          </section>
          <div>
            <img src="/workline.png" />
          </div>
          <section>
            <article className="flex gap-x-1 pl-4">
              <img src="/yellow-brick.png" />
              <p className="text-xl lato-bold">For Landlords</p>
            </article>
            <div className="space-y-5 mt-4">
              {landlordWork.map((data, index) => {
                return (
                  <div className="flex items-center gap-x-3" key={index}>
                    <img src={data.img} />
                    <div>
                      <p className="capitalize text-lg lato-regular">
                        {data.title}
                      </p>
                      <p className="text-primary-light text-xs lato-light mt-3 w-56 break-words">
                        {data.text}
                      </p>
                    </div>
                  </div>
                );
              })}
              <button
                className={`px-6 py-3 border-primary-light border rounded-full font-semibold ${linkStyle}`}
              >
                List your property
              </button>
            </div>
          </section>
        </article>
      </section>
    </section>
  );
};

export default Works;
