import React from "react";
import ContractTemplate from "./ContractTemplate";

const ViewBookingDetails = ({ selectedProperty }) => {
    function addCommas(number) {
  if (!number || isNaN(Number(number))) return number;

  const [intPart, decimalPart] = String(number).split(".");

  const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return decimalPart ? `${formattedInt}.${decimalPart}` : formattedInt;
}
const alladdress =selectedProperty.address.street + selectedProperty.address.city + selectedProperty.address.state + selectedProperty.address.country
  return (
    <div>
      <article className="bg-rental-deep/10 py-8 px-5 mt-5 rounded-lg">
        <h1 className="text-4xl font-bold ">{selectedProperty.title}</h1>

        <div className="flex justify-between items-start mt-2 py-3">
          <div>
            <p className="text-xl mb-2 font-semibold">
              Apartment by{" "}
              <span className="capitalize">{selectedProperty.landlordName}</span>
            </p>

            <div className="flex gap-x-0.5 items-center">
              <img
                src="/disyellow.svg"
                alt="blackpin"
                className="object-cover w-5"
              />

              <p className="text-sm text-black/50">
                {selectedProperty.address.street}, 
               <span className="pl-1"></span> {selectedProperty.address.city}, 
             <span className="pl-1"></span>   {selectedProperty.address.state}, 
               <span className="pl-1"></span> {selectedProperty.address.country}, 
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
                  {selectedProperty.numberOfBedrooms} Bed
                  {selectedProperty.numberOfBedrooms > 1 ? "s" : ""}
                </p>
              </div>
              <div className="flex gap-x-0.5 items-center ">
                <img
                  src="/bathtubYellow.svg"
                  alt="blackbathtub"
                  className="object-cover w-5"
                />
                <p>
                  {selectedProperty.numberOfBathrooms} bath
                  {selectedProperty.numberOfBathrooms > 1 ? "s" : ""}
                </p>
              </div>
              <div className="flex gap-x-0.5 items-center ">
                <img
                  src="/architectureYellow.svg"
                  alt="blackarchitecture"
                  className="object-cover w-5"
                />
                <p>{selectedProperty.numberOfKitchen} ft²</p>
              </div>
            </article>
          </div>
          <p className="text-2xl text-renatal-blue font-semibold">
            ₦{addCommas(selectedProperty.price.toLocaleString())}
          </p>
        </div>
      </article>
      <article className="bg-rental-deep/10 py-8 px-5 mt-5 rounded-lg">
        <h1 className="text-2xl font-semibold  text-renatal-blue  ">
          Agreement Terms
        </h1>
        <p className="mt-2 text-rental-dark font-semibold">General Terms</p>
        <p className="text-base text-rental-dark/60 font-semiibold w-11/12 pl-2 py-2">
          <ContractTemplate
  landlordFullName={selectedProperty.landlordName}
  landlordFullAddress={alladdress}
  agentName=" Agent"
  agentFullAddress="456 Agent Lane, Lagos"
  propertyAddress={alladdress}
  tenantFullName="Richard Tenant"
  tenantAddress="101 Tenant Rd, Port Harcourt"
  startDate="June 1, 2025"
  endDate="May 31, 2026"
  annualRent="500000"
  securityDeposit="50000"
  agentFee="50000"
/>
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
