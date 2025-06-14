import React, { useState } from "react";
import ContractTemplate from "./ContractTemplate";
import ButtonSpinner from "../../../../component/ButtonSpinner";
import TerminateModal from "./terminateModal";

const ViewBookingDetails = ({
  selectedProperty,
  myAgreement,
  myTenant,
  landlordSignature,
  setReload,
}) => {
  function addCommas(number) {
    if (!number || isNaN(Number(number))) return number;

    const [intPart, decimalPart] = String(number).split(".");

    const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return decimalPart ? `${formattedInt}.${decimalPart}` : formattedInt;
  }
  const [isCheckboxValid, setIsCheckboxValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);

  return (
    <div>
      <article className="bg-rental-deep/10 py-8 px-5 mt-5 rounded-lg">
        <h1 className="text-4xl font-bold ">{selectedProperty.title}</h1>

        <div className="flex justify-between items-start mt-2 py-3">
          <div>
            <p className="text-xl mb-2 font-semibold">
              Apartment by{" "}
              <span className="capitalize">
                {selectedProperty.landlordName}
              </span>
            </p>

            <div className="flex gap-x-0.5 items-center">
              <img
                src="/disyellow.svg"
                alt="blackpin"
                className="object-cover w-5"
              />

              <p className="text-sm text-black/50">
                {selectedProperty.address.street},<span className="pl-1"></span>{" "}
                {selectedProperty.address.city},<span className="pl-1"></span>{" "}
                {selectedProperty.address.state},<span className="pl-1"></span>{" "}
                {selectedProperty.address.country},
              </p>
            </div>
            <article className="flex justify-between items-center text-sm mt-5 w-fit gap-x-6">
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
            ₦{addCommas(myAgreement.rentAmount.toLocaleString())}
          </p>
        </div>
      </article>
      <article className="bg-rental-deep/10 py-8 px-5 mt-5 rounded-lg">
        <h1 className="text-2xl font-semibold  text-renatal-blue  ">
          Agreement Terms
        </h1>
        <p className="mt-2 text-rental-dark font-semibold">General Terms</p>
        <p className="text-base text-rental-dark/60 font-semiibold w-11/12 pl-2 py-2">
          {myAgreement.termsAndConditions}
        </p>

        <section className="w-full  flex items-center justify-center mt-9">
          <div className="basis-1/2 flex justify-center flex-col items-center">
            <p className="text-sm pb-5 text-renatal-blue font-semibold">
              Property owner’s Signature
            </p>
            <img
              src={landlordSignature}
              alt="signature.png"
              className="w-28 h-28 object-cover"
            />
          </div>

          {myAgreement.tenantSignatureDate && (
            <div className="basis-1/2 flex justify-center flex-col items-center">
              <p className="text-sm pb-5 text-renatal-blue font-semibold">
                Tenant Signature
              </p>
              <img
                src={myTenant.signature}
                alt="signature.svg"
                className="w-28 h-28 object-cover"
              />
            </div>
          )}
        </section>
      {!myAgreement.tenantSignatureDate && <div>
          {myAgreement.terminationReason ? (
            <p className="text-danger font-bold mt-5">
              This Property has been terminated/cancelled
            </p>
          ) : (
            <div>
              <label className="flex gap-x-2 mt-9">
                <input
                  type="checkbox"
                  className="accent-renatal-blue"
                  checked={isCheckboxValid}
                  onChange={(e) => setIsCheckboxValid(e.target.checked)}
                />
                <p className="text-sm text-renatal-blue font-semibold cursor-pointer">
                  By proceeding, you would terminate this contract
                </p>
              </label>

              <div className="flex justify-center gap-x-5 capitalize mt-5">
                <button
                  onClick={() => setOpen(true)}
                  disabled={loading || !isCheckboxValid}
                  className={`w-28 py-2 rounded-md font-bold flex justify-center items-center text-white ${
                    loading || !isCheckboxValid
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-red-700"
                  }`}
                >
                  {loading ? <ButtonSpinner /> : "Terminate"}
                </button>
              </div>
            </div>
          )}
        </div>}
      </article>
      <TerminateModal
        isOpen={open}
        myAgreementID={myAgreement.id}
        onClose={() => setOpen(false)}
        setReload={setReload}
      />
    </div>
  );
};

export default ViewBookingDetails;
