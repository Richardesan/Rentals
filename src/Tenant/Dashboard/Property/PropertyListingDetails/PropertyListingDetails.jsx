import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Amenities from "./component/amenities";
import NavList from "./component/navList";
import ListLayout from "./component/listLayout";
import Details from "./component/details";
import PropertyOwner from "./component/PropertyOwner";
import Review from "../../../../component/Review"
import SkeletonImageGallery from "../../../../Landlord/Dashboard/Property/PropertyListingDetails/component/SkeletonImageGallery ";
import { useAuth } from "../../../../context/authContext";
import { getAllListing } from "../../../../services/queries";

const PropertyListingDetails = () => {
  const { id } = useParams();
  const [owner, setOwner] = useState(true);

    const { token } = useAuth()
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
      {owner ? (
        <>
          <ListLayout selectedProperty={selectedProperty} />
          <Details selectedProperty={selectedProperty} />
          <Amenities selectedAmenities={selectedProperty.amenities}/>


          
          <h1 className="text-2xl font-semibold mt-5">Reviews</h1>
          <div className=" gap-5 items-start flex flex-wrap justify-center my-5">
            {/* {reviewArray.map((data, index) => {
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
            })} */}
          </div>
        </>
      ) : (
        <PropertyOwner  selectedProperty={selectedProperty}/>
      )}
    </section>
  );
};

export default PropertyListingDetails;
