import React, { useState } from "react";
import IntervalFilter from "./intervalFilter";
import { toast } from "react-toastify";
import { publishAgreement } from "../../../../services/queries";
import { useAuth } from "../../../../context/authContext";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../../utils/route";
import ButtonSpinner from "../../../../component/ButtonSpinner";

const BookingDetails = ({ popertydataID }) => {
  const [filter, setFilter] = useState("Daily");
  const [rent, setRent] = useState("");
  const [email, setEmail] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false)
  const removeCommas = (number) => number.replace(/,/g, "");
  const navigate = useNavigate();
  const { token } = useAuth();
  const addCommas = (number) => number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const houseRule = [
    "Quiet hours are from 10:00 PM to 7:00 AM.",
    "No more than 8 guests allowed for gatherings without prior approval.",
    `No alterations or installations without landlord's written consent.`,
    `Trash and recycling must be properly sorted and disposed of.`,
    `Parking is limited to designated spaces only.`,
  ];

  const btnStyle = `text-white py-2.5 px-9 rounded-lg  flex justify-center items-center capitalize font-semibold`;

  function getReadableDuration(startDateStr, endDateStr) {
  const start = new Date(startDateStr);
  const end = new Date(endDateStr);

  const diffInMs = end - start;
  const msInDay = 1000 * 60 * 60 * 24;
  const diffInDays = Math.floor(diffInMs / msInDay);

  if (diffInDays < 30) {
    return `${diffInDays} day${diffInDays !== 1 ? 's' : ''}`;
  }

  const years = Math.floor(diffInDays / 365.25);
  const remainingDaysAfterYears = diffInDays - Math.floor(years * 365.25);
  const months = Math.floor(remainingDaysAfterYears / 30.44);
  const days = Math.floor(remainingDaysAfterYears % 30.44);

  let parts = [];
  if (years > 0) parts.push(`${years} year${years > 1 ? 's' : ''}`);
  if (months > 0) parts.push(`${months} month${months > 1 ? 's' : ''}`);
  if (days > 0) parts.push(`${days} day${days > 1 ? 's' : ''}`);

  return parts.join(' & ');
}

const duration = getReadableDuration(startDate, endDate)

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
console.log(popertydataID)
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

  function getAgentCommission(amount) {
  const commission = amount * 0.10;
  return `₦${commission.toLocaleString()}`;
}

const agentCommission = getAgentCommission(popertydataID.price)
  const handleSubmit = async () => {
    if (validate()) {
      const rentAmount = Number(removeCommas(rent));

      const credentials = {
        tenantEmail: email,
        listingId: popertydataID.id,
        startDate,
        endDate,
        rentAmount,
        paymentFrequency: filter.toLowerCase(),
        termsAndConditions: `The Landlord, ${popertydataID.landlordName} lets the Property at ${popertydataID.address.street}, ${popertydataID.address.city}, ${popertydataID.address.state}, ${popertydataID.address.country}.  to the Tenant, 
         ${email}, for one ${duration} from ${startDate} to ${endDate}, at an 
         ${filter.toLowerCase()} rent of ₦${rentAmount}, payable in advance. The Tenant shall, before moving in,
         pay a refundable security deposit of ₦10000 and a non-refundable agent’s fee of ${agentCommission}, 
         representing 10% of the rent.The Property is for residential use only. The Tenant shall not sublet
          or alter the premises without written consent, must keep it in good condition, pay all utility bills, 
          and permit inspections with 24 hours’ notice. The Landlord/Agent shall ensure the Property is habitable
           and carry out structural repairs. Either party may terminate the agreement with one (1) month’s notice 
           or payment in lieu. Breach of terms or non-payment may lead to termination with reasonable notice.
          Upon termination, the Tenant shall vacate, return keys, and the security deposit shall be refunded within 30 days,
           less deductions. This agreement is governed by Nigerian law, and disputes shall be settled amicably or through the courts. 
           Changes must be in writing and signed by all parties.`,
      };
setLoading(true)
      try {
        const data = await publishAgreement({ token, credentials });
        console.log(data);
        toast.success("Bookings Created Successfully!", {
          style: {
            backgroundColor: "#0C2D5B",
            color: "#fff",
            fontSize: "0.8rem",
            padding: "8px 12px",
          },
        });
        setTimeout(() => {
          navigate(AppRoutes.landlordBookings); 
        }, 1000);
      } catch (err) {
        toast.error(err?.response?.data?.message || "Signup failed", {
          style: {
            backgroundColor: "#C8170D",
            color: "#fff",
            fontSize: "0.8rem",
            padding: "8px 12px",
          },
        });
      } finally {
        setLoading(false)
      }
    }
  };

  return (
    <div className="">
      <h1 className="text-renatal-blue text-xl font-bold mb-4 capitalize">
        Booking details
      </h1>

      <section className="flex items-start justify-between gap-4">
        <article className=" relative">
          <p className="mb-1 font-semibold text-rental-dark/80">
            Rent Amount{" "}
            {errors.rent && (
              <span className="text-danger font-semibold text-xs mt-1">
                ({errors.rent})
              </span>
            )}
          </p>
          {rent && <span className="absolute left-3 bottom-2">₦</span>}

          <input
            type="text"
            placeholder="₦ 0.00"
            value={rent}
            onChange={(e) => handleFieldChange("rent", e.target.value)}
            className={`border ${
              errors.rent
                ? "border-danger shadow-sm shadow-danger/50"
                : "border-rental-deep"
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
          <p className="mb-1 font-semibold text-rental-dark/80">
            Tenant Email{" "}
            {errors.email && (
              <span className="text-danger text-xs font-semibold mt-1">
                ({errors.email})
              </span>
            )}
          </p>
          <input
            type="email"
            placeholder="owo.pre@gmail.com"
            value={email}
            onChange={(e) => handleFieldChange("email", e.target.value)}
            className={`border ${
              errors.email
                ? "border-danger shadow-sm shadow-danger/50"
                : "border-rental-deep"
            } px-4 py-2 text-sm font-semibold rounded-lg outline-none`}
          />
        </article>
      </section>

      <section className="flex items-start gap-x-3 justify-between mt-4">
        <article className="basis-[49%]">
          <p className="mb-1 font-semibold text-rental-dark/80">
            Start Date{" "}
            {errors.startDate && (
              <span className="text-danger text-xs ">({errors.startDate})</span>
            )}
          </p>
          <input
            type="date"
            value={startDate}
            onChange={(e) => handleFieldChange("startDate", e.target.value)}
            className={`border ${
              errors.startDate
                ? "border-danger shadow-sm shadow-danger/50"
                : "border-rental-deep"
            } px-4 py-2 text-sm  w-full font-semibold rounded-lg outline-none`}
          />
        </article>

        <article className="basis-[49%]">
          <p className="mb-1 font-semibold text-rental-dark/80">
            End Date{" "}
            {errors.endDate && (
              <span className="text-danger text-xs">({errors.endDate})</span>
            )}
          </p>
          <input
            type="date"
            value={endDate}
            onChange={(e) => handleFieldChange("endDate", e.target.value)}
            className={`border ${
              errors.endDate
                ? "border-danger shadow-sm shadow-danger/50"
                : "border-rental-deep"
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
        <p className="text-red-500 text-xs font-semibold mt-1 ml-6">
          {errors.agreed}
        </p>
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
        <button disabled={loading} className={`${btnStyle} ${loading ? "bg-gray-400 cursor-not-allowed  w-48": "bg-renatal-blue "}`} onClick={handleSubmit}>
       {loading ? <ButtonSpinner /> :   "Create agreement"}
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
