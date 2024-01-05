import React, { useState,useEffect, useRef } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const timeoutRef = useRef(null);
  const apiUrl = ' http://127.0.0.1:5000'

  const fetchQuestions = async(query = '') => {
    try {
      const res = await axios.get(`${apiUrl}/api/v1/questions/search?query=${query}`);
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

  console.log(questions.length)

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
          <div className="bg-white rounded-lg">
            <p className="font-semibold">Results for {value}</p>
            <table className="w-full border-collapse">
              <tbody>
                {questions.map((question) => (
                  <tr key={question.id} className="border-b border-gray-300">
                    <td className="p-4 text-gray-700">
                      {question.search_term}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          value.length > 0 && (
            <div className="bg-white rounded-lg py-10">
              <p className="font-semibold py-4">No results Found</p>
              <button className="bg-rose-500 text-white px-4 py-2 rounded-lg">
                Ask Question
              </button>
            </div>
          )
        )}
      </div>
    )}






      
    </div>
  )};


export default SearchBar;
