import React, { useState } from "react";
import { motion } from "framer-motion";
import GoalSetup from "./goalSetup";
import Contributon from "./contributon";
import Review from "./review";

const SavingsPlan = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [rent, setRent] = useState("");
  const [interval, setInterval] = useState("");
  const [startDate, setStartDate] = useState("");
  const [selected, setSelected] = useState("Daily");

  const [errors, setErrors] = useState({});
  const removeCommas = (number) => number.replace(/,/g, "");

  const addCommas = (number) => number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const handleFieldChange = (field, value) => {
    switch (field) {
      case "rent":
        const raw = removeCommas(value);

        if (!/^\d*$/.test(raw)) return;
        if (raw.length > 12) return;

        const formatted = addCommas(raw);
        setRent(formatted);

        if (raw && Number(raw) > 0) {
          setErrors((prev) => ({ ...prev, rent: undefined }));
        }
        break;

      case "interval":
        const intervalraw = removeCommas(value);

        if (!/^\d*$/.test(intervalraw)) return;
        if (intervalraw.length > 12) return;

        const intervalformatted = addCommas(intervalraw);
        setInterval(intervalformatted);

        if (intervalraw && Number(intervalraw) > 0) {
          setErrors((prev) => ({ ...prev, interval: undefined }));
        }
        break;

      case "startDate":
        setStartDate(value);
        if (value) {
          setErrors((prev) => ({ ...prev, startDate: undefined }));
        }
        break;
      default:
        break;
    }
  };

  const steps = [
    {
      name: "Goal Setup",
      component: (
        <GoalSetup
          rent={rent}
          startDate={startDate}
          handleFieldChange={handleFieldChange}
        />
      ),
    },
    {
      name: "Contribution",
      component: (
        <Contributon
          selected={selected}
          setSelected={setSelected}
          interval={interval}
          handleFieldChange={handleFieldChange}
        />
      ),
    },
    { name: "Review", component: <Review /> },
  ];

  const goToNextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep((prev) => prev + 1);
  };

  const goToPrevStep = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  const progressPercentage = ((currentStep + 1) / steps.length) * 100;

  return (
    <section>
      <article className="text-center mb-8">
        <h1 className="text-4xl font-bold">Savings Plan</h1>
        <p className="text-gray-600">
          Plan your financial future with smart saving goals
        </p>
      </article>
      <article className="flex gap-x-10 items-start">
        <div className="w-full bg-[#F7F8FA] basis-[70%] shadow-[0px_0px_4px_0px_#00000040] p-7 rounded-md ">
          {/* Animated progress loader */}
          <div className="relative w-full h-1 bg-gray-200 mb-2 overflow-hidden">
            <motion.div
              className="h-full bg-renatal-blue"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>

          {/* Step labels */}
          <article className="flex items-center justify-between gap-x-6  mb-6">
            <div className="flex justify-between items-center w-full">
              {steps.map((step, index) => (
                <p
                  key={index}
                  className={`font-medium ${
                    currentStep === index ? "text-black" : "text-gray-400"
                  }`}
                >
                  {step.name}
                </p>
              ))}
            </div>
          </article>

          {/* Step content */}

          <article className="">
            {steps[currentStep].component}
            <div className="flex justify-center w-full ">
              {currentStep === 2 ? (
                <button
                  onClick={goToNextStep}
                  className="bg-renatal-blue text-white px-6 py-2  rounded  mx-auto"
                >
                  Activte Savings Plan
                </button>
              ) : (
                ""
              )}
            </div>
            <div className="flex justify-between mt-8">
              {currentStep > 0 && (
                <button
                  onClick={goToPrevStep}
                  className="bg-gray-200 px-6 py-2 rounded hover:bg-gray-300"
                >
                  Back
                </button>
              )}

              {currentStep < steps.length - 1 ? (
                <button
                  onClick={goToNextStep}
                  className="bg-renatal-blue text-white px-6 py-2 rounded  ml-auto"
                >
                  Next
                </button>
              ) : (
                ""
              )}
            </div>
          </article>
        </div>
        <div className="basis-[28%] bg-[#F7F8FA] shadow-[0px_0px_4px_0px_#00000040] p-7 rounded-md">
<h1 className="text-rental-dark font-bold">Your Savings Journey</h1>
          <div className="flex items-center mb-3 gap-x-2">
            <img src="/Bob.svg" alt="Bob.svg" className="w-5 h-5" />
            <p className="text-sm font-semibold capitalize">Smart Suggestions</p>
          </div>
          <div className="bg-[#eef7f3] text-[#047857] border-[#A7F3D0] border  p-4  rounded-md text-sm">
            <p className="w-11/12">
              Consider increasing your contribution to at least 10% of your
              income for better financial health.
            </p>
          </div>
           <div className="border border-[#E2E8F0]  mt-2  p-4  rounded-md text-sm">
            <p className="w-11/12">
            Weekly contributions can help build savings discipline and may feel
            less impactful on your budget.
            </p>
          </div>
          
          <p className="w-11/12 p-4 text-xs font-semibold text-rental-dark/70">
            Suggestions are based on your income and savings goals. They're
            meant as guidance only.
          </p>
        </div>
      </article>
    </section>
  );
};

export default SavingsPlan;
