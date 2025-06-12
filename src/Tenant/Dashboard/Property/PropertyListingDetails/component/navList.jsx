import React from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../../../utils/route";
const NavList = ({setOwner, owner}) => {
  return (
    <section className="flex w-full justify-between my-4 py-3  border-b border-b-rental-deep">
      <div>
        <p className="text-xl font-semibold">Property details</p>
       {owner ? <Link to={AppRoutes.property}>
        <div className="flex items-center gap-x-2 cursor-pointer">
            <img src="/left.png" alt="left" className=" mt-1"/>
        <p className="text-black/70">Go back</p>

        </div>
        </Link>: <div className="flex items-center gap-x-2 cursor-pointer" onClick={setOwner}>
            <img src="/left.png" alt="left" className=" mt-1"/>
        <p className="text-black/70">Go back</p>
        </div> }

      </div>
     {owner && <p className="bg-primaryCol text-white flex items-center font-semibold rounded-md text-base px-7 py-2 gap-x-3 cursor-pointer w-fit" onClick={setOwner}>
        View property owner
      </p>}
    </section>
  );
};

export default NavList;
