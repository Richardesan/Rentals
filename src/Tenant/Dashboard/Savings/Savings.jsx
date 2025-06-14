import React from "react";
import { AppRoutes } from "../../../utils/route";
import { Link } from "react-router-dom";
import TransactionTable from "./component/TransactionTable";

const Savings = () => {
  return (
    <div>
      <section className="lato-regular">
        <article className="flex justify-between items-center max-w-5xl mx-auto">
          <div>
            <p className="text-4xl">Your Savings Plan</p>
            <p className="text-lg">Manage and track all your savings</p>
          </div>
          <Link to={AppRoutes.savingsplan} className="w-fit">
            <div className="bg-primaryCol text-white flex items-center font-semibold rounded-md  px-7 py-3 gap-x-3 cursor-pointer">
              <img src="/add.svg" alt="arrowdown.png" />

              <p>Create Saving Plan</p>
            </div>
          </Link>
        </article>

        <article className="max-w-2xl mx-auto p-10 bg-glossy-gradient my-7 rounded-lg shadow-[0px_0px_4px_0px_#00000040]">
          <p className="px-7 py-1 mb-2 bg-rental-green w-fit text-xs ml-auto rounded-full text-white">
            Active
          </p>
          <p className="text-center text-xs">Current Savings Balance</p>
          <p className="text-center text-4xl text-renatal-blue font-semibold">
            ₦25,000.00
          </p>
          <div className="flex justify-between items-start mt-2">
            <div className="text-rental-dark/80">
              <p className="text-xs">Next Debit </p>
              <p className="text-3xl font-semibold ">₦200,000</p>
              <p className="text-xs">Linked Card</p>
            </div>
            <p className="text-sm italic"> May 15, 2025</p>
          </div>
          <div>
            <p className="text-3xl  text-rental-dark/80 font-semibold text-center">
              *******************4242
            </p>
          </div>
          <div className="flex justify-center mt-2 items-center gap-x-7 font-semibold">
            <button className="bg-gold-gradient text-white py-3 px-5 flex items-center gap-x-3  text-xs rounded-md">
              <img src="/paymentdown.svg" alt="paymentdown" />
              Withdraw
            </button>
            <div className="bg-gold-gradient p-[1px] rounded-md">
              <button className="bg-[#cdcdcf] py-3 px-7 text-black flex items-center gap-x-3  text-xs rounded-md">
                <img src="/edit.svg" alt="edit.svg" />
                Edit
              </button>
            </div>

            <div className="bg-gold-gradient p-[1px] rounded-md">
              <button className="bg-[#cdcdcf] py-3 px-7 text-black flex items-center gap-x-3  text-xs rounded-md">
                <img src="/pause.svg" alt="edit.svg" />
                Pause
              </button>
            </div>
          </div>
        </article>
      </section>
      <TransactionTable />
    </div>
  );
};

export default Savings;
