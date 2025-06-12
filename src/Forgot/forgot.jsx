import React, { useState } from "react";
import { AppRoutes } from "../utils/route";
import { Link } from "react-router-dom";
const Forgot = () => {
  const loginbg =
    "bg-[linear-gradient(173.3deg,_#0C2D5B_10.23%,_rgba(212,_175,_55,_0.7)_105.49%,_rgba(212,_175,_55,_0.7)_138.1%)]";
  const [userState, setUserState] = useState(true);
  const inputClass =
    "text-darkText   w-full outline-none border rounded-2xl px-4 py-4 shadow-sm";
      const borderStyle =
    " bg-[linear-gradient(90deg,_#0C2D5B_18.75%,_rgba(212,175,55,0.7)_100%)] rounded-2xl p-[1px]";

  return (
    <div className="h-screen flex">
      <article
        style={{
          backgroundImage: 'url("/loginPreview.png")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className={`h-full flex flex-col relative  justify-between basis-[40%] p-8 `}
      >
        <div
          className={`absolute inset-0 top-0 left-0 opacity-60 ${loginbg}`}
        ></div>
        <Link to={AppRoutes.home} className="z-10">
          <div className="flex gap-x-3 items-center">
            <img src="/Star.png" />
            <img src="/darklogo.png" />
          </div>
        </Link>

        <div className="pr-14 z-10 text-renatal-blue">
          <h1 className="text-5xl lato-regular-italic pr-14">
            Welcome to Leasestash
          </h1>
          <p className="text-xl  mt-2">Find or manage home with ease</p>
        </div>
        <div className="flex justify-end z-10 cursor-pointer">
          <img src="/Star.png" />
        </div>
      </article>

      <article className="h-full  pt-40 basis-[60%]   ">
        <p className="lato-bold-italic text-3xl max-w-64 text-center mx-auto">
          Hi Welcome back!{" "}
          <span className="text-2xl lato-regular">Are you a </span>
        </p>

        <div className="max-w-xl mx-auto">
          <div className="  px-[15%]">
            <article
              className={`${loginbg} text-lg lato-regular my-10 text-white p-1  rounded-full w-full flex items-center justify-between`}
            >
              <div className="flex items-center gap-x-2 p-1 px-3">
                <img
                  src="/garage.png"
                  alt="/garage.png"
                  className="w-4 h-4 object-contain"
                />
                {userState ? <p> Property Owner</p> : <p> Tenant</p>}
              </div>
              <div
                className="bg-white flex p-1 px-3 items-center gap-x-2 text-black rounded-full cursor-pointer"
                onClick={() => setUserState((prev) => !prev)}
              >
                <img
                  src="/tenantlogo.png"
                  alt="/tenantlogo.png"
                  className="w-4 h-4 object-contain"
                />
                {!userState ? <p> Property Owner</p> : <p> Tenant</p>}
              </div>
            
            </article>
          </div>
            <label className="block text-sm font-bold">
                <span className="">Email Address</span>
                <div className={borderStyle}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className={inputClass}
                  />
                </div>
              </label>
                <div className="w-fit mx-auto">
        <button
          type="submit"
          className={` bg-renatal-blue py-3 px-16 text-white  lato-regular rounded-md flex justify-center items-center `}
        >
          <span>Log in</span>
        </button>
      </div>
        </div>
      </article>
    </div>
  );
};

export default Forgot;
