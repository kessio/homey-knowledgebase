/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton';
import LoadingSkeletonContent from './LoadingSkeletonContent';

export default function Analytics() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [allRecent, setAllRecent] = useState([])
  const [allPopular, setPopular] = useState([])
  const [loadingRecent, setLoadingRecent] = useState(true);
  const [loadingPopular, setLoadingPopular] = useState(true);

  const fetchRecent = async() => {
    try {
      const res = await axios.get(`${apiUrl}/api/v1/search_articles/recent`, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      console.log(res.data)
      setAllRecent(res.data);
    } catch (err) {
      console.log("Error Fetching Recent",err);
    } finally {
      setLoadingRecent(false); 
    }

  }

  const fetchPopular = async () => {
    try {
      const res = await axios.get(`${apiUrl}/api/v1/search_articles/popular`, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log(res.data)
      setPopular(res.data);
    } catch (err) {
      console.log("Error Fetching Popular",err);
    } finally {
      setLoadingPopular(false); 
    }
  }

  useEffect(() => {
    Promise.all([fetchRecent(), fetchPopular()]).then(() => {
      
    });
  },[]);
  return (
    <section className="py-24">
        <div className="flex flex-col pl-10 md:flex-row gap-14 justify-center mx-auto max-w-screen-lg">
        <ul className="w-1/2">
          <h2 className="font-bold">Recent Searches</h2>
          {loadingRecent ? (
           <LoadingSkeletonContent/>
           
          ) : (
            Array.isArray(allRecent) &&
            allRecent.map((recent) => (
              <li key={recent.id} className="text-rose-500 list-disc py-2">
                <span className="text-gray-500 font-semibold">{recent.title}</span>
              </li>
            ))
          )}
        </ul>
        <ul className="w-1/2">
          <h2 className="font-bold">Popular Searches</h2>
          {loadingPopular ? (
            <LoadingSkeletonContent />
          ) : (
            Array.isArray(allPopular) &&
            allPopular.map((popular) => (
              <li key={popular.id} className=" text-rose-500 list-disc py-2">
                <span className="text-gray-500 font-semibold">{popular.title}</span>
              </li>
            ))
          )}
        </ul>
        </div>

    </section>
  )
}
