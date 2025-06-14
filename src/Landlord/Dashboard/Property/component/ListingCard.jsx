import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../../utils/route";
import { useAuth } from "../../../../context/authContext";
import { deleteLandlordProperty } from "../../../../services/queries";
import { toast } from "react-toastify";
import ButtonSpinner from "../../../../component/ButtonSpinner";
function addCommas(number) {
  return String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const ListingCard = ({
  id,
  sqft,
  bath,
  beds,
  price,
  location,
  firstName,
  name,
  locationImage,
  status,
  setReload
}) => {
const {token} = useAuth()

  const [showConfirm, setShowConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);


  const handleRemoveClick = () => {
    setShowConfirm(true);
  };

  const handleCancel = () => {
    setShowConfirm(false);
  };


const handleConfirmDelete = async ({ id }) => {
  setIsDeleting(true);
  try {
    await deleteLandlordProperty({ token, listingId: id });
     toast.success("Property Deleted!", {
              style: {
                backgroundColor: "#0C2D5B",
                color: "#fff",
                fontSize: "0.8rem",
                padding: "8px 12px",
              },
            });
    setShowConfirm(false);
  } catch (error) {
   toast.error(err?.response?.data?.message, {
           style: {
             backgroundColor: "#C8170D",
             color: "#fff",
             fontSize: "0.8rem",
             padding: "8px 12px",
           },
          } )
  } finally {
    setIsDeleting(false);
setReload((prev) => !prev)
  }
};


  const getTransactionTypeClass = (type) => {
    switch (type.toLowerCase()) {
      case "approved":
        return "bg-rental-green w-fit ";
      case "failed":
        return "bg-[#FF141473] w-fit ";
      case "under_review":
        return "bg-[#F4F434A6] w-fit";
      default:
        return "text-gray-600";
    }
  };


  
  return (
    <section className="w-[43rem] border-[5px] border-lightText rounded-xl p-2 flex lato-regular gap-x-3 relative">
      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed h-screen w-screen top-0 left-0  inset-0 backdrop-blur-sm bg-black/40 flex items-center justify-center z-50 rounded-xl" onClick={handleCancel}>
          <div className="bg-white  max-w-lg p-5 rounded-md shadow-lg text-center "      onClick={(e) => e.stopPropagation()} >
            <p className="text-lg font-bold mb-4 "> Confirm Property Delete?</p>
            <p className=" mb-4 text-rental-dark/80"> Are you sure you want to delete the property <span className="font-bold text-rental-dark">{" "}{name}?{" "}</span> Deleting it will delete the property from all cards in Leasestash</p>
            <div className="flex justify-center gap-4 ">
              <button
                className="bg-gray-300 text-black w-fit px-4 py-2 rounded-md "
                onClick={handleCancel}
              >
                Cancel
              </button>
             <button
  className="bg-[#C8170D] text-white px-4 py-2 w-28 justify-center rounded-md  flex items-center gap-x-2"
  onClick={() => handleConfirmDelete({ id: id })}
  disabled={isDeleting}
>
  {isDeleting ? (
   <ButtonSpinner />
  ) : (
    "Yes, Delete"
  )}
</button>

            </div>
          </div>
        </div>
      )}

      <article className="basis-[60%] z-10 h-60 overflow-hidden rounded-xl relative group cursor-pointer">
          <Link to={`/landlord/dashboard/listingdetails/${id}`} className="w-full">

        <img
          src={locationImage[0]?.fileUrl}
          alt={locationImage[0]}
          className="w-full h-full object-cover bg-black transition-transform duration-300 transform group-hover:scale-110"
        />
        </Link>
        <p className={`absolute capitalize text-white top-2 left-2 rounded-full px-7 text-sm font-semibold py-1 ${getTransactionTypeClass(status)}`}>
          {status}
        </p>
      </article>

      <article className="basis-[50%] flex-col flex px-2 justify-between relative">
        <div className="w-6 h-6 overflow-hidden absolute right-0 cursor-pointer top-0" onClick={handleRemoveClick}>
          <img src="/Remove.svg" alt="Removelisting" className="w-full h-full object-cover" />
        </div>

        <p className="text-xl font-bold text-rental-dark/90 w-11/12">{name}</p>

        <div className="my-3">
          <p className="text-base font-semibold capitalize">apartment by {firstName}</p>
          <div className="flex gap-x-0.5 items-center">
            <img src="/distance.svg" alt="blackpin" className="object-cover w-4" />
            <p className="text-sm text-black/50">
              {location.city}, {location.state}, {location.country}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xl font-semibold mb-3 text-rental-dark/90">₦ {addCommas(price)}</p>
          <article className="flex justify-between items-center text-sm">
            <div className="flex gap-x-0.5 items-center">
              <img src="/blackbed.svg" alt="blackbed" className="object-cover w-5" />
              <p>{beds} Bed{beds > 1 ? "s" : ""}</p>
            </div>
            <div className="flex gap-x-0.5 items-center">
              <img src="/blackbathtub.svg" alt="blackbathtub" className="object-cover w-5" />
              <p>{bath} bath{bath > 1 ? "s" : ""}</p>
            </div>
            <div className="flex gap-x-0.5 items-center">
              <img src="/blackarchitecture.svg" alt="blackarchitecture" className="object-cover w-5" />
              <p>{sqft} sqft</p>
            </div>
          </article>

          <Link to={`/landlord/dashboard/listingdetails/${id}`}>
            <div className="bg-renatal-blue text-center mt-3 text-white font-semibold rounded-md text-base w-full py-2 cursor-pointer">
              View more
            </div>
          </Link>
        </div>
      </article>
    </section>
  );
};

export default ListingCard;
