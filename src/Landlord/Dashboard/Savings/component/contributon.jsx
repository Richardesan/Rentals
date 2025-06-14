import React, { useState } from "react";

const Contributon = ({
  setSelected,
  selected,
  handleFieldChange,
  interval,
}) => {
  const options = ["Daily", "Weekly", "Monthly"];

  return (
    <section>
      <h1 className="text-2xl font-semibold text-renatal-blue">
        Set Your Contribution Plan
      </h1>

      <p className="my-5 text-lg font-semibold">Select your interval for contribution</p>

      <article className="flex gap-x-7 items-center justify-center w-full mt-9 mb-5">
        {options.map((option) => (
          <div
            key={option}
            onClick={() => setSelected(option)}
            className={`cursor-pointer py-1 px-8 rounded-md text-center border transition-all duration-200
              ${
                selected === option
                  ? "bg-renatal-blue text-white border-white"
                  : "text-rental-dark border-rental-dark hover:bg-renatal-blue/10"
              }
            `}
          >
            {option}
          </div>
        ))}
      </article>
      <article className=" relative w-full">
        <p className="my-5 font-semibold text-rental-dark/80">
          How much can you contribute per interval?
        </p>
        {interval && <span className="absolute left-3 bottom-2">₦</span>}

        <input
          type="text"
          placeholder="₦ 0.00"
          value={interval}
          onChange={(e) => handleFieldChange("interval", e.target.value)}
          className={`border border-rental-deep w-full
             pl-6 py-2 text-sm font-semibold rounded-lg outline-none`}
        />
      </article>
      <p className=" font-semibold my-5 text-rental-dark/80">
        Projection Summary
      </p>
      <article className="flex gap-x-7 items-center justify-center w-full my-5 text-center ">
      
        <div className="px-6 py-2 border border-rental-dark rounded-md ">
          <p className="text-xs text-rental-dark/70">Total Contributions</p>
          <p className="text-rental-dark font-medium mt-2">₦15,000</p>
        </div>  <div className="px-3 py-2 border border-rental-dark rounded-md ">
          <p className="text-xs text-rental-dark/70">Number of payments</p>
          <p className="text-rental-dark font-medium mt-2">6</p>
        </div>
        <div className="px-8 py-2 border border-rental-dark rounded-md ">
          <p className="text-xs text-rental-dark/70">Total Savings</p>
          <p className="text-rental-dark font-medium mt-2">₦65,000</p>
        </div>
      </article>
      <p className="text-rental-green opacity-70">You'll reach your goal of ₦75,000 by 6/3/2026.</p>
    </section>
  );
};

export default Contributon;
