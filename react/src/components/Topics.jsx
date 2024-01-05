import React from 'react'
import { BiBuildingHouse, BiHomeHeart, BiUser } from 'react-icons/bi';

function Topics() {
  return (
    <section className="bg-rose-600 py-24">
        <div className="flex flex-col gap-6 sm:flex-row justify-center">
      <div className="flex flex-col items-center mr-16">
        <BiHomeHeart size={70} color="white" />
        <p className="mt-2 text-lg text-white font-bold">For Renters</p>
      </div>
      <div className="flex flex-col items-center mr-16">
        <BiBuildingHouse size={70} color="white" />
        <p className="mt-2 text-lg text-white font-bold ">For Landlords</p>
      </div>
      <div className="flex flex-col items-center mr-16">
        <BiUser size={70} color="white" />
        <p className="mt-2 text-lg text-white font-bold">For Agents</p>
      </div>
    </div>
    </section>
    
  )
}

export default Topics