import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const shimmerVariants = {
  shimmer: {
    backgroundPosition: "200% 0",
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const ShimmerBlock = ({ className }) => (
  <motion.div
    className={clsx(
      "bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 bg-[length:200%_100%] animate-shimmer",
      className
    )}
    variants={shimmerVariants}
    animate="shimmer"
    initial={false}
  />
);

const Loading = () => {
  return (
    <section className="w-[43rem] border-[5px] border-lightText rounded-xl p-2 flex lato-regular gap-x-3 relative animate-pulse">
      <article className="basis-[60%] z-10 h-60 overflow-hidden rounded-xl relative">
        <ShimmerBlock className="w-full h-full rounded-xl" />
      </article>

      <article className="basis-[50%] flex-col flex px-2 justify-between relative">
        <div className="w-6 h-6 absolute right-0 top-0">
          <ShimmerBlock className="w-full h-full rounded-full" />
        </div>

        <ShimmerBlock className="h-6 w-11/12 rounded" />

        <div className="my-3">
          <ShimmerBlock className="h-4 w-4/5 rounded mb-2" />
          <ShimmerBlock className="h-4 w-3/4 rounded" />
        </div>

        <div>
          <ShimmerBlock className="h-5 w-2/5 rounded mb-3" />
          <article className="flex justify-between items-center text-sm gap-x-2">
            {[...Array(3)].map((_, i) => (
              <ShimmerBlock key={i} className="h-5 w-1/4 rounded" />
            ))}
          </article>

          <ShimmerBlock className="mt-3 h-8 w-full rounded-md" />
        </div>
      </article>
    </section>
  );
};

export default Loading;
