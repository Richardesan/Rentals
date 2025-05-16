import React from "react";
import LoginForm from "./componet/form";
import { Link } from "react-router-dom";
import { AppRoutes } from "../utils/route";

const Login = () => {
  const loginbg =
    "bg-[linear-gradient(180deg,rgba(247,248,250,0.7)_34.14%,rgba(146,147,148,0.49)_78.85%)]";

  return (
    <section className="h-screen flex">
      <article
        className={`h-full flex flex-col justify-between ${loginbg} basis-[30%] p-8 `}
      >
        <Link to={AppRoutes.home}>
        <div className="flex gap-x-3 items-center">
          <img src="/Star.png" />
          <img src="/logoblue.png" />
        </div>
        </Link>
        
        <div className="pr-14">
          <h1 className="text-5xl lato-regular-italic pr-14">Welcome to Leasestash</h1>
          <p className="text-xl text-[#0C2D5B] mt-2">Find or manage home with ease</p>
        </div>
        <div className="flex justify-end">
          <img src="/Star.png" />
        </div>
      </article>
      <article className="h-full  pt-40 basis-[70%] px-32 ">
        <div className="w-[60%] mx-auto">
<h1 className="text-6xl lato-regular mb-16 text-center">Login to your account</h1>
        <LoginForm />
        </div>
        
        
      </article>
    </section>
  );
};

export default Login;
