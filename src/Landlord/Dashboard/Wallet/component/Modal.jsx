import React, { useState, useRef, useEffect } from "react";
import BankForm from "./BankForm";
import { useAuth } from "../../../../context/authContext";
import { walletWithdrawal } from "../../../../services/queries";
const Modal = ({ onClose, balance }) => {
  const { token } = useAuth();
  const [inputValue, setInputValue] = useState("");
  const spanRef = useRef(null);
  const [accountNumber, setAccountNumber] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const [accountName, setAccountName] = useState("");
const [loading, setLoading] = useState(false)
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
    isNaN(getRawValue(inputValue)) || // not a number
    getRawValue(inputValue) > Number(balance) || // more than balance
    !accountName.trim() ||
    accountName === "Error fetching name" || // fetch error
    !selectedBank.trim() ||
    accountNumber.trim().length !== 10;

  const handleWithdraw = async () => {
    setLoading(true)
    const credentials = {
      accountNumber,
      bankCode: selectedBank,
      name: accountName,
      amount: getRawValue(inputValue).toString(),
    };
    try {
      const data = await walletWithdrawal({ token, credentials });
      console.log(data)
    } catch(err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative overflow-hidden cursor-default"
        onClick={(e) => e.stopPropagation()} // prevent modal box clicks from closing
      >
        <button
          onClick={onClose}
          className="absolute top-3 text-3xl right-5 text-black"
        >
          ×
        </button>
        <div className="text-renatal-blue flex flex-col justify-center items-center">
          <p className="mb-5">Enter Amount to Withdraw</p>
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
        <BankForm
          accountNumber={accountNumber}
          setAccountNumber={setAccountNumber}
          selectedBank={selectedBank}
          setSelectedBank={setSelectedBank}
          setAccountName={setAccountName}
          accountName={accountName}
          handleWithdraw={handleWithdraw}
          isWithdrawDisabled={isWithdrawDisabled}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Modal;
