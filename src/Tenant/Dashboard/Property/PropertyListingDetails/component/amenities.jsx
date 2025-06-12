import React from 'react'

const Amenities = () => {
    const Amenitiesdata = [
        {
            icon: "/wifi.png",
            name: "Wi-Fi"
        },
           {
            icon: "/wifi.png",
            name: "Water"
        },
           {
            icon: "/wifi.png",
            name: "Power"
        },
           {
            icon: "/wifi.png",
            name: "Parking"
        },
         {
            icon: "/wifi.png",
            name: "Parking"
        },
    ]
  return (
    <section>
<h1 className='text-2xl font-semibold mt-5'>Amenities</h1>
    <div className='flex gap-x-5 items-center p-2'>
    {
        Amenitiesdata.map((data)=> {
            return (
                <div className='flex gap-x-2 items-center'>
                    <img src={data.icon} alt={data.icon} />
                    <p>{data.name}</p>
                </div>
            )
        })
    }

    </div>
    </section>

  )
}

export default Amenities