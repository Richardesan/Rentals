import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "../../../../context/authContext";
import { walletDeposit } from "../../../../services/queries";
import ButtonSpinner from "../../../../component/ButtonSpinner";
import { toast } from "react-toastify";
const DepositModal = ({ onClose, balance }) => {
  const { token } = useAuth();
  const [inputValue, setInputValue] = useState("");
  const spanRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [inputWidth, setInputWidth] = useState(50); // initial width

  const removeCommas = (number) => {
    return number.replace(/,/g, "");
  };
  const handleInputChange = (e) => {
    let raw = removeCommas(e.target.value);

    // Only allow digits
    if (!/^\d*$/.test(raw)) return;

    // Restrict to 8 digits
    if (raw.length > 10) return;

    const formatted = addCommas(raw);
    setInputValue(formatted);
  };

  useEffect(() => {
    if (spanRef.current) {
      setInputWidth(spanRef.current.offsetWidth + 20); // add a little padding
    }
  }, [inputValue]);

  function addCommas(number) {
    if (!number || isNaN(Number(number))) return number;

    const [intPart, decimalPart] = String(number).split(".");

    const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return decimalPart ? `${formattedInt}.${decimalPart}` : formattedInt;
  }

  const getRawValue = (val) => {
    const raw = removeCommas(val);
    return raw ? Number(raw) : 0;
  };

  const isWithdrawDisabled =
    !inputValue.trim() || // input is empty
    isNaN(getRawValue(inputValue));

  const handleDeposit = async () => {
    const credentials = {
      amount: getRawValue(inputValue).toString(),
    };
    setLoading(true);
    try {
      const data = await walletDeposit({ token, credentials });
      toast.success("Deposit successful!", {
        style: {
          backgroundColor: "#0C2D5B",
          color: "#fff",
          fontSize: "0.8rem",
          padding: "8px 12px",
        },
      });
      // onClose()
      const redirect = data?.data?.depositURL;
      console.log(redirect);
      if (redirect) {
        window.location.href = redirect;
      }
      console.log(data);
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message, {
        style: {
          backgroundColor: "#C8170D",
          color: "#fff",
          fontSize: "0.8rem",
          padding: "8px 12px",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative overflow-hidden"
        onClick={(e) => e.stopPropagation()} // prevent modal box clicks from closing
      >
        <button
          onClick={onClose}
          className="absolute top-3 text-3xl right-5 text-black"
        >
          ×
        </button>
        <div className="text-renatal-blue flex flex-col justify-center items-center">
          <p className="mb-9">Enter Amount to Deposit</p>
          <div className="relative flex items-center text-4xl bg-slate-400">
            <span className="absolute -left-0.5">₦</span>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="outline-none text-center max-w-sm pl-5"
              style={{ width: `${inputWidth}px` }}
              placeholder="5000"
            />
            {/* Hidden span for measuring text width */}
            <span
              ref={spanRef}
              className="invisible absolute whitespace-pre text-4xl font-normal"
            >
              {inputValue || "5000"}
            </span>
          </div>

          <p className="mt-3">{addCommas(balance)}</p>
          <p className="text-renatal-blue/70">Available Balance</p>
        </div>
        <div className="flex justify-center mt-9">
          <button
            onClick={handleDeposit}
            className={`bg-renatal-blue py-3 flex justify-center  rounded-md w-40   items-center text-white mx-auto  ${
              isWithdrawDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-renatal-blue"
            }`}
            disabled={isWithdrawDisabled || loading}
          >
            {loading ? <ButtonSpinner /> : "Deposit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DepositModal;
