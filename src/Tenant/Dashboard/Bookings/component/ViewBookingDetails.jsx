import React from "react";

const ViewBookingDetails = ({ selectedProperty }) => {
  return (
    <div>
      <article className="bg-rental-deep/10 py-8 px-5 mt-5 rounded-lg">
        <h1 className="text-4xl font-bold ">{selectedProperty.name}</h1>

        <div className="flex justify-between items-start mt-2 py-3">
          <div>
            <p className="text-xl mb-2 font-semibold">
              Apartment by{" "}
              <span className="capitalize">{selectedProperty.owner}</span>
            </p>

            <div className="flex gap-x-0.5 items-center">
              <img
                src="/disyellow.svg"
                alt="blackpin"
                className="object-cover w-5"
              />

              <p className="text-sm text-black/50">
                {selectedProperty.location}
              </p>
            </div>
            <article className="flex justify-between items-center text-sm mt-5 ">
              <div className="flex gap-x-0.5 items-center ">
                <img
                  src="/bedYellow.svg"
                  alt="blackbed"
                  className="object-cover w-5"
                />
                <p>
                  {selectedProperty.beds} Bed
                  {selectedProperty.beds > 1 ? "s" : ""}
                </p>
              </div>
              <div className="flex gap-x-0.5 items-center ">
                <img
                  src="/bathtubYellow.svg"
                  alt="blackbathtub"
                  className="object-cover w-5"
                />
                <p>
                  {selectedProperty.bath} bath
                  {selectedProperty.bath > 1 ? "s" : ""}
                </p>
              </div>
              <div className="flex gap-x-0.5 items-center ">
                <img
                  src="/architectureYellow.svg"
                  alt="blackarchitecture"
                  className="object-cover w-5"
                />
                <p>{selectedProperty.sqft} ft²</p>
              </div>
            </article>
          </div>
          <p className="text-2xl text-renatal-blue font-semibold">
            ₦{selectedProperty.price.toLocaleString()}
          </p>
        </div>
      </article>
      <article className="bg-rental-deep/10 py-8 px-5 mt-5 rounded-lg">
        <h1 className="text-2xl font-semibold  text-renatal-blue  ">
          Agreement Terms
        </h1>
        <p className="mt-2 text-rental-dark font-semibold">General Terms</p>
        <p className="text-base text-rental-dark/60 font-semiibold w-11/12 pl-2 py-2">
          {selectedProperty.description}
        </p>
     
      <section className="w-full  flex items-center mt-9">
        <div className="basis-1/2 flex justify-center flex-col items-center">
          <p className="text-sm pb-5 text-renatal-blue font-semibold">Property owner’s Signature</p>
          <img src="/signature.svg" alt="signature.png" className="w-16 object-cover"/>
        </div>
          <div className="basis-1/2 flex justify-center flex-col items-center">
          <p className="text-sm pb-5 text-renatal-blue font-semibold">Tenant Signature</p>
          <img src="/signature.svg" alt="signature.svg" className="w-16  object-cover" />
        </div>
      
        </section> 
         </article>
    </div>
  );
};

export default ViewBookingDetails;
