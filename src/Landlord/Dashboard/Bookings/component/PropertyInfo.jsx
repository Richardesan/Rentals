import React from "react";

const PropertyInfo = ({ propertyData }) => {
  function addCommas(number) {
    return String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div className="mt-5">
      <h1 className="text-base font-semibold">Property Info *</h1>
      <section
        className={`flex items-center justify-between rounded-xl pr-3 bg-glossy-gradient mt-2 h-60 overflow-hidden `}
      >
        <article className="basis-[50%] w-full h-full">
          <img
            src={propertyData.images[0]?.fileUrl}
            alt={propertyData.images[0]?.fileUrl}
            className="h-full w-full  object-cover object-center"
          />
        </article>
        <article className="basis-[45%] w-full  ">
          <div className=" ">
            <p className="text-xl font-semibold capitalize text-rental-dark/90">
              {propertyData.title}
            </p>

            <p className="text-base mt-5 mb-2 capitalize font-semibold">
             Apartment By {/* {propertyData.owner} */}
            </p>
            <div className="flex gap-x-0.5 items-center">
              <img
                src="/blackpin.png"
                alt="blackpin"
                className="object-cover w-4"
              />

              <p className="text-sm text-black/50">
                {propertyData.address.city} ,<span className=" pr-1"></span>{propertyData.address.state},<span className=" pr-1"></span>{propertyData.address.country}.
              </p>
            </div>
          </div>
          <div>
            <p className="text-xl font-semibold my-3 text-rental-dark/90">
              ₦ {addCommas(propertyData.price)}
            </p>
            <article className="flex justify-between items-center text-sm">
              <div className="flex gap-x-0.5 items-center ">
                <img
                  src="/blackbed.png"
                  alt="blackbed"
                  className="object-cover w-5"
                />
                <p>
                  {propertyData.numberOfBedrooms} Bed
                  {propertyData.numberOfBedrooms > 1 ? "s" : ""}
                </p>
              </div>
              <div className="flex gap-x-0.5 items-center ">
                <img
                  src="/blackbathtub.png"
                  alt="blackbathtub"
                  className="object-cover w-5"
                />
                <p>
                  {propertyData.numberOfBathrooms} bath
                  {propertyData.numberOfBathrooms > 1 ? "s" : ""}
                </p>
              </div>
              <div className="flex gap-x-0.5 items-center ">
                <img
                  src="/blackarchitecture.png"
                  alt="blackarchitecture"
                  className="object-cover w-5"
                />
                <p>{propertyData.numberOfKitchen} sqft</p>
              </div>
            </article>
          </div>
        </article>
      </section>
    </div>
  );
};

export default PropertyInfo;
