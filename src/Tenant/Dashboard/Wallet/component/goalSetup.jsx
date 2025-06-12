import React, {useState} from 'react'

const GoalSetup = ({rent, handleFieldChange, startDate}) => {
 

  return (
    <section>
        <p className='text-2xl font-semibold text-renatal-blue'>Define Your Savings Goal</p>
      <article className=" relative w-full">
          <p className="mb-1 font-semibold text-rental-dark/80">How much do you need?</p>
          {rent && <span className="absolute left-3 bottom-2">₦</span>}

          <input
            type="text"
            placeholder="₦ 0.00"
            value={rent}
            onChange={(e) => handleFieldChange("rent", e.target.value)}
            className={`border border-rental-deep w-full
             pl-6 py-2 text-sm font-semibold rounded-lg outline-none`}
          />
          
        </article>
      <article className="basis-[49%]">
          <p className="mb-1 font-semibold text-rental-dark/80">When do you want to reach this goal?</p>
          <input
            type="date"
            value={startDate}
            onChange={(e) => handleFieldChange("startDate", e.target.value)}
                className={`border-rental-deep
            } px-4 py-2 text-sm  w-full font-semibold rounded-lg outline-none`}
          />
       
        </article>

        </section>
  )
}

export default GoalSetup