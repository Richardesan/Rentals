import React, { useState } from "react";
import IntervalFilter from "./intervalFilter";
import { toast } from "react-toastify";

const BookingDetails = ({ popertydataID }) => {
  const [filter, setFilter] = useState("Daily");
  const [rent, setRent] = useState("");
  const [email, setEmail] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [notes, setNotes] = useState("");

  const [errors, setErrors] = useState({});
  const removeCommas = (number) => number.replace(/,/g, "");

  const addCommas = (number) => number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const houseRule = [
    "Quiet hours are from 10:00 PM to 7:00 AM.",
    "No more than 8 guests allowed for gatherings without prior approval.",
    `No alterations or installations without landlord's written consent.`,
    `Trash and recycling must be properly sorted and disposed of.`,
    `Parking is limited to designated spaces only.`,
  ];

  const btnStyle = `bg-renatal-blue text-white py-2.5 px-9 rounded-lg w-fit capitalize font-semibold`;

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validate = () => {
    const newErrors = {};

    const rawRent = Number(removeCommas(rent));
    if (!rawRent || rawRent <= 0) {
      newErrors.rent = "Invalid amount";
    }

    if (!email || !isValidEmail(email)) {
      newErrors.email = "Invalid email";
    }

    if (!startDate) {
      newErrors.startDate = "required";
    }

    if (!endDate) {
      newErrors.endDate = "required";
    } else if (startDate && new Date(endDate) <= new Date(startDate)) {
      newErrors.endDate = "End date must be after start date.";
    }

    if (!agreed) {
      newErrors.agreed = "You must agree before proceeding.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle field-specific updates + clear error
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
      case "email":
        setEmail(value);
        if (isValidEmail(value)) {
          setErrors((prev) => ({ ...prev, email: undefined }));
        }
        break;

      case "startDate":
        setStartDate(value);
        if (value) {
          setErrors((prev) => ({ ...prev, startDate: undefined }));
        }
        break;

      case "endDate":
        setEndDate(value);
        if (value && (!startDate || new Date(value) > new Date(startDate))) {
          setErrors((prev) => ({ ...prev, endDate: undefined }));
        }
        break;

      case "agreed":
        setAgreed(value);
        if (value) {
          setErrors((prev) => ({ ...prev, agreed: undefined }));
        }
        break;

      case "notes":
        setNotes(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = () => {
    if (validate()) {
      const rawRent = Number(removeCommas(rent));

      console.log("Submitted Values:", {
        rent: rawRent,
        filter,
        tenantEmail: email,
        agreement : {
        landlordID: popertydataID,

        },
        startDate,
        endDate,
        agreedToTerms: agreed,
        notes,
      });

      toast.success("Bookings Created Successfully!", {
        style: {
          backgroundColor: "#0C2D5B",
          color: "#fff",
          fontSize: "0.8rem",
          padding: "8px 12px",
        },
      });
    }
  };

  return (
    <div className="">
      <h1 className="text-renatal-blue text-xl font-bold mb-4 capitalize">
        Booking details
      </h1>

      <section className="flex items-start justify-between gap-4">
        <article className=" relative">
          <p className="mb-1 font-semibold text-rental-dark/80">Rent Amount {errors.rent && (
            <span className="text-danger font-semibold text-xs mt-1">
             ({errors.rent})
            </span>
          )}</p>
          {rent && <span className="absolute left-3 bottom-2">₦</span>}

          <input
            type="text"
            placeholder="₦ 0.00"
            value={rent}
            onChange={(e) => handleFieldChange("rent", e.target.value)}
            className={`border ${
              errors.rent ? "border-danger shadow-sm shadow-danger/50" : "border-rental-deep"
            }  pl-6 py-2 text-sm font-semibold rounded-lg outline-none`}
          />
          
        </article>

        <article>
          <p className="mb-1 font-semibold text-rental-dark/80">
            Payment Interval
          </p>
          <IntervalFilter selected={filter} onChange={setFilter} />
        </article>

        <article>
          <p className="mb-1 font-semibold text-rental-dark/80">Tenant Email  {errors.email && (
            <span className="text-danger text-xs font-semibold mt-1">({errors.email})</span>
          )}</p>
          <input
            type="email"
            placeholder="owo.pre@gmail.com"
            value={email}
            onChange={(e) => handleFieldChange("email", e.target.value)}
           className={`border ${
              errors.email ? "border-danger shadow-sm shadow-danger/50" : "border-rental-deep"
            } px-4 py-2 text-sm font-semibold rounded-lg outline-none`} />
         
        </article>
      </section>

      <section className="flex items-start gap-x-3 justify-between mt-4">
        <article className="basis-[49%]">
          <p className="mb-1 font-semibold text-rental-dark/80">Start Date    {errors.startDate && (
            <span className="text-danger text-xs ">({errors.startDate})</span>
          )}</p>
          <input
            type="date"
            value={startDate}
            onChange={(e) => handleFieldChange("startDate", e.target.value)}
                className={`border ${
              errors.startDate ? "border-danger shadow-sm shadow-danger/50" : "border-rental-deep"
            } px-4 py-2 text-sm  w-full font-semibold rounded-lg outline-none`}
          />
       
        </article>

        <article className="basis-[49%]">
          <p className="mb-1 font-semibold text-rental-dark/80">End Date  {errors.endDate && (
            <span className="text-danger text-xs">({errors.endDate})</span>
          )}</p>
          <input
            type="date"
            value={endDate}
            onChange={(e) => handleFieldChange("endDate", e.target.value)}
             className={`border ${
              errors.endDate ? "border-danger shadow-sm shadow-danger/50" : "border-rental-deep"
            } px-4 py-2 text-sm  w-full font-semibold rounded-lg outline-none`}
          />
         
        </article>
      </section>

      <section className="mt-6">
        <p className="mb-2 text-lg font-semibold text-renatal-blue">
          House Rules
        </p>
        <ol className="list-decimal list-inside opacity-50 font-medium px-3">
          {houseRule.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ol>
      </section>

      <label className="flex gap-x-2 mt-6">
        <input
          type="checkbox"
          className="accent-renatal-blue"
          checked={agreed}
          onChange={(e) => handleFieldChange("agreed", e.target.checked)}
        />
        <p className="text-sm text-renatal-blue font-semibold cursor-pointer">
          By proceeding, I agree that the inspection is complete and ready for
          submission.
        </p>
      </label>
      {errors.agreed && (
        <p className="text-red-500 text-xs font-semibold mt-1 ml-6">{errors.agreed}</p>
      )}

      <section className="mt-6">
        <h1 className="mb-2 font-medium text-rental-dark/80">
          Additional Information <span className="text-sm">(Optional)</span>
        </h1>
        <textarea
          className="w-full h-40 p-2 border rounded outline-none resize-none"
          placeholder="Any additional terms or notes..."
          value={notes}
          onChange={(e) => handleFieldChange("notes", e.target.value)}
        ></textarea>
      </section>

      <section className="flex justify-center items-center gap-x-5 mt-6">
        <button className={`${btnStyle}`} onClick={handleSubmit}>
          Create agreement
        </button>

        <div className="border flex items-center py-2.5 cursor-pointer gap-x-4 justify-center border-renatal-blue/70 font-semibold px-9 rounded-lg">
          <p>Cancel</p>
          <div>&times;</div>
        </div>
      </section>
    </div>
  );
};

export default BookingDetails;
