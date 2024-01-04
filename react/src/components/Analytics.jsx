import React from 'react'

export default function Analytics() {
  return (
    <section className="py-24">
        <div className="flex justify-center mx-auto max-w-screen-lg">
            <ul className="w-1/2">
                <h2 className="text-2xl font-bold">Popular Searches</h2>
                <li className=" text-rose-500 list-disc"><span className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</span></li>
            </ul>
            <ul className="w-1/2">
            <h2 className="text-2xl font-bold">Recent Searches</h2>
                <li className=" text-rose-500 list-disc"><span className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</span></li>
            </ul>
        </div>

    </section>
  )
}
