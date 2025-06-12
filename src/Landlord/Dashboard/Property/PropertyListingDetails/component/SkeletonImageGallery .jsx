import { motion } from "framer-motion";
import React from "react";

const shimmerAnimation = {
  backgroundPosition: ["-200% 0", "200% 0"],
};

const shimmerTransition = {
  duration: 3, // slower and smoother
  repeat: Infinity,
  ease: "linear",
};

const SkeletonBox = ({ className }) => (
  <motion.div
    className={`bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded ${className}`}
    animate={shimmerAnimation}
    transition={shimmerTransition}
  />
);
const SkeletonImageGallery = () => {
  return (
    <div>
        
   
    <section className="flex justify-between h-[47rem]">
      {/* Main Image */}
      <div className="relative w-full basis-[79%] rounded-lg overflow-hidden">
        <motion.div
          className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded-lg shadow"
          animate={shimmerAnimation}
          transition={shimmerTransition}
        />

        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black/30 text-white px-3 py-1 rounded-l text-2xl">
          ‹
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black/30 text-white px-3 py-1 rounded-r text-2xl">
          ›
        </div>
      </div>

      {/* Side Thumbnails */}
      <article className="basis-[20%] flex flex-col h-full justify-between gap-y-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-full h-[15.4rem] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded"
            animate={shimmerAnimation}
            transition={shimmerTransition}
          />
        ))}
      </article>
      
    </section>
   
     </div>
  );
};

export default SkeletonImageGallery;
