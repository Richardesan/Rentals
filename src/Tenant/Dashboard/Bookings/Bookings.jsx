import React, { useState } from 'react'
import BookingsTable from './component/bookingsTable'
import Subheading from './component/subheading'

const Bookings = () => {
  const [agreement, setAgreement] = useState(true)
  return (
    <div className='lato-regular'>
      <Subheading/>
     <BookingsTable />
    </div>
  )
}

export default Bookings