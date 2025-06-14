import React, { useState, useEffect } from "react";
import PropertyDrop from "./propertyDropDown";
import ListingCard from "../../Property/component/ListingCard";
import PropertyInfo from "./PropertyInfo";
import BookingDetails from "./BookingDetails";
import Subheading from "./subheading";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../../utils/route";
import { useAuth } from "../../../../context/authContext";
import { getAllListing } from "../../../../services/queries";
import ListingSkeletonGroup from "../../Property/component/ListingSkeletonGroup";
import Spinner from "../../../../component/Spinner";
import { toast } from "react-toastify";
const CreateAgreement = () => {
  const [propertyData, setPropertyData] = useState("");
  const [myList, setMylist] = useState([]);
  const { token } = useAuth();

  const [loading, setLoading] = useState(true);

  const getList = async () => {
    try {
      const data = await getAllListing({ token });
      setMylist(data?.data?.listings);
    } catch (err) {
      console.error("Error fetching listings:", err);
     toast.error(err?.response?.data?.message , {
            style: {
              backgroundColor: "#C8170D",
              color: "#fff",
              fontSize: "0.8rem",
              padding: "8px 12px",
            },
          });
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (token) {
      getList();
    }
  }, [token]);

  const handleSelect = (value) => {
    setPropertyData(value);
  };
  console.log(myList);
  if (loading) {
    return (
      <section className="flex items-center justify-center h-[70vh]">
        <Spinner />
      </section>
    );
  }

  return (
    <div className="lato-regular">
      <section className="flex items-end justify-between w-full p-5 border-b border-b-rental-deep">
        <div className="">
          <p className="font-semibold text-xl">Create New Bookings</p>
          <p className=" text-rental-dark/70">
            Send a new rental agreement to tenant
          </p>
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
          <PropertyDrop options={myList} onSelect={handleSelect} />
          {propertyData && <PropertyInfo propertyData={propertyData} />}
        </div>
        {propertyData && (
          <div className="bg-rental-deep/20 rounded-lg p-4 mt-14  ">
            <BookingDetails popertydataID={propertyData} />
          </div>
        )}
      </article>
    </div>
  );
};

export default CreateAgreement;
