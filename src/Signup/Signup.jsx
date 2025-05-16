import React, { useEffect } from "react";
import { Link, useNavigate , useParams } from "react-router-dom";
import SignupForm from "./component/signupForm";
import { AppRoutes } from "../utils/route";

const Login = () => {
    const { userType } = useParams();
      const navigate = useNavigate();
  useEffect(() => {

    if (userType !== "property-owner" && userType !== "tenant") {
      navigate("/login");
    }
  }, [userType, navigate]);

  const loginbg =
    "bg-[linear-gradient(180deg,rgba(247,248,250,0.7)_34.14%,rgba(146,147,148,0.49)_78.85%)]";

  return (
    <section className="h-screen flex">
      <article
        className={`h-full flex flex-col justify-between ${loginbg} basis-[30%] p-8 `}
      >
        <Link to={AppRoutes.home}>
 <div className="flex gap-x-3 items-center" >
          <img src="/Star.png" />
          <img src="/logoblue.png" />
        </div>
        </Link>
       
        <div className="pr-14">
          {userType === "property-owner" ? (
            <div>
              <h1 className="text-5xl lato-regular-italic pr-14 text-primaryCol">
                “List Properties’’
              </h1>
              <p className="text-xl text-[#0C2D5B] mt-2">
                Connects with tenants. Earn with ease
              </p>
            </div>
          ) : (
            <div>
              <h1 className="text-5xl lato-regular-italic pr-14 text-primaryCol">
                ““Explore Rentals’’’’
              </h1>
              <p className="text-xl text-[#0C2D5B] mt-2">
                Earn with ease
              </p>
            </div>
          )}
        </div>
        <div className="flex justify-end">
          <img src="/Star.png" />
        </div>
      </article>
      <article className="h-full   basis-[70%] px-32 py-5 ">
        <div className="flex items-center justify-end gap-x-4 mb-10">
          {userType === "property-owner" ? (
            <p className="text-primaryCol text-xl lato-regular">
              "Not a property owner?"
            </p>
          ) : (
            <p className="text-primaryCol text-2xl lato-regular">
              "Not a Tenat?"
            </p>
          )}
          {userType === "property-owner" ? (
            <Link to="/signup/tenant">
            
            <p className="bg-primaryCol text-white py-2 px-5 rounded-full">
              Sign up As a Tenant
            </p>
            </Link>
          ) : userType === "tenant" ?(
            <Link to="/signup/property-owner">

           
            <button className="bg-primaryCol text-white py-2 px-5 rounded-full">
              Sign up As a Property Owner
            </button>
             </Link>
          ): ""}
        </div>
        <div className="w-5/6 mx-auto">
        <SignupForm />

        </div>

      </article>
    </section>
  );
};

export default Login;
