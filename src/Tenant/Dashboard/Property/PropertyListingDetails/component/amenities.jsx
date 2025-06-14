import React from 'react';

const Amenities = ({ selectedAmenities }) => {
  const Amenitiesdata = [
    {
      key: "wifi",
      icon: "/wifi.svg",
      name: "Wi-Fi",
    },
    {
      key: "water",
      icon: "/Water.svg",
      name: "Water",
    },
    {
      key: "power",
      icon: "/charger.svg",
      name: "Power",
    },
    {
      key: "parking",
      icon: "/parking.svg",
      name: "Parking",
    },
    {
      key: "securitySystem",
      icon: "/shield.svg",
      name: "Security",
    },
  ];

  const availableAmenities = Amenitiesdata.filter(
    (item) => selectedAmenities?.[item.key] === 'true'
  );

  return (
    <section>
      <h1 className="text-2xl font-semibold mt-5">Amenities</h1>
      <div className="flex flex-wrap gap-4 p-2 w-1/2">
        {availableAmenities.map((data, index) => (
          <div key={index} className="flex gap-x-2 items-center">
            <img src={data.icon} alt={data.name} className="w-6 h-6" />
            <p>{data.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;
