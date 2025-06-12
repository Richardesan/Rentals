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
      // Handle dynamic path like "/dashboard/PropertyListingDetails/:id"
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
          <div>
            <Link
              to={AppRoutes.dashboard}
              className={`flex gap-x-2 items-center p-2 rounded-md cursor-pointer ${getLinkClass(
                ["/tenant/dashboard"]
              )}`}
            >
              <img src="/dashboard.svg" />
              <p>Dashboard</p>
            </Link>
          </div>
          <div>
            <Link
              to={AppRoutes.property}
              className={`flex gap-x-2 items-center p-2 rounded-md cursor-pointer ${getLinkClass(
                ["/tenant/dashboard/property", "/tenant/dashboard/listingdetails/:id", "/tenant/dashboard/property/addproperty"]
              )}`}
            >
              <img src="/property.svg" />
              <p>Property Listings</p>
            </Link>
          </div>
          <div>
            <Link
              to={AppRoutes.bookings}
              className={`flex gap-x-2 items-center p-2 rounded-md cursor-pointer ${getLinkClass(
               [ "/tenant/dashboard/bookings", "/tenant/dashboard/bookings/createBookings", "/tenant/dashboard/viewagreement/:bookingid"]
              )}`}
            >
              <img src="/bookings.svg" />
              <p>Bookings</p>
            </Link>
          </div>

          <div>
            <Link
              to={AppRoutes.chats}
              className={`flex gap-x-2 items-center p-2 rounded-md cursor-pointer ${getLinkClass(
                ["/tenant/dashboard/chats"]
              )}`}
            >
              <img src="/chat.svg" />
              <p>Chat</p>
            </Link>
          </div>

          <div>
            <Link
              to={AppRoutes.wallet}
              className={`flex gap-x-2 items-center justify-between p-2 rounded-md cursor-pointer ${getLinkClass(
                ["/tenant/dashboard/wallet", "/tenant/dashboard/wallet/savingsplan"]
              )}`}
            >
              <div className="flex items-center gap-x-2">
                <img src="/wallet.svg" />
                <p>Wallet</p>
              </div>
<FaCaretDown />            </Link>
          </div>

          {/* <div>
            <Link
              to={AppRoutes.landlordSettings}
              className={`flex gap-x-2 items-center p-2 rounded-md cursor-pointer ${getLinkClass(
               [ "/tenant/dashboard/settings"]
              )}`}
            >
              <img src="/settings.png" />
              <p>Setting</p>
            </Link>
          </div> */}
        </section>
      </article>

      <article className="font-semibold text-lg w-full space-y-2">
        <Link to={AppRoutes.profile}>
        <div
          className={`flex gap-x-2 items-center p-2 rounded-md cursor-pointer ${getLinkClass(
            ["/tenant/dashboard/profile"]
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
