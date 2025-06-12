import { motion } from "framer-motion";

const spinnerVariants = {
  animate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      ease: "linear",
      duration: 1,
    },
  },
};

const Spinner = () => {
  return (
    <motion.div
      className="w-12 h-12 border-4 border-t-transparent border-renatal-blue rounded-full"
      variants={spinnerVariants}
      animate="animate"
    />
  );
};

export default Spinner;
