import React, { useEffect, useState} from 'react'
import BookingsTable from './component/bookingsTable'
import Subheading from './component/subheading'
import { getAgreement } from '../../../services/queries'
import { useAuth } from '../../../context/authContext'
import { toast } from 'react-toastify'
import Spinner from '../../../component/Spinner'
const Bookings = () => {
  const {token} =useAuth()
  const [getagreementData, setGetAgreementData] = useState([])
  const [loading, setLoading] = useState(false)
  const getBookings = async () => {
    setLoading(true)
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
    }  finally {
    setLoading(false)

    }
  };
  useEffect(() => {
    if (token) {
      getBookings();
    }
  }, [token]);

  if (loading) {
    return <Spinner />;
  }
  
  return (
    <div className='lato-regular'>
      <Subheading/>
     <BookingsTable getagreementData={getagreementData}/>
    </div>
  )
}

export default Bookings