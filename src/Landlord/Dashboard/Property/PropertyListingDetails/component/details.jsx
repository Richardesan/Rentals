import React from 'react'
import { useAuth } from '../../../../../context/authContext'

const Details = ({selectedProperty}) => {
  const {user} = useAuth()
  function addCommas(number) {
  return String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  return (
    <div>
        <h1 className="text-4xl font-bold mt-5">{selectedProperty.title}</h1>

      <div className="flex justify-between items-start mt-2 py-3">
        <div>
          <p className="text-xl mb-1 font-semibold">Apartment by <span className="capitalize">{user.firstname} {user.lastname}</span></p>

         <div className="flex gap-x-0.5 items-center">
            <img
              src="/disyellow.svg"
              alt="blackpin"
              className="object-cover w-4"
            />

            <p className="text-sm text-black/50">{selectedProperty.address.city}, {selectedProperty.address.state}, {selectedProperty.address.country}</p>
          </div>
            <article className="flex justify-between items-center text-sm mt-5">
            <div className="flex gap-x-0.5 items-center ">
              <img
                src="/bedYellow.svg"
                alt="blackbed"
                className="object-cover w-5"
              />
              <p>{selectedProperty.numberOfBedrooms} Bed{selectedProperty.numberOfBedrooms > 1 ? "s" : ""}</p>
            </div>
            <div className="flex gap-x-0.5 items-center ">
              <img
                src="/bathtubYellow.svg"
                alt="blackbathtub"
                className="object-cover w-5"
              />
              <p>{selectedProperty.numberOfBathrooms} bath{selectedProperty.numberOfBathrooms > 1 ? "s" : ""}</p>
            </div>
            <div className="flex gap-x-0.5 items-center ">
              <img
                src="/architectureYellow.svg"
                alt="blackarchitecture"
                className="object-cover w-5"
              />
              <p>{selectedProperty.numberOfKitchen} ft²</p>
            </div>
          </article>
         
        </div>
        <p className="text-2xl font-semibold text-renatal-blue">₦{addCommas(selectedProperty.price.toLocaleString())}</p>
      </div>
      <h1 className="text-2xl font-semibold mt-3">Description</h1>
      <p className="text-base w-9/12 pl-2 py-2">{selectedProperty.description}</p>
    </div>
  )
}

export default Details