import React from "react";
import { useNavigate } from "react-router-dom";

const header = [
  { id: 1, key: "property", label: "Property" },
  { id: 6, key: "agreementID", label: "Agreement ID" },
  { id: 2, key: "tenant", label: "Tenant" },
  { id: 3, key: "amount", label: "Amount" },
  { id: 4, key: "period", label: "Period" },
  { id: 5, key: "status", label: "Status" },
];

const BookingsTable = ({ getagreementData }) => {
  const navigate = useNavigate();

  const getTransactionTypeClass = (type) => {
    switch (type.toLowerCase()) {
      case "cancelled":
        return "bg-[#FF1414]";
      case "signed":
        return "bg-[#388E3C]";
      case "pending":
        return "bg-[#FB8C00BB]";
      default:
        return "bg-gray-400";
    }
  };

  function addCommas(number) {
  if (!number || isNaN(Number(number))) return number;

  const [intPart, decimalPart] = String(number).split(".");

  const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return decimalPart ? `${formattedInt}.${decimalPart}` : formattedInt;
}
  function formatDateRange(start, end) {
    const startDate = new Date(start);
    const endDate = new Date(end);

    const format = (date) =>
      `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

    return `${format(startDate)} - ${format(endDate)}`;
  }

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
          {getagreementData?.map((data, index) => (
            <tr  onClick={() => navigate(`/landlord/dashboard/viewagreement/${data.agreement.id}`)} key={index} className="border-t py-4 align-middle cursor-pointer even:bg-[#F7F8FA] opacity-70 hover:opacity-100">
              <td className="px-4 py-6">
                {data.listing.address.street}{" "}
                {data.listing.address.city}, {data.listing.address.state},{" "}
                {data.listing.address.country}
              </td>
              <td className="px-4"   >{data.agreement.id}</td>
              <td className="px-4">
                {data.tenant.firstname} {data.tenant.lastname}
              </td>
              <td className="px-4">{addCommas(data.agreement.rentAmount)}</td>
              <td className="px-4">
                {formatDateRange(
                  data.agreement.startDate,
                  data.agreement.endDate
                )}
              </td>
              <td className="px-4">
                <span
                  className={`inline-block text-white rounded-full px-3 py-1 text-xs ${getTransactionTypeClass(
                    data.agreement.agreementStatus
                  )}`}
                >
                  {data.agreement.agreementStatus}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default BookingsTable;
