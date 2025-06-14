import React, { useEffect, useState } from "react";
import BookingsTable from "./component/bookingsTable";
import Subheading from "./component/subheading";
import { getAgreement } from "../../../services/queries";
import { useAuth } from "../../../context/authContext";
import { toast } from "react-toastify";
import Spinner from "../../../component/Spinner";
const Bookings = () => {
  const { token } = useAuth();
  const [getagreementData, setGetAgreementData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getBookings = async () => {
    setLoading(true);
    try {
      const data = await getAgreement({ token });
      setGetAgreementData(data?.data);
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
    } finally {
      setLoading(false);
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

  if (!getagreementData) {
    return (
      <div>
        <Subheading />
        <div className="h-[70vh] flex justify-center items-center">
          <div className="text-center ">
            <img src="/Nobookings.svg" className="w-20 mx-auto" />
            <p className="mt-2 font-bold text-rental-dark/80">Oh snap! There is nothing here</p>
            <p className="mt-4 text-sm">You do not have any bookings yet</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="lato-regular">
      <Subheading />
      <BookingsTable getagreementData={getagreementData} />
    </div>
  );
};

export default Bookings;
