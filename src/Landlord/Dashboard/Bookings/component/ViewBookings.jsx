import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import ListLayout from "../../Property/PropertyListingDetails/component/listLayout";
import BookingListLayout from "./bookingListLayout";
// import Details from "../../Property/PropertyListingDetails/component/details";
import ViewBookingDetails from "./ViewBookingDetails";
import { AppRoutes } from "../../../../utils/route";
import { IoMdCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { useAuth } from "../../../../context/authContext";
import { downloadAgreement, getSingleAgreeement } from "../../../../services/queries";
import Spinner from "../../../../component/Spinner";
import ButtonSpinner from "../../../../component/ButtonSpinner";
import { jsPDF } from "jspdf";

const ViewBookings = () => {
  const { bookingid } = useParams();
  const [listingData, setListingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [myloading, setMyloading] = useState(false)
const [downloadbooking, setDownloadBooking]= useState(null)
const [reload, setReload]= useState(false)
  const { token } = useAuth();

  const getMyAgreement = async () => {
    setLoading(true);
    try {
      const data = await getSingleAgreeement({ token, id: bookingid });
      setListingData(data?.data);
    } catch (err) {
      console.error("Error fetching listing:", err);
    } finally {
      setLoading(false);
    }
  };


  const agreementdownload = async () => {
    setMyloading(true);
    try {
      const data = await downloadAgreement({ token, id: bookingid });
      setDownloadBooking(data);
    } catch (err) {
      console.error("Error fetching listing:", err);
    } finally {
      setMyloading(false);
    }
  };
console.log(typeof downloadbooking);


const handleDownload = () => {
  if (!downloadbooking) return;

  const blob = new Blob([downloadbooking], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "booking.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url); // Clean up
};

  useEffect(() => {
    if (token && bookingid) {
      getMyAgreement();
      agreementdownload()
    }
  }, [token, bookingid, reload]);

  const myAgreement = listingData?.agreement;
  const myListing = listingData?.listing;
  const myTenant = listingData?.tenant;
  const landlordSignature = listingData?.landlord?.signature;
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="lato-regular">
      <section className="flex items-end justify-between w-full p-5 border-b border-b-rental-deep">
        <div className="">
          <p className="font-semibold text-xl">View Bookings</p>
          <Link to={AppRoutes.landlordBookings}>
            <div className="flex items-center gap-x-2 cursor-pointer">
              <img src="/left.png" alt="left" className=" mt-1" />
              <p className="text-black/70">Go back</p>
            </div>
          </Link>
        </div>
      </section>
      <div className="flex items-center justify-between py-5">
        <h1 className="text-2xl text-renatal-blue font-semibold">
          AGR-{myAgreement?.id}
        </h1>
        <button disabled={myloading} className="bg-primaryCol text-white flex items-center font-semibold rounded-md w-fit  px-7 py-2 gap-x-3 cursor-pointer" onClick={handleDownload}>
          <img src="/arrowdown.png" alt="arrowdown.png" />

       Download
        </button>
      </div>
      <div className="flex items-center gap-x-9 mb-7">
        <p className="text-renatal-blue underline ">Agreement Details</p>
        <p className="text-rental-deep ">Payment Interval</p>
      </div>

      {myListing && <BookingListLayout selectedProperty={myListing} myAgreement={myAgreement} myListing={myListing}/>}

      <section className="flex justify-between items-start">
        <article className="basis-[74%] ">
          {myListing && myAgreement && (
            <ViewBookingDetails
              selectedProperty={myListing}
              myAgreement={myAgreement}
              myTenant={myTenant}
              landlordSignature={landlordSignature}
              setReload={setReload}
            />
          )}
        </article>
        <article className="bg-rental-deep/10  p-4 basis-[24%] mt-5 rounded-2xl">
          <h1 className="font-bold text-darkText text-lg">Tenant</h1>
          <div className="max-w-sm h-52 overflow-hidden rounded-2xl my-5">
            <img
              src={myTenant.profilePicture}
              alt="house1.jpg"
              className="w-full h-full object-cover"
            />
          </div>
          <section className="space-y-3">
            <div>
              <p className="text-rental-dark font-medium">Name</p>
              <p className="text-rental-dark/70">{myTenant.firstname} {myTenant.lastname}</p>
            </div>
            <div>
              <p className="mb-1">Phone number</p>
              <div className="flex gap-x-2 items-center justify-start">
                <IoMdCall className="text-xl  text-renatal-blue" />
                <p className="text-rental-dark/70">+234-863565432</p>
              </div>
            </div>
            <div>
              <p className="mb-1">Email</p>
              <div className="flex gap-x-2 items-center justify-start">
                <CiMail className="text-xl text-renatal-blue mt-1" />
                <p className="text-rental-dark/70">{myTenant.email}</p>
              </div>
            </div>
          </section>
        </article>
      </section>
    </div>
  );
};

export default ViewBookings;
