import React from "react";
import { useNavigate } from "react-router-dom";

const BookingsTable = () => {
  const navigate = useNavigate();

  const header = [
    { id: 1, key: "property", label: "Property" },
    { id: 6, key: "agreementID", label: "Agreement ID" },
    { id: 2, key: "landlord", label: "Property Owner" },
    { id: 3, key: "amount", label: "Price" },
    { id: 4, key: "period", label: "Period" },
    { id: 5, key: "status", label: "Status" },
  ];

  const data = [
    {
      id: 1,
      property: "4539 Concourse Rd, Darlington, MD",
      landlord: "Richard Williams",
      agreementID: "AGR-2025-001",
      status: "signed",
      period: "1/1/2024 - 12/31/2024",
      amount: 50000,
    },
    {
      id: 2,
      property: "4539 Concourse Rd, Darlington, MD",
      landlord: "Richard Williams",
      agreementID: "AGR-2025-001",
      status: "pending",
      period: "1/1/2024 - 12/31/2024",
      amount: 50000,
    },
    {
      id: 3,
      property: "4539 Concourse Rd, Darlington, MD",
      landlord: "Richard Williams",
      agreementID: "AGR-2025-001",
      status: "cancelled",
      period: "1/1/2024 - 12/31/2024",
      amount: 50000,
    },
  ];

  const getTransactionTypeClass = (type) => {
    switch (type.toLowerCase()) {
      case "cancelled":
        return "bg-[#FF1414] w-fit";
      case "signed":
        return "bg-[#388E3C] w-fit";
      case "pending":
        return "bg-[#FB8C00BB] w-fit";
      default:
        return "text-gray-600";
    }
  };

  const addCommas = (number) =>
    String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <section>
      <div className="flex w-full">
        <p className="text-xl"></p>
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
          {data.map((row) => (
            <tr
              key={row.id}
              className="even:bg-[#F7F8FA] cursor-pointer hover:bg-gray-100 transition opacity-70 hover:opacity-100"
              onClick={() => navigate(`/tenant/dashboard/viewagreement/${row.id}`)}
            >
              {header.map((col) => (
                <td key={col.id} className="py-5 px-4">
                  <div
                    className={`flex rounded-3xl items-center gap-x-2 ${
                      col.key === "status"
                        ? `${getTransactionTypeClass(row[col.key])} px-5 py-1 text-white capitalize`
                        : "text-black"
                    }`}
                  >
                    {col.key === "status" && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    )}
                    <span>
                      {col.key === "amount"
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
    </section>
  );
};

export default BookingsTable;
