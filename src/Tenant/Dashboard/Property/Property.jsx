import React, { useState } from "react";
import AllListing from "./component/AllListing";
import { Link } from "react-router-dom";
import FilterDropdown from "./component/filterDropDown";

const Property = () => {
  const [filter, setFilter] = useState("Filter by");

  return (
    <div className=" h-full lato-regular">
      <section className="mt-11 px-28 flex w-full justify-between items-center">
        <article>
          <p className="text-4xl font-medium">Find Properties</p>
          <p>Search for properties and suit your conveniences</p>
        </article>
        <article className="bg-primaryCol text-white flex items-center font-semibold rounded-md text-lg px-7 py-2 gap-x-3 cursor-pointer">
          <p>Action</p>
          <img src="/arrowdown.png" alt="arrowdown.png" />
        </article>
      </section>
      <section className="flex items-center justify-between text-lg my-7 border-b pb-4 border-b-[#00000038]">
        <div className="flex items-center gap-x-3 ">
          <p className="text-primaryCol underline cursor-pointer">All Listings</p>
          <p className="cursor-pointer  text-[#00000038]">Recenly Added</p>
        </div>
        <article className="flex gap-x-10">

<div className="bg-gold-gradient p-[1px] rounded-full relative">
  <img src="/inputsearch.png" className="absolute  top-1/2 -translate-y-1/2 left-2"/>
          <input type="Search properties" className="outline-none rounded-full px-10 py-1 placeholder:text-rental-deep text-rental-dark" placeholder="Search Properties"/>

</div>
          <div className="flex items-center gap-x-3">
            <img src="/filtericon.png" alt="filtericon.png" />
          <FilterDropdown selected={filter} onChange={setFilter} />

          </div>
        </article>

      </section>
      <AllListing />
    </div>
  );
};

export default Property;
