import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import SignupForm from "./component/signupForm";
import { AppRoutes } from "../utils/route";

const Signup = () => {
  const { userType } = useParams();
  const navigate = useNavigate();
  const myloginbg =
    "bg-[linear-gradient(173.3deg,_#0C2D5B_10.23%,_rgba(212,_175,_55,_0.7)_105.49%,_rgba(212,_175,_55,_0.7)_138.1%)]";
  const [userState, setUserState] = useState(true);
  useEffect(() => {
    if (userType !== "landlord" && userType !== "tenant") {
      navigate("/login");
    }
  }, [userType, navigate]);

  const loginbg =
    "bg-[linear-gradient(180deg,rgba(247,248,250,0.7)_34.14%,rgba(146,147,148,0.49)_78.85%)]";

  return (
    <section className="h-screen flex  overflow-hidden">
      <article
        style={{
          backgroundImage: 'url("/loginPreview.png")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className={`h-full relative flex flex-col justify-between  basis-[40%] p-8 max-lg:hidden `}
      >
        <div
          className={`absolute inset-0 top-0 left-0 opacity-60 ${myloginbg}`}
        ></div>
        <Link to={AppRoutes.home} className="z-10">
          <div className="flex gap-x-3 items-center">
            <img src="/Star.png" />
            <img src="/darklogo.png" />
          </div>
        </Link>

        <div className="pr-14 z-10">
          {userType === "landlord" ? (
            <div>
              <h1 className="text-5xl lato-regular-italic pr-14 text-renatal-blue">
                “List Properties’’
              </h1>
              <p className="text-xl text-[#0C2D5B] mt-2">
                Connects with tenants. Earn with ease
              </p>
            </div>
          ) : (
            <div>
              <h1 className="text-5xl lato-regular-italic pr-14 text-renatal-blue">
                ““Explore Rentals’’’’
              </h1>
              <p className="text-xl text-[#0C2D5B] mt-2">Earn with ease</p>
            </div>
          )}
        </div>
        <div className="flex justify-end z-10">
          <img src="/Star.png" />
        </div>
      </article>
      <article className="h-full   basis-[60%] max-lg:basis-full px-32 max-xl:px-20 pt-5 max-md:px-10 max-sm:px-4">
  

        <div className="flex items-center justify-end gap-x-4 mb-10 max-sm:gap-0 max-sm:justify-between">
          {userType === "landlord" ? (
            <p className="text-renatal-blue text-xl max-sm:text-sm lato-regular">
              "Not a property owner?"
            </p>
          ) : (
            <p className="text-renatal-blue text-2xl  max-sm:text-sm lato-regular">
              "Not a Tenat?"
            </p>
          )}
          {userType === "landlord" ? (
            <Link to="/signup/tenant">
            
            <p className="bg-renatal-blue text-white py-2 px-5 max-sm:text-sm rounded-full">
              Sign up As a Tenant
            </p>
            </Link>
          ) : userType === "tenant" ?(
            <Link to="/signup/landlord">

           
            <button className="bg-renatal-blue text-white py-2 px-5 max-sm:text-sm rounded-full">
              Sign up As a Property Owner
            </button>
             </Link>
          ): ""}
        </div>
        <div className=" max-w-2xl mt-4 mx-auto overflow-scroll h-screen pb-24">
          <SignupForm userType={userType} />
        </div>
      </article>
    </section>
  );
};

export default Signup;
