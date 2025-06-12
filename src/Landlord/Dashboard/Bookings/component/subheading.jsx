import React from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../../utils/route";

const Subheading = () => {
  const btnStyle = `bg-renatal-blue text-white py-3 px-9 rounded-lg cursor-pointer w-fit`;
  return (
    <section className="flex items-end justify-between w-full p-5 border-b border-b-rental-deep">
      <div className="">
        <p className="font-semibold text-xl">Bookings</p>
        <div className="flex items-center gap-x-2 cursor-pointer">
          <img src="/left.png" alt="left" className=" mt-1" />
          <p className="text-black/70">Go back</p>
        </div>
      </div>
      <Link to={AppRoutes.landlordCreateBookings}>
        <div
          className={`${btnStyle}  text-base font-semibold gap-x-2 flex items-center`}
        >
          <img src="/bookmentIcon.png" alt="bookmentIcon.png" />
          Create an agreement
        </div>
      </Link>
    </section>
  );
};

export default Subheading;
