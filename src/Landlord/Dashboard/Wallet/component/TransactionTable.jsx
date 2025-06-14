import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const TransactionTable = ({ walletTransactions }) => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const header = [
    { id: 1, key: "date", label: "Date" },
    { id: 2, key: "transactionType", label: "Transaction ID" },
    { id: 3, key: "Amount", label: "Amount" },
    { id: 4, key: "TransactionType", label: "Transaction Type" },
    { id: 5, key: "Status", label: "Status" },
  ];
console.log(walletTransactions)
function handleRecipt(id) {
  console.log("Clicked ID:", id);

  const item = walletTransactions.find((txn) => txn.id === id);

  if (!item) {
    console.warn("Transaction not found for ID:", id);
    return;
  }

  console.log("Matched transaction:", item);
  setSelectedProperty(item);
}


  const getTransactionTypeClass = (type) => {
    switch (type.toLowerCase()) {
      case "cancelled":
        return "bg-[#FF1414]";
      case "successful":
        return "bg-[#388E3C]";
      case "pending":
        return "bg-[#FB8C00BB]";
      default:
        return "bg-gray-400";
    }
  };

  const getRecieptClass = (type) => {
    switch (type.toLowerCase()) {
      case "withdrawal":
        return "text-[#FF1414] font-semibold  ";
      case "deposit":
        return "text-[#388E3C] font-semibold ";
      case "pending":
        return "text-[#FB8C00BB] font-semibold ";
      default:
        return "text-gray-600";
    }
  };

  const getSentType = (type) => {
    switch (type.toLowerCase()) {
      case "debit":
        return "sent";
      case "successful":
        return "recieved";
      case "pending":
        return "pending";
      default:
        return "text-gray-600";
    }
  };


  const getRecieptSign = (type) => {
    switch (type.toLowerCase()) {
      case "withdrawal":
        return "-₦";
      case "credit":
        return "+₦";
      case "pending":
        return "₦";
      default:
        return "text-gray-600";
    }
  };
function addCommas(number) {
  if (!number || isNaN(Number(number))) return number;

  const fixed = Number(number).toFixed(2); // Ensures 2 decimal places
  const [intPart, decimalPart] = fixed.split(".");

  const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return `${formattedInt}.${decimalPart}`;
}

  function closeModal() {
    setSelectedProperty(null);
  }
  function getValidName(name) {
    const words = name.trim().split(" ");
    const first = words[0] || "";
    const second = words[1] || "";

    if (first.length > 11 && second.length <= 11) {
      return second;
    }

    return first;
  }
  function formatReadableDate(dateStr) {
    const date = new Date(dateStr);

    const day = date.getDate().toString().padStart(2, "0");
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12; // Convert to 12-hour format

    return `${day}-${month}-${year}, ${hours}:${minutes}${ampm}`;
  }

  return (
    <section className="lato-regular">
      <div className="flex w-full">
        <p className="text-xl">Recent Transaction</p>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {header.map((col) => (
              <th
                key={col.id}
                className="bg-[#F7F8FA] py-5 px-4 uppercase text-left text-primaryCol"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="text-sm">
          {walletTransactions?.map((data, index) => (
            <tr
              onClick={() => {
                // handleRecipt(data.id)
              }
              
              }
              key={index}
              className="border-t py-4 align-middle cursor-pointer even:bg-[#F7F8FA] opacity-70 hover:opacity-100"
            >
              <td className="px-4 py-6">
                {formatReadableDate(data.createdAt)}
              </td>
              <td className="px-4">{data.id}</td>

              <td className="px-4">₦{addCommas(data.amount)}</td>
              <td className="px-4">{data.transactionType}</td>
              <td className="px-4">
                <span
                  className={`inline-block text-white rounded-full px-3 py-1 text-xs ${getTransactionTypeClass(
                    data.transactionStatus
                  )} `}
                >
                  {data.transactionStatus}{" "}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedProperty && (
        <div
          className="fixed inset-0 flex items-center justify-end px-14 bg-black/50 backdrop-blur-sm z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white  rounded-2xl flex flex-col justify-between  shadow-md max-w-md h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-renatal-blue ">
                Transaction Details
              </h2>
              <section className="border flex items-center justify-between border-rental-deep p-3  rounded-md">
                <article className=" flex items-center gap-x-2">
                  <div
                    className={
                      selectedProperty.transactionStatus === "credit"
                        ? "rotate-180"
                        : selectedProperty.transactionStatus === "pending"
                        ? "rotate-45"
                        : ""
                    }
                  >
                    <img src="/sent.svg" alt="sent.svg" />
                  </div>
                  <div className="w-full">
                    <p className="text-[13px] font-semibold text-rental-dark/70 capitalize">
                      {getSentType(selectedProperty.transactionStatus)} Money{" "}
                      {selectedProperty.transactionStatus === "credit"
                        ? "from "
                        : "to "}
                      <span className="text-rental-dark">
                        {/* {getValidName(selectedProperty.Recipient)} */}
                      </span>{" "}
                    </p>
                    <p className="text-sm font-semibold">
                      {/* {getSentType(selectedProperty.transactionStatus)} */}
                    </p>
                  </div>
                </article>
                <p
                  className={`${getRecieptClass(
                    selectedProperty.transactionType
                  )} `}
                >
                  {getRecieptSign(selectedProperty.transactionType)}
                  {addCommas(selectedProperty.amount)}
                </p>
              </section>
              {/* <pre className="text-sm text-gray-700">
              {JSON.stringify(selectedProperty, null, 2)}
            </pre> */}
              <h1 className="mt-10 mb-3 font-semibold text-renatal-blue">
                Details
              </h1>
              <section className="space-y-4  font-medium">
                <div className="flex justify-between  items-center">
                  <p className="text-sm">Transaction ID </p>
                  <p className="text-sm text-rental-dark/70">
                    {selectedProperty.id}
                  </p>
                </div>
                <div className="flex justify-between  items-center">
                  <p className="text-sm">Transaction Date </p>
                  <p className="text-sm text-rental-dark/70">
                     {formatReadableDate(selectedProperty.createdAt)}
                  </p>
                </div>
                <div className="flex justify-between  items-center">
                  <p className="text-sm">Recipient </p>
                  <p className="text-sm text-rental-dark/70">
                    {/* {selectedProperty.Recipient} */}
                  </p>
                </div>
                <div className="flex justify-between  items-center">
                  <p className="text-sm">Status </p>
                  <p className="text-sm text-rental-dark/70 capitalize">
                    {selectedProperty.transactionStatus}
                  </p>
                </div>
                <div className="flex justify-between  items-center">
                  <p className="text-sm">Amount sent </p>
                  <p className="text-sm text-rental-dark/70 capitalize">
                    ₦{addCommas(selectedProperty.amount)}
                  </p>
                </div>
                <div className="flex justify-between  items-center">
                  <p className="text-sm">Fee </p>
                  <p className="text-sm text-rental-dark/70 capitalize">
                    {/* ₦{addCommas(selectedProperty.fee)}.00 */}
                  </p>
                </div>
              </section>
            </div>
            <div className="px-6 pb-6 text-sm  border-rental-deep border w-full flex  gap-x-3">
              <div className="mt-4 px-4 font-semibold py-2 cursor-pointer  flex items-center gap-x-2 justify-center w-full text-rental-dark/70 border-rental-dark/50 border rounded ">
                <img src="/share.svg" alt="share" />
                Share Transaction
              </div>
              <button
                onClick={closeModal}
                className="mt-4 px-4 py- bg-renatal-blue w-full font-semibold text-white rounded "
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TransactionTable;
