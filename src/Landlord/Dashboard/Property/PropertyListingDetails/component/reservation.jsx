import React from "react";

const Reservation = () => {
  return (
    <div className="w-1/2">
      <h1 className="text-2xl font-semibold mt-5 mb-3">
        Property Reservation Details
      </h1>
   <table className="w-full table-auto border border-gray-200 text-left text-sm">
  <thead className="bg-gray-100 text-gray-700">
    <tr className=" text-renatal-blue">
      <th className="p-2 border">Date</th>
      <th className="p-2 border">Check-In Date</th>
      <th className="p-2 border">Check-Out Date</th>
      <th className="p-2 border">No. of Year</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-t">
      <td className="p-2 border">12-08-2024 | 02:25pm</td>
      <td className="p-2 border">17-08-2024</td>
      <td className="p-2 border">21-08-2024</td>
      <td className="p-2 border">5</td>
    </tr>
  </tbody>

  <thead className="bg-gray-100 text-gray-700">
    <tr className=" text-renatal-blue">
      <th className="p-2 border">Amount</th>
      <th className="p-2 border">Payment Method</th>
      <th className="p-2 border">Available Status</th>
      <th className="p-2 border">Payment Due</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-t">
      <td className="p-2 border">₦9,500,000.00</td>
      <td className="p-2 border">Wallet Balance</td>
      <td className="p-2 border">Available</td>
      <td className="p-2 border">2029</td>
    </tr>
  </tbody>
    <thead className="bg-gray-100 text-gray-700">
    <tr className=" text-renatal-blue">
      <th className="p-2 border">First Name</th>
      <th className="p-2 border">Last Name</th>
      <th className="p-2 border">Email Address</th>
      <th className="p-2 border">Phone Number</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-t">
      <td className="p-2 border">Precious</td>
      <td className="p-2 border">Owolabi</td>
      <td className="p-2 border">owolabipre@gmail.com</td>
      <td className="p-2 border">+23481023455470</td>
    </tr>
  </tbody>
    <thead className="bg-gray-100 text-gray-700">
    <tr className=" text-renatal-blue">
      <th className="p-2 border">Address</th>
      <th className="p-2 border">City</th>
      <th className="p-2 border">State</th>
      <th className="p-2 border">Postal Code</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-t">
      <td className="p-2 border max-w-44">3A, Lucas Street Baba Yellow3A</td>
      <td className="p-2 border">Ikorodu</td>
      <td className="p-2 border">Lagos State</td>
      <td className="p-2 border">10222</td>
    </tr>
  </tbody>
</table>

    </div>
  );
};

export default Reservation;
