import React from 'react'

function Search() {
  return (
    
      <div className="rounded-lg p-4 mt-4 ">
        <input
          type="text"
          className="w-full px-4 py-4 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-700 bg-white"
          placeholder="How can I help you?"
        />
      </div>
  )
}

export default Search