import React, { useEffect, useState} from 'react'
import BookingsTable from './component/bookingsTable'
import Subheading from './component/subheading'
import { getAgreement } from '../../../services/queries'
import { useAuth } from '../../../context/authContext'
import { toast } from 'react-toastify'
const Bookings = () => {
  const {token} =useAuth()
  const [reload, setReload] = useState(false)
  const [getagreementData, setGetAgreementData] = useState([])
  const getBookings = async () => {
    try {
      const data = await getAgreement({ token });
      setGetAgreementData(data?.data)
    } catch (err) {
      console.error("Error fetching listings:", err);
      toast.error("Failed to fetch listings", {
        style: {
          backgroundColor: "#C8170D",
          color: "#fff",
          fontSize: "0.8rem",
          padding: "8px 12px",
        },
      });
    }  
  };
  useEffect(() => {
    if (token) {
      getBookings();
    }
  }, [token, reload]);
console.log(getagreementData)
  return (
    <div className='lato-regular'>
      <Subheading/>
     <BookingsTable getagreementData={getagreementData}/>
    </div>
  )
}

export default Bookings