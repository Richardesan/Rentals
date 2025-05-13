import React from "react";

const Footer = () => {
    const linkstyle = "cursor-pointer hover:text-white active:scale-95 hover:scale-105 transistion-all duration-100"
  return (
    <div className="bg-rental-dark py-24 px-32 ">

 
    <section className="flex justify-between items-start">
      <article>
        <div>
          <img src="/Logo.svg" />
          <p className="text-primary-light w-[25vw] mt-4 text-lg lato-regular">
            Simplifying the rental process for both tenants and landlords with
            our modern platform.
          </p>
        </div>
      </article>
      <article className="flex items-start gap-x-24 text-lg">
        <div>
          <p className="text-white lato-bold">Company</p>
          <ul className="text-primary-light mt-6 space-y-1 lato-regular">
            <li className={linkstyle}>Home</li>
            <li className={linkstyle}>About us</li>
            <li className={linkstyle}>Listing</li>
            <li className={linkstyle}>Agents</li>
          </ul>
        </div>
        <div>
          <p className="text-white lato-bold">Support</p>
          <ul className="text-primary-light mt-6 space-y-1 lato-regular">
            <li className={linkstyle}>Contact Us</li>
            <li className={linkstyle}>Help</li>

          </ul>
        </div>
        <div>
          <p className="text-white lato-bold">Social</p>
          <ul className="flex gap-x-6 mt-6">
           <img src="/x.png" className={linkstyle}/>
           <img src="/facebook.png" className={linkstyle}/>
           <img src="/instagram.png" className={linkstyle} />
           <img src="/linkedin.png"  className={linkstyle}/>
          </ul>
        </div>
      </article>
    </section>
    <img src="/footerline.png" className="w-screen py-10" />
    <div className="text-primary-light flex justify-between items-center lato-regular text-lg">
        <p>© Rental Inc. All Rights Reserved.</p>
        <p>Privacy Policy.Terms and condition</p>
    </div>
       </div>
  );
};

export default Footer;
