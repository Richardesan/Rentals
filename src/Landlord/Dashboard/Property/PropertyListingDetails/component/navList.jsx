import React from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../../../utils/route";
const NavList = () => {
  return (
    <section className="flex w-full justify-between my-4 py-3  border-b border-b-rental-deep">
      <div>
        <p className="text-xl font-semibold">Property details</p>
       <Link to={AppRoutes.landlordProperty}>
        <div className="flex items-center gap-x-2 cursor-pointer">
            <img src="/left.png" alt="left" className=" mt-1"/>
        <p className="text-black/70">Go back</p>

        </div>
        </Link>
      </div>
     <p className="bg-primaryCol text-white  flex items-center font-semibold rounded-md text-base px-7 py-2 gap-x-3 cursor-pointer w-fit" >
        Actions 
      </p>
    </section>
  );
};

export default NavList;
