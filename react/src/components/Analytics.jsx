import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Analytics() {
  const apiUrl = 'http://127.0.0.1:5000'
  const [allRecent, setAllRecent] = useState([''])
  const [allPopular, setPopular] = useState([''])

  const fetchRecent = async() => {
    try {
      const res = await axios.get(`${apiUrl}/api/v1/search_articles/recent`);
      console.log(res.data)
      setAllRecent(res.data);
    } catch (err) {
      console.log("Error Fetching Recent",err);
    } 

  }

  const fetchPopular = async () => {
    try {
      const res = await axios.get(`${apiUrl}/api/v1/search_articles/popular`);
      console.log(res.data)
      setPopular(res.data);
    } catch (err) {
      console.log("Error Fetching Popular",err);
    } 
  }

  useEffect(() => {
    fetchPopular();
    fetchRecent();
  },[]);
  return (
    <section className="py-24">
        <div className="flex flex-col pl-10 md:flex-row gap-14 justify-center mx-auto max-w-screen-lg">
            <ul className="w-1/2">
                <h2 className="font-bold">Popular Searches</h2>
                {allRecent.map((recent) => (
                  <li className="text-rose-500 list-disc py-2"><span className="text-gray-500 font-semibold">{recent.title}</span></li>
                ))}
            </ul>
            <ul className="w-1/2">
            <h2 className="font-bold">Recent Searches</h2>
            {allPopular.map((popular) => (
                  <li className=" text-rose-500 list-disc py-2"><span className="text-gray-500 font-semibold">{popular.title}</span></li>
                )
            )}
                
            </ul>
        </div>

    </section>
  )
}
