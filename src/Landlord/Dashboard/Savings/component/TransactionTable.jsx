import React, { useState } from "react";

const TransactionTable = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const header = [
    { id: 1, key: "date", label: "Date" },
    { id: 2, key: "transactionType", label: "Transaction type" },
    { id: 4, key: "amount", label: "Amount" },
    { id: 6, key: "remark", label: "REMARK" },
    { id: 5, key: "currentBalance", label: "Current Balance" },
    { id: 5, key: "status", label: "status" },
  ];

  const data = [
    {
      id: 1,
      date: "10-Nov-2025, 11:23pm",
      transactionType: "credit",
      narration: "Wallet funding",
      amount: 5000000,
      TransactionID: "R3WSADEWWED",
      Recipient: "Oluwasomidotunm Doe",
      date: "12 Jun, 11:28 AM ",
      fee: 0,
      currentBalance: 15000000,
      remark: 'rent',
      status: "ongoing"
    },
    {
      id: 2,
      date: "10-Nov-2025, 11:23pm",
      transactionType: "pending",
      narration: "Wallet funding",
      amount: 50000,
       TransactionID: "R3WSADEWWED",
      Recipient: "John Doe",
      date: "12 Jun, 11:28 AM ",
      fee: 0,
      currentBalance: 150000,
      remark: 'rent',
      status: "ongoing"


    },
    {
      id: 3,
      date: "10-Nov-2025, 11:23pm",
      transactionType: "debit",
      narration: "Wallet funding",
      amount: 50000,
       TransactionID: "R3WSADEWWED",
      Recipient: "John Doe",
      date: "12 Jun, 11:28 AM ",
      fee: 0,
      currentBalance: 150000,
      remark: 'rent',
      status: "ongoing"


    },
    {
      id: 4,
      date: "10-Nov-2025, 11:23pm",
      transactionType: "credit",
      narration: "Wallet funding",
      amount: 50000,
       TransactionID: "R3WSADEWWED",
      Recipient: "John Doe",
      date: "12 Jun, 11:28 AM ",
      fee: 0,
      currentBalance: 150000,
      remark: 'rent',
      status: "ongoing"


    },
  ];
  function handleRecipt(id) {
    const item = data.find((item) => item.id === Number(id));
    setSelectedProperty(item);
  }

  const getTransactionTypeClass = (type) => {
    switch (type.toLowerCase()) {
      case "debit":
        return " text-red-600 w-fit ";
      case "credit":
        return "text-green-600 w-fit  ";
      case "pending":
        return "text-yellow-600 w-fit ";
      default:
        return "text-gray-600";
    }
  };

  const getRecieptClass = (type) => {
    switch (type.toLowerCase()) {
      case "debit":
        return "text-[#FF1414] font-semibold  ";
      case "credit":
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
      case "credit":
        return "recieved";
      case "pending":
        return "pending";
      default:
        return "text-gray-600";
    }
  };

  const getRecieptSign = (type) => {
    switch (type.toLowerCase()) {
      case "debit":
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
    return String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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

  return (
    <section className="lato-regular">
      <div className="flex w-full">
        <p className="text-xl">Recent Transaction</p>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {header.map((col) => (
              <th key={col.id} className="bg-[#F7F8FA] py-5   text-left text-primaryCol uppercase">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="py-10 text-sm">
          {data.map((row) => (
            <tr
              key={row.id}
              className="py-5 even:bg-[#F7F8FA] cursor-pointer  opacity-70 hover:opacity-100 hover:bg-gray-100"
              onClick={() => handleRecipt(row.id)}
            >
              {header.map((col) => (
                <td key={col.id} className="py-5">
                  <div
                    className={`flex rounded-3xl text-black items-center gap-x-2 ${
                      col.key === "transactionType"
                        ? `${getTransactionTypeClass(row[col.key])} px-5`
                        : ""
                    }`}
                  >
                   
                    <span
                      className={
                        col.key === "transactionType"
                          ? " capitalize "
                          : " capitalize"
                      }
                    >
                      {col.key === "amount" || col.key === "currentBalance"
                        ? `₦${addCommas(row[col.key])}`
                        : row[col.key]}
                    </span>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {selectedProperty && (
        <div
          className="fixed inset-0 flex items-center justify-end px-14 bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div className="bg-white  rounded-2xl flex flex-col justify-between  shadow-md max-w-md h-[90vh] w-full"
        onClick={(e) => e.stopPropagation()} // prevent modal box clicks from closing
          
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-renatal-blue ">
                Transaction Details
              </h2>
              <section className="border flex items-center justify-between border-rental-deep p-3  rounded-md">
                <article className=" flex items-center gap-x-2">
                  <div className={selectedProperty.transactionType === "credit" ? "rotate-180" : selectedProperty.transactionType === "pending" ? "rotate-45" : ""}>
<img src="/sent.svg" alt="sent.svg" />
                  </div>
                  <div className="w-full">

                
                  <p className="text-[13px] font-semibold text-rental-dark/70 capitalize">
                    {getSentType(selectedProperty.transactionType)} Money {selectedProperty.transactionType === "credit" ? "from " : "to "}
                    <span className="text-rental-dark">{getValidName(selectedProperty.Recipient)}</span>{" "}
                  </p>
                  <p className="text-sm font-semibold">{getSentType(selectedProperty.transactionType)}</p>
                    </div>
                </article>
                <p
                  className={`${getRecieptClass(selectedProperty.transactionType)} `}
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
                    {selectedProperty.TransactionID}
                  </p>
                </div>
                <div className="flex justify-between  items-center">
                  <p className="text-sm">Transaction Date </p>
                  <p className="text-sm text-rental-dark/70">
                    {selectedProperty.date}
                  </p>
                </div>
                <div className="flex justify-between  items-center">
                  <p className="text-sm">Recipient </p>
                  <p className="text-sm text-rental-dark/70">
                    {selectedProperty.Recipient}
                  </p>
                </div>
                <div className="flex justify-between  items-center">
                  <p className="text-sm">Status </p>
                  <p className="text-sm text-rental-dark/70 capitalize">
                    {selectedProperty.transactionType}
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
                    ₦{addCommas(selectedProperty.fee)}.00
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
              
              className="mt-4 px-4 py- bg-renatal-blue w-full font-semibold text-white rounded " >
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
