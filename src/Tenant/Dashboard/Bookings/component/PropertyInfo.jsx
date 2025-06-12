import React from 'react'

const PropertyInfo = ({propertyData}) => {
      function addCommas(number) {
    return String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div className="mt-5">
            <h1 className="text-base font-semibold">Property Info *</h1>
            <section
              className={`flex items-center justify-between rounded-xl pr-3 bg-glossy-gradient mt-2 h-60 overflow-hidden `}
            >
              <article className="basis-[50%] w-full h-full">
                <img
                  src={propertyData.locationImage[0]}
                  alt={propertyData.locationImage[0]}
                  className="h-full w-full  object-cover object-center"
                />
              </article>
              <article className="basis-[45%] w-full  ">
                <div className=" ">
                  <p className="text-xl font-semibold capitalize text-rental-dark/90">{propertyData.name}</p>

                  <p className="text-base mt-5 capitalize font-semibold">
                    {propertyData.owner}
                  </p>
                  <div className="flex gap-x-0.5 items-center">
                    <img
                      src="/blackpin.png"
                      alt="blackpin"
                      className="object-cover w-4"
                    />

                    <p className="text-sm text-black/50">
                      {propertyData.location}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-xl font-semibold my-3 text-rental-dark/90">
                    ₦ {addCommas(propertyData.price)}
                  </p>
                  <article className="flex justify-between items-center text-sm">
                    <div className="flex gap-x-0.5 items-center ">
                      <img
                        src="/blackbed.png"
                        alt="blackbed"
                        className="object-cover w-5"
                      />
                      <p>
                        {propertyData.beds} Bed
                        {propertyData.beds > 1 ? "s" : ""}
                      </p>
                    </div>
                    <div className="flex gap-x-0.5 items-center ">
                      <img
                        src="/blackbathtub.png"
                        alt="blackbathtub"
                        className="object-cover w-5"
                      />
                      <p>
                        {propertyData.bath} bath
                        {propertyData.bath > 1 ? "s" : ""}
                      </p>
                    </div>
                    <div className="flex gap-x-0.5 items-center ">
                      <img
                        src="/blackarchitecture.png"
                        alt="blackarchitecture"
                        className="object-cover w-5"
                      />
                      <p>{propertyData.sqft} sqft</p>
                    </div>
                  </article>
                </div>
              </article>
            </section>
          </div>
  )
}

export default PropertyInfo