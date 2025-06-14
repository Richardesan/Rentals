import React, { useState } from "react";
import OwnerListing from "./ownerlisting";
import FilterDropdown from "../../component/filterDropDown";
import OwenrInformation from "./owenrInformatio";
import Review from "../../../../../component/Review";
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
const PropertyOwner = ({selectedProperty}) => {
  const [filter, setFilter] = useState("Filter by");
  const [activeTab, setActiveTab] = useState("All Listings");

  const categories = [
    "All Listings",
    "Latest property",
    "Verified property",
    "Reviews",
  ];

  const renderComponent = () => {
    switch (activeTab) {
      case "All Listings":
        return <OwnerListing selectedProperty={selectedProperty} />;
      case "Reviews":
        return <Reviews />;
      default:
        return null;
    }
  };
  console.log(selectedProperty)
  return (
    <div>
      <OwenrInformation  selectedProperty={selectedProperty}/>
      <article className="flex justify-between py-3 my-5">
        <div className="flex items-center gap-x-10">
          {categories.map((category) => (
            <p
              key={category}
              className={`cursor-pointer ${
                activeTab === category
                  ? "text-primaryCol underline"
                  : "text-[#00000038]"
              }`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </p>
          ))}
        </div>
        <div className="flex items-center gap-x-3">
          <img src="/filtericon.png" alt="filtericon.png" />
          <FilterDropdown selected={filter} onChange={setFilter} />
        </div>
      </article>

      {renderComponent()}
    </div>
  );
};

export default PropertyOwner;
const Reviews = () => (
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
);
