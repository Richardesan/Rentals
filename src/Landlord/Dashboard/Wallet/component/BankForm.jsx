import React, { useEffect, useState } from "react";
import {
  getBankCodes,
  resolveAccountNumber,
} from "../../../../services/queries";
import { useAuth } from "../../../../context/authContext";
import ButtonSpinner from "../../../../component/ButtonSpinner";

const BankForm = ({
  accountNumber,
  setAccountNumber,
  setSelectedBank,
  selectedBank,
  accountName,
  setAccountName,
  handleWithdraw,
  isWithdrawDisabled,
  loading
}) => {
  const [loadingName, setLoadingName] = useState(false);
  const [mybanks, setMybanks] = useState([]);
  const { token } = useAuth();

  const getcodes = async () => {
    try {
      const data = await getBankCodes({ token });
      setMybanks(data?.data?.banks);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (token) {
      getcodes();
    }
  }, [token]);

  // Resolve account name when both accountNumber and selectedBank are valid
  useEffect(() => {
    const fetchAccountName = async () => {
      if (accountNumber.length === 10 && selectedBank) {
        try {
          setLoadingName(true);
          const res = await resolveAccountNumber({
            token,
            accountNumber,
            bankCode: selectedBank,
          });
          setAccountName(res?.data?.accountName || "Invalid account");
        } catch (err) {
          console.error("Error resolving account number:", err);
          setAccountName("Error fetching name");
        } finally {
          setLoadingName(false);
        }
      } else {
        setAccountName("");
      }
    };

    fetchAccountName();
  }, [accountNumber, selectedBank, token]);

  return (
    <div className="max-w-md mx-auto p-2 space-y-4 rounded-md">
      <div>
        <label className="block font-medium">Account Number</label>
        <div className="bg-gold-gradient p-[1px] rounded-md">
          <input
            type="text"
            value={accountNumber}
            maxLength={10}
            onChange={(e) => setAccountNumber(e.target.value)}
            className="w-full border py-3 px-5 text-rental-dark font-medium rounded-md outline-none"
            placeholder="Enter 10-digit account number"
          />
        </div>
      </div>

      <div>
        <label className="block font-medium">Bank/Wallet ID</label>
        <div className="bg-gold-gradient p-[1px] rounded-md">
          <select
            className="w-full border p-2 rounded-md outline-none"
            value={selectedBank}
            onChange={(e) => setSelectedBank(e.target.value)}
          >
            <option value="">-- Choose a bank --</option>
            {mybanks.map((bank) => (
              <option key={bank.id} value={bank.code}>
                {bank.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block font-medium">Account Name {accountName === "Error fetching name" && (
  <span className="text-danger text-xs">(Please check the account number and bank)</span>
)}
</label>
        <div className={` p-[1px] rounded-md ${accountName === "Error fetching name" ? "bg-danger shadow shadow-danger" : "bg-gold-gradient" }`}>
          <div className="py-3 px-5 border rounded-md bg-gray-100 text-sm text-rental-dark/80 min-h-10">
            {loadingName ? "Fetching name..." : accountName === "Error fetching name" ?<span className="text-danger font-medium">Account not found</span>: accountName}
          </div>
        </div>
      <div className="flex justify-center">

        <button
  className={`mt-6 w-36 flex items-center justify-center py-3 mx-auto  rounded-md text-white font-semibold ${
    isWithdrawDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-renatal-blue"
  }`}
  disabled={isWithdrawDisabled || loading}
  onClick={handleWithdraw}
>
  {loading ? <ButtonSpinner /> :"Withdraw"}
</button>
      </div>

      </div>
    </div>
  );
};

export default BankForm;
