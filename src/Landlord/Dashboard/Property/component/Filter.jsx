import React from "react";

const FilterListing = ({ filters, handleChange, getList }) => {
  return (
    <div className="top-12 w-[25rem] absolute bg-white rounded-md p-4 filter-shadow z-50 right-0">
      <p className="text-lg font-bold text-rental-dark mb-3">Filter By</p>
      <div className="w-full flex-col flex gap-y-3">
        <div className="flex gap-x-1 items-center w-full">
          <label className=" w-full">
            <span className="text-sm font-bold block">StartDate</span>
            <input
              type="date"
              name="startDate"
              value={filters.startDate}
              onChange={handleChange}
              className="border px-4 py-2 text-sm  w-full  font-semibold rounded-lg outline-none"
              placeholder="Start Date"
            />
          </label>
          <label className=" w-full">
            <span className="text-sm font-bold block">EndDate</span>
            <input
              type="date"
              name="endDate"
              value={filters.endDate}
              onChange={handleChange}
              className="border px-4 py-2 text-sm  w-full font-semibold rounded-lg outline-none"
              placeholder="End Date"
            />
          </label>
        </div>
        <label>
          <p className="text-sm font-bold block">Price Range</p>
          <div className="flex justify-center gap-x-1">
            <input
              type="number"
              name="minPrice"
              value={filters.minPrice}
              onChange={handleChange}
              className="border px-4 py-2 text-sm  w-full font-semibold rounded-lg outline-none"
              placeholder="Min Price"
            />
            <input
              type="number"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleChange}
              className="border px-4 py-2 text-sm  w-full font-semibold rounded-lg outline-none"
              placeholder="Max Price"
            />
          </div>
        </label>

        <label>
          <span className="text-sm font-bold block">Availablity</span>
          <select
            name="availability"
            value={filters.availability}
            onChange={handleChange}
            className="border px-4 py-2 text-sm  w-full font-semibold rounded-lg outline-none"
          >
            <option value="true">Available</option>
            <option value="false">Not Available</option>
          </select>
        </label>
        <label>
          <span className="text-sm font-bold block">Property Type</span>

          <select
            name="availability"
            value={filters.availability}
            onChange={handleChange}
            className="border px-4 py-2 text-sm  w-full font-semibold rounded-lg outline-none"
          >
            <option value="true">Public Property</option>
            <option value="false">Not Available</option>
          </select>
        </label>

        <div className="flex justify-end">
          <button
            onClick={getList}
            className="bg-renatal-blue text-white px-4 py-2 rounded text-sm mt-5   transition"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterListing;
