import React, { useState } from "react";
import LoginForm from "./componet/form";
import { Link } from "react-router-dom";
import { AppRoutes } from "../utils/route";

const Login = () => {
  const loginbg =
    "bg-[linear-gradient(173.3deg,_#0C2D5B_10.23%,_rgba(212,_175,_55,_0.7)_105.49%,_rgba(212,_175,_55,_0.7)_138.1%)]";
  const [userState, setUserState] = useState(true);
  return (
    <section className="h-screen flex">
      <img src="/house1.jpg" alt="/loginPreview.png" className="absolute object-cover w-full h-screen "/>
      <article
        style={{
          backgroundImage: 'url("/loginPreview.png")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className={`h-full flex flex-col relative max-lg:hidden  justify-between basis-[40%] p-8 `}
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
      <article className="h-full   basis-[60%] max-lg:basis-full  flex justify-center items-center max-sm:items-center z-50 bg-white max-sm:h-fit max-sm:py-10 max-sm:mt-auto max-sm:rounded-tl-[30px] max-sm:rounded-tr-[30px] overflow-hidden">
        <Link to={AppRoutes.home} className="z-10">
          <div className=" gap-x-3 items-center absolute max-lg:flex hidden  top-7 left-5">
            <img src="/Star.png"  className="w-12 max-sm:hidden"/>
            <img src="/darklogo.png "  className="w-40"/>
          </div>
        </Link>
        <div className="w-full">

      
        <p className="lato-bold-italic text-3xl max-w-64 text-center mx-auto max-sm:text-xl ">
          Hi Welcome back!{" "}
          <span className="text-2xl lato-regular max-sm:hidden">Are you a </span>
        </p>

        <div className="max-w-xl mx-auto max-md:max-w-sm max-sm:px-3">
          <div className="  px-[15%] max-md:px-0">
            <article
              className={`${loginbg} max-sm:text-sm text-lg lato-regular my-10 max-sm:my-7 text-white p-1  rounded-full w-full flex items-center justify-between`}
            >
              <div className="flex items-center gap-x-2 p-1 px-3">
                <img
                  src="/garage.png"
                  alt="/garage.png"
                  className="w-4 h-4 object-contain"
                />
                {userState ? <p> Property Owner</p> : <p> Tenant</p>}
              </div>
              <div className="bg-white flex p-1 px-3 items-center gap-x-2 text-black rounded-full cursor-pointer"  onClick={() => setUserState(prev => !prev)}>
                <img
                  src="/tenantlogo.png"
                  alt="/tenantlogo.png"
                  className="w-4 h-4 object-contain"
                />
                {!userState ? <p> Property Owner</p> : <p> Tenant</p>}
              </div>
            </article>
          </div>
          <LoginForm userState={userState}/>
        </div>
          </div>
      </article>
    </section>
  );
};

export default Login;
