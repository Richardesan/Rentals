import React from "react";
import ListingCard from "../../component/ListingCard";
const OwnerListing = () => {
  const listingData = [
    
    {
      id: 3,
      name: "Old jersey farm road 14 0367 Oslo",
      owner: "Apartment by precious tami",
      location: "Banana Island, Lagos, NGA",
      locationImage: [
        "/house3.jpg",
        "/house4.jpg",
        "/house5.jpg",
        "/house6.jpg",
         "/house1.jpg",
           "/house2.jpg",

      ],
      price: 5650000,
      beds: 3,
      bath: 3,
      sqft: 1425,
    },
        {
      id: 4,
      name: "Old jersey farm road 14 0367 Oslo",
      owner: "Apartment by precious tami",
      location: "Banana Island, Lagos, NGA",
      locationImage: [
        "/house4.jpg",
        "/house5.jpg",
        "/house6.jpg",
         "/house1.jpg",
           "/house2.jpg",
      "/house3.jpg",

      ],
      price: 72000000,
      beds: 3,
      bath: 3,
      sqft: 1425,
    },
         {
      id: 5,
      name: "Old jersey farm road 14 0367 Oslo",
      owner: "Apartment by precious tami",
      location: "Banana Island, Lagos, NGA",
      locationImage: [
        "/house5.jpg",
        "/house4.jpg",
        "/house6.jpg",
         "/house1.jpg",
           "/house2.jpg",
      "/house3.jpg",

      ],
      price: 12000000,
      beds: 3,
      bath: 3,
      sqft: 1425,
    },
         {
      id: 6,
      name: "Old jersey farm road 14 0367 Oslo",
      owner: "Apartment by precious tami",
      location: "Banana Island, Lagos, NGA",
      locationImage: [
        "/house6.jpg",
        "/house4.jpg",
        "/house5.jpg",
         "/house1.jpg",
           "/house2.jpg",
      "/house3.jpg",

      ],
      price: 24000000,
      beds: 3,
      bath: 3,
      sqft: 1425,
    },
   
  ];
  return (
    <section className="flex items-center justify-center gap-5 flex-wrap">

      
      {listingData.map((data, index) => {
        return (
          <ListingCard
          id={data.id}
            key={index}
            name={data.name}
            owner={data.owner}
            location={data.location}
            price={data.price}
            beds={data.beds}
            bath={data.bath}
            sqft={data.sqft}
            locationImage={data.locationImage}
          />
        )
      })}
      
    </section>
  );
};

export default OwnerListing;
