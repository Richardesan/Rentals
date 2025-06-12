import React,{useState} from 'react'
import { motion, AnimatePresence } from "framer-motion";

const ListLayout = ({selectedProperty}) => {
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
  }
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

      <section className="flex justify-between h-[47rem] ">
        <div className="relative w-full  basis-[79%] rounded-lg overflow-hidden">
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
        <article className="basis-[20%]">
          <div
            className={`flex flex-col h-full ${
              selectedProperty.locationImage.length < 4
                ? "gap-y-3 justify-start"
                : "justify-between"
            }`}
          >
            {selectedProperty.locationImage.slice(1, 4).map((img, index) => {
              const realIndex = index + 1; // actual index in the original array
              const isFourth = index === 2;

              return (
                <div
                  key={index}
                  className="relative cursor-pointer"
                  onClick={() => openViewerAt(realIndex)}
                >
                  <img
                    src={img}
                    alt={`Image ${realIndex + 1}`}
                    className="w-full h-[15.4rem] object-cover rounded"
                  />
                  {isFourth && selectedProperty.locationImage.length > 4 && (
                    <div
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent double open
                        openViewerAt(realIndex);
                      }}
                      className="absolute inset-0 bg-black/60 text-white flex items-center justify-center rounded text-sm font-semibold"
                    >
                      +{selectedProperty.locationImage.length - 4} more
                    </div>
                  )}
                </div>
              );
            })}
          </div>
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

  )
}

export default ListLayout