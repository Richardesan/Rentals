import React from 'react'
import { useAuth } from '../../../context/authContext'
const Navbar = () => {
  const {user} = useAuth()
  return (
    <section className="flex justify-between items-center">
        <div>
          <p className="text-2xl font-semibold">Welcome <span className='capitalize'>{user.firstname}</span>, Add new property</p>
          <p>Check out where you call home</p>
        </div>
        <div className="gap-x-3 flex items-center">
          <img
            src="/notification.svg"
            alt="notification.png"
            className="w-10 h-10 object-contain bg-rental-deep rounded-full"
          />
          <div className="flex gap-x-1.5 items-center p-2 bg-rental-deep rounded-full">
            <img
              src="/accountProfile.svg"
              alt="accountProfile.svg"
              className="w-9 h-9 object-contain"
            />
            <div className="text-white">
              <p className="text-sm">{user.firstname} {user.lastname}</p>
              <p className="text-xs opacity-80">{user.email}</p>
            </div>
            <img 
            src='/whiteArrow.svg'
              alt="whiteArrow.svg"

            />
          </div>
        </div>
      </section>
  )
}

export default Navbar