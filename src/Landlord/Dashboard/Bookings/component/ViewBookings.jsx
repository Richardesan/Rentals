import React from "react";
import { Link, useParams } from "react-router-dom";
import ListLayout from "../../Property/PropertyListingDetails/component/listLayout";
import BookingListLayout from "./bookingListLayout";
import Details from "../../Property/PropertyListingDetails/component/details";
import ViewBookingDetails from "./ViewBookingDetails";
import { AppRoutes } from "../../../../utils/route";
import { IoMdCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";

const ViewBookings = () => {
  const { bookingid } = useParams();
  const listingData = [
    {
      id: 1,
      name: "Orchid  Oslo",
      owner: " precious tami",
      location: "Banana Island, Lagos, NGA",
      agreementID: "AGR-2025-001",
      locationImage: [
        "/house1.jpg",
        "/house2.jpg",
        "/house3.jpg",
        "/house4.jpg",
        "/house5.jpg",
        "/house6.jpg",
        "/house4.jpg",
        "/house5.jpg",
        "/house6.jpg",
      ],
      price: 1200000,
      beds: 3,
      bath: 3,
      sqft: 1425,
      description: `This Residential Lease Agreement ("Agreement") is made between Richard Williams ("Property Owner") and Precious Owo ("Tenant") for the property located at 123 Coastal Drive, Malibu, Banana Island, Lagos ("Property"). The lease term is for 5 years, beginning on May 1, 2025, and ending on November 1, 2030. The monthly rent is ₦1,200,000, due on the 1st day of each month. A security deposit of ₦200,000 has been collected and will be returned within 30 days of lease termination, less any deductions for damages beyond normal wear and tear. Tenant agrees to use the Property as a private residence only and to comply with all applicable laws, regulations, and HOA rules. No subletting is permitted without prior written consent from the Landlord.

This Residential Lease Agreement ("Agreement") is made between Richard Williams ("Property Owner") and Precious Owo ("Tenant") for the property located at 123 Coastal Drive, Malibu, Banana Island, Lagos ("Property"). The lease term is for 5 years, beginning on May 1, 2025, and ending on November 1, 2030.
The monthly rent is ₦1,200,000, due on the 1st day of each month. A security deposit of ₦200,000 has been collected and will be returned within 30 days of lease termination, less any deductions for damages beyond normal wear and tear.
Tenant agrees to use the Property as a private residence only and to comply with all applicable laws, regulations, and HOA rules. No subletting is permitted without prior written consent from the Landlord.`,
    },
    {
      id: 2,
      name: "Old jersey farm road 14 0367 Oslo",
      owner: " precious tami",
      location: "Banana Island, Lagos, NGA",
      agreementID: "AGR-2025-001",
      locationImage: [
        "/loginPreview.png",
        "/loginPreview.png",
        "/loginPreview.png",
        "/loginPreview.png",
      ],
      price: 1202000,
      beds: 3,
      bath: 3,
      sqft: 1425,
            description: `This Residential Lease Agreement ("Agreement") is made between Richard Williams ("Property Owner") and Precious Owo ("Tenant") for the property located at 123 Coastal Drive, Malibu, Banana Island, Lagos ("Property"). The lease term is for 5 years, beginning on May 1, 2025, and ending on November 1, 2030. The monthly rent is ₦1,200,000, due on the 1st day of each month. A security deposit of ₦200,000 has been collected and will be returned within 30 days of lease termination, less any deductions for damages beyond normal wear and tear. Tenant agrees to use the Property as a private residence only and to comply with all applicable laws, regulations, and HOA rules. No subletting is permitted without prior written consent from the Landlord.

This Residential Lease Agreement ("Agreement") is made between Richard Williams ("Property Owner") and Precious Owo ("Tenant") for the property located at 123 Coastal Drive, Malibu, Banana Island, Lagos ("Property"). The lease term is for 5 years, beginning on May 1, 2025, and ending on November 1, 2030.
The monthly rent is ₦1,200,000, due on the 1st day of each month. A security deposit of ₦200,000 has been collected and will be returned within 30 days of lease termination, less any deductions for damages beyond normal wear and tear.
Tenant agrees to use the Property as a private residence only and to comply with all applicable laws, regulations, and HOA rules. No subletting is permitted without prior written consent from the Landlord.`
    },
    {
      id: 3,
      name: "Old jersey farm road 14 0367 Oslo",
      owner: " precious tami",
      location: "Banana Island, Lagos, NGA",
      agreementID: "AGR-2025-001",

      locationImage: [
        "/loginPreview.png",
        "/loginPreview.png",
        "/loginPreview.png",
        "/loginPreview.png",
      ],

      price: 2000,
      beds: 3,
      bath: 3,
      sqft: 1425,
    },
    {
      id: 4,
      name: "Old jersey farm road 14 0367 Oslo",
      owner: " precious tami",
      location: "Banana Island, Lagos, NGA",
      agreementID: "AGR-2025-001",
      locationImage: [
        "/loginPreview.png",
        "/loginPreview.png",
        "/loginPreview.png",
        "/loginPreview.png",
      ],
      price: 2000,
      beds: 3,
      bath: 3,
      sqft: 1425,
    },
  ];
  const selectedProperty = listingData.find(
    (item) => item.id === Number(bookingid)
  );
  if (!selectedProperty) {
    return <div className="p-4 text-red-500">Property not found</div>;
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
          {" "}
          {selectedProperty.agreementID}
        </h1>
        <button className="bg-primaryCol text-white flex items-center font-semibold rounded-md w-fit  px-7 py-2 gap-x-3 cursor-pointer">
          <img src="/arrowdown.png" alt="arrowdown.png" />

          <p>Download</p>
        </button>
      </div>
      <div className="flex items-center gap-x-9 mb-7">
        <p className="text-renatal-blue underline ">Agreement Details</p>
        <p className="text-rental-deep ">Payment Interval</p>
      </div>

      <BookingListLayout selectedProperty={selectedProperty} />

      <section className="flex justify-between items-start">
        <article className="basis-[74%] ">
          <ViewBookingDetails selectedProperty={selectedProperty} />
        </article>
        <article className="bg-rental-deep/10  p-4 basis-[24%] mt-5 rounded-2xl">
          <h1 className="font-bold text-darkText text-lg">Tenant</h1>
          <div className="max-w-sm h-52 overflow-hidden rounded-2xl my-5">
            <img
              src="/house1.jpg"
              alt="house1.jpg"
              className="w-full h-full object-cover"
            />
          </div>
          <section className="space-y-3">
            <div>
              <p className="text-rental-dark font-medium">Name</p>
              <p className="text-rental-dark/70">Precious Owo</p>
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
                <p className="text-rental-dark/70">preciousowo@gmail.com</p>
              </div>
            </div>
          </section>
        </article>
      </section>
    </div>
  );
};

export default ViewBookings;
