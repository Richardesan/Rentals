import React, { useState } from "react";

const Review = ({startcount, review, author, authorImg, authorLocation}) => {

  return (
    <div className=" max-w-[22rem] bg-white px-6 pt-9  pb-20 shadow-[0px_0px_4px_0px_#00000040] rounded-xl">
      <div className="flex">
        {Array.from({ length: startcount }).map((_, index) => (
          <img
            key={index}
            src="/reviewstar.png"
            alt="review star"
            style={{ width: "25px", height: "25px", marginRight: "4px" }}
          />
        ))}
      </div>

      {/* Example button to increase star count */}
      {/* <button onClick={() => setCountStrt(startcount + 1)}>Add Star</button> */}
      <p className="block mt-10">
       {review}
      </p>
      <section className="mt-10 flex gap-x-5 items-center">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img
            src={authorImg}
            alt={authorImg}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-rental-dark/70 font-medium mt-1">{authorLocation}</p>
        </div>
      </section>
    </div>
  );
};

export default Review;
