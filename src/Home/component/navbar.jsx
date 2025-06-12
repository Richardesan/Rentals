import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const linkStyle =
    "cursor-pointer hover:text-white active:scale-95 hover:scale-105 transistion-all duration-100";
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [pendingNav, setPendingNav] = useState(null); // track navigation after close
  const navigate = useNavigate();
  useEffect(() => {
    if (!sidebarOpen && pendingNav) {
      if (pendingNav.includes("#")) {
        window.location.href = pendingNav;
      } else {
        navigate(pendingNav);
      }
      setPendingNav(null);
    }
  }, [sidebarOpen, pendingNav, navigate]);

  return (
    <div className="fixed  top-5 left-0 flex items-center w-full justify-center max-xl:px-[5%]  max-sm:px-[3%]   text-white">
      <nav className="rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex p-5 gap-x-12 max-md:w-full justify-between items-center">
        <div className="cursor-pointer w-32 ">
          <img src="/leasestash.png" alt="Logo" className="w-full" />
        </div>
        <ul className="flex items-center text-lg gap-x-8 capitalize text-primary-light max-md:hidden">
          <li className={linkStyle}>home</li>
          <li className={linkStyle}>about us</li>
          <li className={linkStyle}>listing</li>
          <li className={linkStyle}>agent</li>
        </ul>
        <Link to="/signup/tenant" className="max-md:hidden">
          <button
            className={`px-6 py-3 border-primary-light border rounded-full font-semibold ${linkStyle}`}
          >
            Sign up
          </button>
        </Link>
        <div
          className="hidden max-md:block cursor-pointer"
          onClick={() => setSidebarOpen(true)}
        >
          <img src="/menu.png" />
        </div>
      </nav>
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-black  z-40"
            />
            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 bottom-0 w-full px-5 pt-16  overflow-y-auto bg-white text-black z-50 pb-5 flex flex-col"
            >
         
              

              <ul className="flex flex-col items-start font-semibold text-xl gap-y-7 capitalize ">
                <li className="mb-5 cursor-pointer" onClick={() => setSidebarOpen(false)}><img src="/cancel.png" /></li>
                <li className="">home</li>
                <li className="">about us</li>
                <li className="">listing</li>
                <li className="">Contact us</li>
                <li className="">Terms & Conditions</li>
                <li className="">Contact us</li>
                <li className="">Privacy Policy</li>
              </ul>
              <div className="w-[85%] space-y-4 mt-16 font-medium">
                <p className="py-4 w-full text-white text-center rounded-full bg-primaryCol">
                  Create Account
                </p>
                <p className="border  w-full text-center rounded-full  py-4 border-primaryCol">
                  Sign in
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
