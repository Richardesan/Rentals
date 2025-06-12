import React from 'react'
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../../../utils/route';

const Success = () => {
  const btnStylefull = `bg-renatal-blue text-white py-2.5 px-9 rounded-full w-full capitalize font-semibold`;

  return (
         <div className="max-w-md p-2  flex flex-col justify-center items-center ">
            <div className='w-28 h-28'>
        <img src="/checkCircle.png" className='w-full h-full'/>

            </div>
        <p className="text-lg font-semibold mt-4 text-rental-dark/90 capitalize">
          Property publishing was successful
        </p>
        <p className="mt-4 capitalize text-sm">
          Your property has been listed and is now visible to tenants.
        </p>
        <Link to={AppRoutes.landlordDashboard} className='w-full'>
        <button className={`mt-6 ${btnStylefull}`}>Back to Dashboard</button>
        
        </Link>
        <p className="text-sm font-semibold text-darkText/90 mt-4">
          Awaiting Admin Approval...
        </p>
      </div>
  )
}

export default Success