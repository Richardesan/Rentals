import React from 'react'

const Card = ({open, balance}) => {
  function addCommas(number) {
  if (!number || isNaN(Number(number))) return number;

  const [intPart, decimalPart] = String(number).split(".");

  const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return decimalPart ? `${formattedInt}.${decimalPart}` : formattedInt;
}

  return (
    <section>
      <div className="max-w-[44rem] mx-auto bg-custom-gradient rounded-md py-12 flex flex-col items-center lato-regular capitalize">
        <p className="text-renatal-blue">Wallet Balance</p>
        <h1 className="text-5xl text-renatal-blue">₦{addCommas(balance)}</h1>

        <div className="flex items-center gap-x-3 mt-20 font-medium">
          <div className="bg-gold-gradient p-[1px] rounded-lg " onClick={() => open()}>
            <p className="bg-white w-full h-full py-3 px-12 rounded-lg cursor-pointer">
              withdraw
            </p>
          </div>
          <p className="bg-renatal-blue text-white py-3 px-12 rounded-lg cursor-pointer">
            Deposit
          </p>
        </div>
      </div>
    </section>
  )
}

export default Card