import React from "react";

const Review = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold text-renatal-blue">
        Review Your Savings Plan{" "}
      </h1>
      <article className="flex justify-start items-center gap-x-4 py-4 px-2 rounded-md w-full text-white  mt-4 bg-[#3DB23DA3]">
        <img
          src="/check.svg"
          alt="check.png"
          className="w-6 h-6 object-cover"
        />
        <div>
          <p className="text-sm">Your plan is ready</p>
          <p className="text-white/70 text-xs mt-1 ">
            You're on track to reach your goal by 6/3/2026.
          </p>
        </div>
      </article>
      <article className=" mt-5">
        <p className="bg-[#929394B2] py-2.5 text-white px-4 text-sm">
          Goal Details
        </p>
        <div className="bg-[#D9D9D9] p-4 rounded-bl-md rounded-br-md text-sm space-y-5 capitalize ">
          <div className="flex justify-between items-center">
            <p>Goal</p>
            <p>Unnamed Goal</p>
          </div>
           <div className="flex justify-between items-center">
            <p>Target Amount</p>
            <p>₦15,000</p>
          </div>
           <div className="flex justify-between items-center">
            <p>Target Date</p>
            <p>06/06/2026</p>
          </div>
           <div className="flex justify-between items-center">
            <p>Time Frame</p>
            <p>365 days(13 months)</p>
          </div>
        </div>
      </article>
        <article className=" mt-5">
        <p className="bg-[#929394B2] py-2.5 text-white px-4 text-sm">
          Contribution Plan
        </p>
        <div className="bg-[#D9D9D9] p-4 rounded-bl-md rounded-br-md text-sm space-y-5 capitalize ">
          <div className="flex justify-between items-center">
            <p>Contribution Schedule</p>
            <p>₦150,000 Monthly</p>
          </div>
           <div className="flex justify-between items-center">
            <p>Current Savings</p>
            <p>₦15,000</p>
          </div>
           <div className="flex justify-between items-center">
            <p>Total Contributions</p>
            <p>₦115,000</p>
          </div>
           <div className="flex justify-between items-center">
            <p>Time Frame</p>
            <p>365 days(13 months)</p>
          </div>
           <div className="flex justify-between items-center">
            <p>Projected Total</p>
            <p>₦125,000</p>
          </div>
        </div>
      </article>
      <article className="flex justify-start items-center gap-x-4 py-4 px-2 rounded-md w-full text-rental-dark  mt-4 bg-[#3DB23DA3]">
        <img
          src="/savings.svg"
          alt="check.png"
          className="w-6 h-6 object-cover"
        />
        <div>
          <p className="text-sm">Goal Achievable</p>
          <p className="text-rental-dark/70 text-xs mt-1 ">
           You'll reach your goal with 10 extra saved
          </p>
        </div>
      </article>
      <p className="text-center text-rental-dark my-5 text-sm text-rental-dark/70">Ready to start your savings journey?</p>
    </section>
  );
};

export default Review;
