import React, {useEffect, useState } from "react";
import ListingCard from "./ListingCard";
import { useAuth } from "../../../../context/authContext";
import { getAllListing } from "../../../../services/queries";
import { toast } from "react-toastify";
import Loading from "../../../../component/Loading";
import ListingSkeletonGroup from "./ListingSkeletonGroup";
import FilterListing from "./Filter";

const AllListing = ({loading, myList, setReload}) => {



 if (loading) {
    return (
      <section className="flex items-center justify-center">
<ListingSkeletonGroup />
      </section>
    );
  }

   if (myList.length === 0) {
    return (
      <div>
        
      <section className="flex items-center justify-center ">
        <div className="max-w-md p-2 flex flex-col justify-center items-center">
          <div className="w-28 h-28">
            <img src="/add_home.png" alt="Add Home" className="w-full h-full" />
          </div>
          <p className="text-lg font-semibold mt-4 text-rental-dark/90 capitalize">
            Oh snap! There is nothing here
          </p>
          <p className="text-sm font-semibold text-darkText/90 mt-4">
            You do not have any listing yet
          </p>
        </div>
      </section>
      </div>

    );
  }

  return (
    <div>

    <section className={`flex items-center  gap-5 flex-wrap ${myList.length === 1 ? "justify-start": "justify-center"}`}>
      {myList.map((data, index) => (
        <ListingCard
        setReload={setReload}
          key={index}
          id={data.id}
          name={data.title}
          firstName={data?.landlordName}
          location={data.address}
          price={data.price}
          beds={data.numberOfBedrooms}
          bath={data.numberOfBathrooms}
          sqft={data.numberOfKitchen}
          locationImage={data.images}
          status={data.approvalStatus}
        />
      ))}
    </section>
    </div>

  );
};

export default AllListing;
