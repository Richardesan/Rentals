import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AppRoutes } from "../../../utils/route";
import { useAuth } from "../../../context/authContext";
import { FaCaretDown } from "react-icons/fa";
const Sidebar = () => {
  const { logout } = useAuth();
  const location = useLocation();

  const getLinkClass = (paths) => {
    return paths.some((path) => {
      if (path.includes(":")) {
        const basePath = path.split("/:")[0];
        return location.pathname.startsWith(basePath);
      }
      return location.pathname === path;
    })
      ? "bg-renatal-blue text-white"
      : "text-black";
  };
  return (
    <div className="w-80 bg-[#F7F8FA] h-screen px-12 pb-9 flex flex-col items-start justify-between shadow-subtle">
      <article className="mt-28">
        <img src="/newLogo.svg" />
        <section className="text-lg font-semibold space-y-3 mt-9 capitalize">
          {/* <div>
            <Link
              to={AppRoutes.landlordDashboard}
              className={`flex gap-x-2 items-center p-2 rounded-md cursor-pointer ${getLinkClass(
                ["/landlord/dashboard"]
              )}`}
            >
              <img src="/dashboard.svg" />
              <p>Dashboard</p>
            </Link>
          </div> */}
          <div>
            <Link
              to={AppRoutes.landlordProperty}
              className={`flex gap-x-2 items-center p-2 rounded-md cursor-pointer ${getLinkClass(
                ["/landlord/dashboard/property", "/landlord/dashboard/listingdetails/:id", "/landlord/dashboard/property/addproperty"]
              )}`}
            >
              <img src="/property.svg" />
              <p>Property Listings</p>
            </Link>
          </div>
          <div>
            <Link
              to={AppRoutes.landlordBookings}
              className={`flex gap-x-2 items-center p-2 rounded-md cursor-pointer ${getLinkClass(
               [ "/landlord/dashboard/bookings", "/landlord/dashboard/bookings/createBookings", "/landlord/dashboard/viewagreement/:bookingid"]
              )}`}
            >
              <img src="/bookings.svg" />
              <p>Bookings</p>
            </Link>
          </div>

          <div>
            <Link
             
              className={`flex gap-x-2 items-end p-2 rounded-md cursor-not-allowed opacity-40 `}
            >
              <img src="/chat.svg" />
              <p>Chat</p>
            </Link>
          </div>

          <div>
            <Link
              to={AppRoutes.landlordWallet}
              className={`flex gap-x-2 items-center justify-between p-2 rounded-md cursor-pointer ${getLinkClass(
                ["/landlord/dashboard/wallet"]
              )}`}
            >
              <div className="flex items-center gap-x-2">
                <img src="/wallet.svg" />
                <p>Wallet</p>
              </div>
         </Link>
          </div>
            <div>
            <Link
              to={AppRoutes.landlordSavings}
              className={`flex gap-x-2 items-center justify-between p-2 rounded-md cursor-pointer ${getLinkClass(
                ["/landlord/dashboard/savings", "/landlord/dashboard/savingsplan"]
              )}`}
            >
              <div className="flex items-center gap-x-2">
                <img src="/wallet.svg" />
                <p>Savings Plan</p>
              </div>
         </Link>
          </div>

          {/* <div>
            <Link
              to={AppRoutes.landlordSettings}
              className={`flex gap-x-2 items-center p-2 rounded-md cursor-pointer ${getLinkClass(
               [ "/landlord/dashboard/settings"]
              )}`}
            >
              <img src="/settings.png" />
              <p>Setting</p>
            </Link>
          </div> */}
        </section>
      </article>

      <article className="font-semibold text-lg w-full space-y-2">
        <Link to={AppRoutes.landlordProfile}>
        <div
          className={`flex gap-x-2 items-center p-2 rounded-md cursor-pointer ${getLinkClass(
            ["/landlord/dashboard/profile"]
          )}`}
        >
          <img src="/profile.svg" />
          <p>Profile</p>
        </div>
        </Link>

        <div
          className="flex gap-x-2 items-center p-2 cursor-pointer"
          onClick={logout}
        >
          <img src="/logout.svg" />
          <p className="">Log out</p>
        </div>
      </article>
    </div>
  );
};

export default Sidebar;
