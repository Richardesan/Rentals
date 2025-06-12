import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LiaBedSolid } from "react-icons/lia";

const BookingListLayout = ({ selectedProperty }) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const images = selectedProperty.locationImage;
  const openViewerAt = (index) => {
    setStartIndex(index);
    setIsViewerOpen(true);
  };
  const totalImages = images.length;

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prevIndex) => (prevIndex + newDirection + totalImages) % totalImages
    );
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      position: "absolute",
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative",
    },
    exit: (dir) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      position: "absolute",
    }),
  };
  const closeViewer = () => {
    setIsViewerOpen(false);
    setStartIndex(null);
  };

  const goLeft = () => {
    if (startIndex !== null) {
      setStartIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }
  };

  const goRight = () => {
    if (
      startIndex !== null &&
      startIndex < selectedProperty.locationImage.length - 1
    ) {
      setStartIndex((prev) => prev + 1);
    }
  };

  return (
    <section>
      <section className="flex justify-between  h-[30rem]  overflow-hidden">
        <div className="relative w-full  basis-[74%] rounded-lg overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover rounded-lg shadow"
            />
          </AnimatePresence>

          <button
            onClick={() => paginate(-1)}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-l text-2xl"
          >
            ‹
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-r text-2xl"
          >
            ›
          </button>
        </div>
        <article className="basis-[24%] flex flex-col justify-between py-4 ">
            <div>

            
          <h1 className="font-bold text-rental-dark text-lg">Available Status</h1>
          <div className="flex justify-start items-center gap-x-1 p-2 px-6 rounded-full w-fit mx-auto mt-4 bg-[#27AE6059]">
            <img
              src="/check.svg"
              alt="check.png"
              className="w-6 h-6 object-cover"
            />
            <p className="text-[#009A49] font-bold ">Available</p>
            </div>
          </div>
          <section className="items-end  space-y-4">
            <div className=" ">
              <p className="text-darkText/70">Start Date</p>
              <p className="font-semibold text-darkText/80 mt-1">May 1, 2025</p>
            </div>
            <div className=" ">
              <p className="text-darkText/70">End Date</p>
              <p className="font-semibold text-darkText/80 mt-1">
                November 1, 2030
              </p>
            </div>
            <div className=" ">
              <p className="text-darkText/70">Renewal Option</p>
              <p className="font-semibold text-darkText/80 mt-1">5 years</p>
            </div>
            <div className=" ">
              <p className="text-darkText/70">Duration</p>
              <p className=" text-sm mt-1 max-h-16 py-1 overflow-y-auto">
                Option to renew for additional 6 months with 30 days notice. 5%
                increase in monthly rent applies to renewal term.
                Option to renew for additional 6 months with 30 days notice. 5%
                increase in monthly rent applies to renewal term.
                   
              </p>
            </div>
          </section>
        </article>
      </section>
      {isViewerOpen && startIndex !== null && (
        <div className="fixed inset-0 bg-black/80 z-50 left-0 top-0  flex items-center justify-center">
          <button
            onClick={closeViewer}
            className="absolute top-4 right-6 text-white text-4xl font-bold"
          >
            ×
          </button>
          <button
            onClick={goLeft}
            className="absolute left-4 text-white text-5xl font-bold px-3 py-1"
          >
            ‹
          </button>
          <img
            src={selectedProperty.locationImage[startIndex]}
            alt={`Image ${startIndex + 1}`}
            className="max-w-[90%] max-h-[90%] object-contain rounded shadow"
          />
          <button
            onClick={goRight}
            className="absolute right-4 text-white text-5xl font-bold px-3 py-1"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
};

export default BookingListLayout;
