import React, { useEffect, useState } from "react";
import {
  getBankCodes,
  resolveAccountNumber,
} from "../../../../services/queries";
import { useAuth } from "../../../../context/authContext";

const BankForm = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const [accountName, setAccountName] = useState("");
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
          setAccountName(res?.data?.accountName  || "Invalid account");
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
        <label className="block text-sm font-medium">Account Number</label>
        <div className="bg-gold-gradient p-[1px] rounded-md">
          <input
            type="text"
            value={accountNumber}
            maxLength={10}
            onChange={(e) => setAccountNumber(e.target.value)}
            className="w-full border py-3 px-5 text-[#00000066] rounded-md outline-none"
            placeholder="Enter 10-digit account number"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Bank/Wallet ID</label>
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
        <label className="block text-lg">Account Name</label>
        <div className="bg-gold-gradient p-[1px] rounded-md">
          <div className="py-3 px-5 border rounded-md bg-gray-100 text-sm text-rental-dark/80 min-h-10">
            {loadingName ? "Fetching name..." : accountName || ""}
          </div>
        </div>
        <div className="bg-renatal-blue text-white py-3 px-12 rounded-lg cursor-pointer w-fit mx-auto mt-7">
          Withdraw
        </div>
      </div>
    </div>
  );
};

export default BankForm;
