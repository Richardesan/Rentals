import React from "react";
import { Link } from "react-router-dom";

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
  lastName,
  name,
  locationImage,
  status,
}) => {




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
    

      <article className="basis-[60%] z-10 h-60 overflow-hidden rounded-xl relative group cursor-pointer">
        <img
          src={locationImage[0]?.fileUrl}
          alt={locationImage[0]}
          className="w-full h-full object-cover bg-black transition-transform duration-300 transform group-hover:scale-110"
        />
        <p
          className={`absolute capitalize text-white top-2 left-2 rounded-full px-7 text-sm font-semibold py-1 ${getTransactionTypeClass(
            status
          )}`}
        >
          {status}
        </p>
      </article>

      <article className="basis-[50%] flex-col flex px-2 justify-between relative">
      

        <p className="text-xl font-bold text-rental-dark/90 w-11/12">{name}</p>

        <div className="my-3">
          <p className="text-base font-semibold capitalize">
            apartment by {firstName} {lastName}
          </p>
          <div className="flex gap-x-0.5 items-center">
            <img
              src="/distance.svg"
              alt="blackpin"
              className="object-cover w-4"
            />
            <p className="text-sm text-black/50">
              {location.city}, {location.state}, {location.country}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xl font-semibold mb-3 text-rental-dark/90">
            ₦ {addCommas(price)}
          </p>
          <article className="flex justify-between items-center text-sm">
            <div className="flex gap-x-0.5 items-center">
              <img
                src="/blackbed.svg"
                alt="blackbed"
                className="object-cover w-5"
              />
              <p>
                {beds} Bed{beds > 1 ? "s" : ""}
              </p>
            </div>
            <div className="flex gap-x-0.5 items-center">
              <img
                src="/blackbathtub.svg"
                alt="blackbathtub"
                className="object-cover w-5"
              />
              <p>
                {bath} bath{bath > 1 ? "s" : ""}
              </p>
            </div>
            <div className="flex gap-x-0.5 items-center">
              <img
                src="/blackarchitecture.svg"
                alt="blackarchitecture"
                className="object-cover w-5"
              />
              <p>{sqft} sqft</p>
            </div>
          </article>

          <Link to={`/tenant/dashboard/listingdetails/${id}`}>
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
