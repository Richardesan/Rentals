import React, { useState } from "react";
import PropertyDrop from "./propertyDropDown";
import ListingCard from "../../Property/component/ListingCard";
import PropertyInfo from "./PropertyInfo";
import BookingDetails from "./BookingDetails";
import Subheading from "./subheading";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../../utils/route";

const CreateAgreement = () => {
  const [propertyData, setPropertyData] = useState("");

  const handleSelect = (value) => {
    // console.log("Selected:", value);
    setPropertyData(value);
  };

  const Properties = [
    {
      id: 1,
      name: "Old jersey farm road 14 0367 Oslo",
      owner: " precious tami",
      location: "Banana Island, Lagos, NGA",
      locationImage: [
        "/house1.jpg",
        "/house2.jpg",
        "/house3.jpg",
        "/house4.jpg",
        "/house5.jpg",
        "/house6.jpg",
      ],
      price: 1200000,
      beds: 3,
      bath: 3,
      sqft: 1425,
    },
    {
      id: 2,
      name: "1st avenue odoguyan",
      owner: " precious tami",
      location: "Banana Island, Lagos, NGA",
      locationImage: [
        "/house3.jpg",

        "/house1.jpg",
        "/house2.jpg",
        "/house4.jpg",
        "/house5.jpg",
        "/house6.jpg",
      ],
      price: 5200000,
      beds: 1,
      bath: 3,
      sqft: 1425,
    },
    {
      id: 3,
      name: "futa west gate",
      owner: "precious tami",
      location: "Banana Island, Lagos, NGA",
      locationImage: [
        "/house2.jpg",

        "/house3.jpg",

        "/house1.jpg",
        "/house4.jpg",
        "/house5.jpg",
        "/house6.jpg",
      ],
      price: 5200000,
      beds: 1,
      bath: 3,
      sqft: 1425,
    },
    {
      id: 4,
      name: "Sapa city texas",
      owner: "precious tami",
      location: "Banana Island, Lagos, NGA",
      locationImage: [
        "/house6.jpg",

        "/house3.jpg",

        "/house1.jpg",
        "/house2.jpg",
        "/house4.jpg",
        "/house5.jpg",
      ],
      price: 5200000,
      beds: 1,
      bath: 3,
      sqft: 1425,
    },
    {
      id: 5,
      name: "oau scoop asunde",
      owner: "precious tami",
      location: "Banana Island, Lagos, NGA",
      locationImage: [
        "/house4.jpg",

        "/house3.jpg",

        "/house1.jpg",
        "/house2.jpg",
        "/house5.jpg",
        "/house6.jpg",
      ],
      price: 5200000,
      beds: 1,
      bath: 3,
      sqft: 1425,
    },
    {
      id: 6,
      name: "damiko hostel oau",
      owner: "precious tami",
      location: "Banana Island, Lagos, NGA",
      locationImage: [
        "/house5.jpg",

        "/house3.jpg",

        "/house1.jpg",
        "/house2.jpg",
        "/house4.jpg",
        "/house6.jpg",
      ],
      price: 5200000,
      beds: 1,
      bath: 3,
      sqft: 1425,
    },
  ];

  return (
    <div className="lato-regular">
  <section className="flex items-end justify-between w-full p-5 border-b border-b-rental-deep">
      <div className="">
        <p className="font-semibold text-xl">Create New Bookings</p>
        <p className=" text-rental-dark/70">Send a new rental agreement to tenant</p>
        <Link to={AppRoutes.landlordBookings}>
        <div className="flex items-center gap-x-2 cursor-pointer">
          <img src="/left.png" alt="left" className=" mt-1" />
          <p className="text-black/70">Go back</p>
        </div>
        </Link>
      </div>

    </section>
      <article className="max-w-2xl mx-auto mt-6 ">
        <div className="bg-rental-deep/20 rounded-lg  p-4 ">

        
        <p className="text-2xl font-semibold text-renatal-blue ">
          Property Selection
        </p>
        <p className="text-lg my-5 font-semibold">Select Property *</p>
        <PropertyDrop options={Properties} onSelect={handleSelect} />
         {propertyData && (
          <PropertyInfo propertyData={propertyData}/>
          
        )}
</div>
 {propertyData && 
       <div className="bg-rental-deep/20 rounded-lg p-4 mt-14  ">
       <BookingDetails popertydataID={propertyData?.id} />

       </div>
}
        
      </article>
    </div>
  );
};

export default CreateAgreement;
