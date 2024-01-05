import React, { useState,useEffect, useRef } from 'react';
import axios from 'axios';
import SearchResultsCard from './SearchResultsCard';
import NoResultsFound from './NoResultsFound';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const timeoutRef = useRef(null);
  const apiUrl = 'http://127.0.0.1:5000'

  const fetchQuestions = async(query = '') => {
    try {
      const res = await axios.get(`${apiUrl}/api/v1/search_articles/search?query=${query}`);
      console.log(res.data)
      setQuestions(res.data);
    } catch (err) {
      console.log("Error Fetching Search",err);
    } finally {
      setLoading(false);
    }
  }

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setValue(value);

    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setLoading(true);
      fetchQuestions(value);
    }, 1000);
  }

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  },[]);

  return (
    <div>
      <div className="rounded-lg p-4 mt-4">
        <input
          type="text"
          className="w-full px-4 py-4 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-700 bg-white"
          placeholder="How can I help you?"
          value={value}
          onChange={handleSearchChange}
        />
      </div>
    
      {(loading && value.length > 0) ?  (
      <p className="bg-white rounded-lg font-semibold">Loading...</p>
    ) : (
      <div>
        {questions.length > 0 ? (
          <SearchResultsCard questions={questions} value={value} />
        ) : (
          value.length > 0 && (
            <NoResultsFound />
          )
        )}
      </div>
    )} 
    </div>
  )};


export default SearchBar;
