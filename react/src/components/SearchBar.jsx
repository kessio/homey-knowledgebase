import React, { useState,useEffect, useRef } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const [questions, setQuestions] = useState([]);
  const timeoutRef = useRef(null);
  const apiUrl = ' http://127.0.0.1:5000'

  const fetchQuestions = async(query = '') => {
    try {
      const res = await axios.get(`${apiUrl}/api/v1/questions/search?query=${query}`);
      console.log(res.data)
      setQuestions(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setValue(value);

    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      fetchQuestions(value);
    }, 2000);
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

      <div className="mt-4">
      <table className="w-full border-collapse border border-gray-300">
    <tbody>
      {questions.map((question) => (
        <tr key={question.id} className="border-b border-gray-300">
          <td className="p-4 text-white">
            {question.search_term}
          </td>
        </tr>
      ))}
      {questions.length === 0 && (
        <tr>
          <td className="p-4">No results found</td>
        </tr>
      )}
    </tbody>
  </table>
          <p>No results found</p>
      </div>
    </div>
  );
};

export default SearchBar;
