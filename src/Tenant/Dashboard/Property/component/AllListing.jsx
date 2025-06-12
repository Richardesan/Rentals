import React, {useEffect, useState } from "react";
import ListingCard from "./ListingCard.jsx";
import { useAuth } from "../../../../context/authContext";
import { getAllListing } from "../../../../services/queries";
import { toast } from "react-toastify";
import ListingSkeletonGroup from "./ListingSkeletonGroup";

const AllListing = () => {
  const { user, token } = useAuth();
  const [myList, setMylist] = useState([]);
    const [loading, setLoading] = useState(true);

  const getList = async () => {
    try {
      const data = await getAllListing({ token });
      setMylist(data?.data?.listings);
    } catch (err) {
      console.error("Error fetching listings:", err);
      toast.error("Failed to fetch listings", {
        style: {
          backgroundColor: "#C8170D",
          color: "#fff",
          fontSize: "0.8rem",
          padding: "8px 12px",
        },
      });
    }  finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (token) {
      getList();
    }
  }, [token]);
 if (loading) {
    return (
      <section className="flex items-center justify-center">
<ListingSkeletonGroup />
      </section>
    );
  }

   if (myList.length === 0) {
    return (
      <section className="flex items-center justify-center ">
        <div className="max-w-md p-2 flex flex-col justify-center items-center">
          <div className="w-28 h-28">
            <img src="/add_home.png" alt="Add Home" className="w-full h-full" />
          </div>
          <p className="text-lg font-semibold mt-4 text-rental-dark/90 capitalize">
            Oh snap! There is nothing here
          </p>
          <p className="text-sm font-semibold text-darkText/90 mt-4">
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className={`flex items-center  gap-5 flex-wrap ${myList.length === 1 ? "justify-start": "justify-center"}`}>
      {myList.map((data, index) => (
        <ListingCard
          key={index}
          id={data.id}
          name={data.title}
          firstName={user?.firstname}
          lastName={user?.lastname}
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
  );
};

export default AllListing;
