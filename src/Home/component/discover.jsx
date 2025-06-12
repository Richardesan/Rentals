import React from "react";

const Discover = () => {
  const discoverItems = [
    {
      image: "/d1.jpg",
      price: "2,400",
      apartment: "Modern Apartment with Balcony",
      location: "Banana Island, Lagos, NGA",
      beds: 3,
      baths: 4, 
      size: 1425
    
    },
     {
      image: "/d2.jpg",
      price: "2,400",
      apartment: "Modern Apartment with Balcony",
      location: "Banana Island, Lagos, NGA",
      beds: 3,
      baths: 4, 
      size: 1425
    
    },
     {
      image: "/d3.jpg",
      price: "2,400",
      apartment: "Modern Apartment with Balcony",
      location: "Banana Island, Lagos, NGA",
      beds: 3,
      baths: 4, 
      size: 1425
    
    },
     {
      image: "/d4.jpg",
      price: "2,400",
      apartment: "Modern Apartment with Balcony",
      location: "Banana Island, Lagos, NGA",
      beds: 3,
      baths: 4, 
      size: 1425
    
    },
     {
      image: "/d5.jpg",
      price: "2,400",
      apartment: "Modern Apartment with Balcony",
      location: "Banana Island, Lagos, NGA",
      beds: 3,
      baths: 4, 
      size: 1425
    
    },
     {
      image: "/d6.jpg",
      price: "2,400",
      apartment: "Modern Apartment with Balcony",
      location: "Banana Island, Lagos, NGA",
      beds: 3,
      baths: 4, 
      size: 1425
    
    },

    
  ];
  const linkStyle =
    "cursor-pointer active:scale-95 hover:scale-105 transistion-all duration-100";

  return (
    <section className="px-32  max-md:px-[4%] py-8 bg-primary-light">
      <article className="flex  items-center justify-between max-lg:flex-col">
        <p className="text-6xl max-w-[23rem] lato-regular max-lg:text-center max-sm:text-3xl">
          Discover your <span className="lato-regular-italic">Best match</span>
        </p>
        <p className="text-lg max-w-[27rem] max-lg:text-center max-lg:mt-3 max-sm:text-base">
          We connect you with premium properties that match your unique
          lifestyle, preferences, and needs, ensuring a seamless experience in
          exploring our handpicked selection of outstanding rental properties.
        </p>
      </article>
      <article className="mt-12 flex flex-wrap justify-center gap-x-12 ">
        {discoverItems.map((data, index) => {
          return (
            <div
              style={{
                backgroundImage: `url(${data.image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              className=" mb-6 w-[26rem] max-xl:w-[23rem] h-[30rem] rounded-3xl relative flex items-end overflow-hidden"
            >
                <img src="/discoverfavorite.png" className="absolute top-6 right-6 cursor-pointer" />
              <div className="   pt-8 px-8 pb-4 w-full bg-white/10 backdrop-blur-sm text-white">
                <section className="flex items-start justify-between">
                  <article className="space-y-1">
                    <p className="text-rental-yellow text-xl lato-bold">
                      ${data.price}/mon
                    </p>
                    <p className="text-sm  text-white">{data.apartment}</p>
                    <div className="flex gap-x-1 items-center">
                      <img src="/distance.png" />
                      <p className="text-xs opacity-50">{data.location}</p>
                    </div>
                  </article>
                  <img
                    src="/discoverarrow.png"
                    className="w-7 cursor-pointer"
                  />
                </section>
                <img
                  src="/discoverline.png"
                  className="w-screen px-5 pt-5 pb-2"
                />
              
                        <article className="flex justify-center gap-x-5 lato-regular">
                  <div className="flex items-center gap-x-1">
                    <img src="/bed.png" />
                    <p className="text-xs">{data.beds} Beds</p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="/bathtub.png" />
                    <p className="text-xs">{data.baths} Baths</p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <img src="/architecture.png" />
                    <p className="text-xs">{data.size} sqrt</p>
                  </div>
                </article>
                  
                
              </div>
            </div>
          );
        })}
    
      </article>
       <div className="w-fit mx-auto mt-5">
          <button
        className={`px-6 py-3 border-rental-yellow text-rental-yellow border rounded-full font-semibold ${linkStyle}`}
      >
        view all
      </button>
      </div>
    </section>
  );
};

export default Discover;
