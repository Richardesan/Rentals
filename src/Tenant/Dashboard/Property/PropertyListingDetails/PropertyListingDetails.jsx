import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Amenities from "./component/amenities";
import NavList from "./component/navList";
import ListLayout from "./component/listLayout";
import Details from "./component/details";
import PropertyOwner from "./component/PropertyOwner";
import Review from "../../../../component/Review"

const PropertyListingDetails = () => {
  const { id } = useParams();
  const [owner, setOwner] = useState(true);
  const listingData = [
    {
      id: 1,
      name: "Orchid  Oslo",
      owner: " precious tami",
      location: "Banana Island, Lagos, NGA",
      locationImage: [
        "/house1.jpg",
        "/house2.jpg",
        "/house3.jpg",
        "/house4.jpg",
        "/house5.jpg",
        "/house6.jpg",
        "/house4.jpg",
        "/house5.jpg",
        "/house6.jpg",
      ],
      price: 2000,
      beds: 3,
      bath: 3,
      sqft: 1425,
      description: `Welcome to this charming 3-bedroom, 2-bathroom bungalow located in a quiet, family-friendly neighborhood. This home features a spacious living area with large windows that allow plenty of natural light, a modern kitchen with granite countertops, and a private backyard perfect for relaxing or entertaining guests. The master bedroom includes an en-suite bathroom and walk-in closet. Conveniently situated near schools, shops,
       and public transport, this property offers both comfort and accessibility. Ideal for families or professionals seeking a serene place to call home.`,
    },
    {
      id: 2,
      name: "Old jersey farm road 14 0367 Oslo",
      owner: " precious tami",
      location: "Banana Island, Lagos, NGA",
      locationImage: [
        "/loginPreview.png",
        "/loginPreview.png",
        "/loginPreview.png",
        "/loginPreview.png",
      ],
      price: 2000,
      beds: 3,
      bath: 3,
      sqft: 1425,
    },
    {
      id: 3,
      name: "Old jersey farm road 14 0367 Oslo",
      owner: " precious tami",
      location: "Banana Island, Lagos, NGA",
      locationImage: [
        "/loginPreview.png",
        "/loginPreview.png",
        "/loginPreview.png",
        "/loginPreview.png",
      ],
      price: 2000,
      beds: 3,
      bath: 3,
      sqft: 1425,
    },
    {
      id: 4,
      name: "Old jersey farm road 14 0367 Oslo",
      owner: " precious tami",
      location: "Banana Island, Lagos, NGA",
      locationImage: [
        "/loginPreview.png",
        "/loginPreview.png",
        "/loginPreview.png",
        "/loginPreview.png",
      ],
      price: 2000,
      beds: 3,
      bath: 3,
      sqft: 1425,
    },
  ];
  const reviewArray = [
    {
      startcount: 4,
      authorImg: "/d1.jpg",
      authorLocation: "Lagos, Nigeria",
      author: "Zaniab Walters",
      review: `We had a great experience with Richard Williams residences. The location,
     and the cleanliness of the apartment was amazing. 
     We would  highly recommend this apartment and we shall definitely stay there again.`,
    },
    {
      startcount: 4,
      authorImg: "/d1.jpg",
      authorLocation: "Lagos, Nigeria",
      author: "Zaniab Walters",
      review: `We had a great experience with Richard Williams residences. The location,
     and the cleanliness of the apartment was amazing. 
     We would  highly recommend this apartment and we shall definitely stay there again.`,
    },
    {
      startcount: 4,
      authorImg: "/d1.jpg",
      authorLocation: "Lagos, Nigeria",
      author: "Zaniab Walters",
      review: `We had a great experience with Richard Williams residences. The location,
     and the cleanliness of the apartment was amazing. 
     We would  highly recommend this apartment and we shall definitely stay there again.`,
    },
    {
      startcount: 4,
      authorImg: "/d1.jpg",
      authorLocation: "Lagos, Nigeria",
      author: "Zaniab Walters",
      review: `We had a great experience with Richard Williams residences. The location,
     and the cleanliness of the apartment was amazing. 
     We would  highly recommend this apartment and we shall definitely stay there again.`,
    },
  ];

  const selectedProperty = listingData.find((item) => item.id === Number(id));
  if (!selectedProperty) {
    return <div className="p-4 text-red-500">Property not found</div>;
  }

  return (
    <section className=" lato-regular ">
      <NavList owner={owner} setOwner={() => setOwner((prev) => !prev)} />
      {owner ? (
        <>
          <ListLayout selectedProperty={selectedProperty} />
          <Details selectedProperty={selectedProperty} />
          <Amenities />
          <h1 className="text-2xl font-semibold mt-5">Reviews</h1>
          <div className=" gap-5 items-start flex flex-wrap justify-center my-5">
            {reviewArray.map((data, index) => {
              return (
                <Review
                  key={index}
                  startcount={data.startcount}
                  authorImg={data.authorImg}
                  authorLocation={data.authorLocation}
                  author={data.author}
                  review={data.review}
                />
              );
            })}
          </div>
        </>
      ) : (
        <PropertyOwner />
      )}
    </section>
  );
};

export default PropertyListingDetails;
