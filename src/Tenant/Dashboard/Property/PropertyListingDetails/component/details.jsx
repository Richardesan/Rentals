import React from 'react'

const Details = ({selectedProperty}) => {
  return (
    <div>
        <h1 className="text-4xl font-bold mt-5">{selectedProperty.name}</h1>

      <div className="flex justify-between items-start mt-2 py-3">
        <div>
          <p className="text-xl  font-semibold">Apartment by <span className="capitalize">{selectedProperty.owner}</span></p>

         <div className="flex gap-x-0.5 items-center">
            <img
              src="/blackpin.png"
              alt="blackpin"
              className="object-cover w-4"
            />

            <p className="text-sm text-black/50">{selectedProperty.location}</p>
          </div>
            <article className="flex justify-between items-center text-sm mt-5">
            <div className="flex gap-x-0.5 items-center ">
              <img
                src="/blackbed.png"
                alt="blackbed"
                className="object-cover w-5"
              />
              <p>{selectedProperty.beds} Bed{selectedProperty.beds > 1 ? "s" : ""}</p>
            </div>
            <div className="flex gap-x-0.5 items-center ">
              <img
                src="/blackbathtub.png"
                alt="blackbathtub"
                className="object-cover w-5"
              />
              <p>{selectedProperty.bath} bath{selectedProperty.bath > 1 ? "s" : ""}</p>
            </div>
            <div className="flex gap-x-0.5 items-center ">
              <img
                src="/blackarchitecture.png"
                alt="blackarchitecture"
                className="object-cover w-5"
              />
              <p>{selectedProperty.sqft} ft²</p>
            </div>
          </article>
         
        </div>
        <p className="text-2xl font-semibold">₦{selectedProperty.price.toLocaleString()}</p>
      </div>
      <h1 className="text-2xl font-semibold mt-3">Description</h1>
      <p className="text-base w-11/12 pl-2 py-2">{selectedProperty.description}</p>
    </div>
  )
}

export default Details