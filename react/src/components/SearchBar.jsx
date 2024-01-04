import {React, useState, useEffect} from 'react'

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setSearchResults(['Result 1', 'Result 2', 'Result 3']);
    }, 5000);

    return () => clearTimeout(timerId);
  }, [searchQuery]); 
  return (
    <>
      <div className="rounded-lg p-4 mt-4 ">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-4 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-700 bg-white"
          placeholder="How can I help you?"
        />
      </div>
        <div className="bg-white rounded-lg">
        {searchResults.length > 0 ? (
          <table className="w-full border-collapse border-none">
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
      </>
  )
}

export default SearchBar



