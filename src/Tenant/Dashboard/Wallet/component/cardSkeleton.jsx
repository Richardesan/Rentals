import React from 'react'
import { motion } from 'framer-motion'

const shimmerStyle = {
  background: 'linear-gradient(90deg, #e0e0e0 25%, #f8f8f8 50%, #e0e0e0 75%)',
  backgroundSize: '200% 100%',
}

const Shimmer = ({ className }) => (
  <motion.div
    className={className}
    style={shimmerStyle}
    animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
    transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
  />
)

const CardSkeleton = () => {
  return (
    <section>
      <div className="max-w-[44rem] mx-auto bg-custom-gradient rounded-md py-12 flex flex-col items-center lato-regular capitalize">
        <Shimmer className="w-32 h-5 rounded-md mb-4" />
        <Shimmer className="w-52 h-12 rounded-md" />

        <div className="flex items-center gap-x-3 mt-20 font-medium">
          <Shimmer className="w-40 h-12 rounded-lg" />
          <Shimmer className="w-40 h-12 rounded-lg" />
        </div>
      </div>
    </section>
  )
}

export default CardSkeleton
