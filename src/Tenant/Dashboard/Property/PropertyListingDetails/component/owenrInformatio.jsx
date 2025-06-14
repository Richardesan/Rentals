import React from "react";

const OwenrInformation = ({selectedProperty}) => {
  return (
    <div className="max-w-md  flex flex-col items-center gap-y-3  py-2 mx-auto"  >
      <div className="">
        <img
          src="/owner.png"
          className="w-[10rem] h-[10rem] rounded-full object-cover object-top"
        />
      </div>
          <p className="font-semibold text-xl text-center">{selectedProperty.landlordName}</p>


      <p className="text-center text-base">
        I’m a private property owner in Lagos, Nigeria, offering well-kept and
        comfortable rental homes. Focused on providing clean, secure, and
        conveniently located properties for long-term or short-term stays.
        Committed to a smooth and responsive rental experience for all tenants.
      </p>
      <img src="/propertychat.png" className="cursor-pointer" />
    </div>
  );
};

export default OwenrInformation;
