import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Amenities from "./component/amenities";
import NavList from "./component/navList";
import ListLayout from "./component/listLayout";
import Details from "./component/details";
import { useAuth } from "../../../../context/authContext";
import { getAllListing } from "../../../../services/queries";
import SkeletonImageGallery from "./component/SkeletonImageGallery ";
const LandlordListingDetails = () => {
  const { token } = useAuth()
  const { id } = useParams();
  const [owner, setOwner] = useState(true);
    const [myList, setMylist] = useState([])
  const [loading, setLoading] = useState(true)


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
    } finally {
      setLoading(false); 
    }
  };
  useEffect(() => {
    if (token) {
      getList();
    }
  }, [token]);


const selectedProperty = myList?.find((item) => item.id === id);
  if (loading) {
    return (
      <div>
      <NavList owner={owner} setOwner={() => setOwner((prev) => !prev)} />

    <SkeletonImageGallery />
    </div>
  )
  }


  if (!selectedProperty) {
    return <div className="p-4 text-red-500">Property not found</div>;
  }

  return (
    <section className=" lato-regular ">
      <NavList owner={owner} setOwner={() => setOwner((prev) => !prev)} />
     <ListLayout selectedProperty={selectedProperty} />
          <Details selectedProperty={selectedProperty} />
          <Amenities selectedAmenities={selectedProperty.amenities}/>
          {/* <Reservation /> */}
    </section>
  );
};

export default LandlordListingDetails;
