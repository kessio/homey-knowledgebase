import React from 'react'

function NoResultsFound() {
  return (
    <div className="bg-white rounded-lg py-10">
              <p className="font-semibold py-4">No results Found</p>
              <button className="bg-rose-500 text-white px-4 py-2 rounded-lg">
                Ask Question
              </button>
            </div>
  )
}

export default NoResultsFound