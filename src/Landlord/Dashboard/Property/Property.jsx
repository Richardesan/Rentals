import React, { useState, useEffect } from "react";
import AllListing from "./component/AllListing";
import { Link } from "react-router-dom";
import FilterDropdown from "./component/filterDropDown";
import { AppRoutes } from "../../../utils/route";
import { getAllListing } from "../../../services/queries";
import { useAuth } from "../../../context/authContext";
import { toast } from "react-toastify";
const Property = () => {
  const [filter, setFilter] = useState("Filter by");
  const [addProperty, SetAddProperty] = useState(true);
  

  return (
    <div className="  lato-regular">
      {addProperty && (
        <div>
          <section className="mt-11 px-28 flex w-full justify-between items-center">
            <article>
              <p className="text-4xl font-medium">Find Properties</p>
              <p>Search for properties and suit your conveniences</p>
            </article>
            <Link to={AppRoutes.landlordAddProperty}>
              <article className="bg-primaryCol text-white flex items-center font-semibold rounded-md  px-7 py-2 gap-x-3 cursor-pointer">
                <img src="/add.svg" alt="arrowdown.png" />

                <p>Add Property</p>
              </article>
            </Link>
          </section>
          <section className="flex items-center justify-between text-lg my-7 ">
            <div className="flex items-center gap-x-3 ">
              <p className="text-primaryCol underline cursor-pointer">
                All Listings
              </p>
              
            </div>
            <article className="flex gap-x-10 items-center">
              <div className="bg-gold-gradient p-[1px] rounded-full relative">
                <img
                  src="/inputsearch.png"
                  className="absolute  top-1/2 -translate-y-1/2 left-2"
                />
                <input
                  type="Search properties"
                  className="outline-none rounded-full px-10 py-1 placeholder:text-rental-deep text-rental-dark"
                  placeholder="Search Properties"
                />
              </div>
              <div className="flex items-center gap-x-3 ">
                <img src="/filter.svg" alt="filtericon.png" />
                <FilterDropdown selected={filter} onChange={setFilter} />
              </div>
            </article>
          </section>
        </div>
      )}

      <AllListing />
    </div>
  );
};

export default Property;
