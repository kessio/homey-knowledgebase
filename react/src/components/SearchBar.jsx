import React, { useState, useEffect } from 'react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchQuestionList = async () => {
    try {
      setIsLoading(true);

      // Replace with your API endpoint
      const apiUrl = 'http://127.0.0.1:5000/api/v1/questions'
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);

      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Trigger the fetchQuestionList function immediately on page load
    fetchQuestionList();
  }, []); 

  const handleSearch = () => {
    fetchQuestionList();
  };

  console.log(searchQuery.length)

  return (
    <div>
      <div className="rounded-lg p-4 mt-4">
        <input
          type="text"
          className="w-full px-4 py-4 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-700 bg-white"
          placeholder="How can I help you?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="mt-2 px-4 py-2 rounded-lg bg-rose-500 text-white"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className="mt-4">
        {isLoading ? (
          <p>Loading...</p>
        ) : searchResults.length > 0 ? (
          <table className="w-full border-collapse border border-gray-300">
            <tbody>
              {searchResults.map((result, index) => (
                <tr key={index} className="border-b border-gray-300">
                  <td className="p-4">{result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
