/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { renderResult } from './utils/searchHelpers'

function SearchResultsCard({questions,value}) {
  const apiurl = process.env.REACT_APP_API_URL;
  
  const handleClickSearch = async (id) => {
    const response = await axios.patch(`${apiurl}/api/v1/search_articles/count_search`, {
          id: id},
          {
            headers: {
              'Content-Type': 'application/json',
            },

    });
    window.location.reload();
  };

  return (
    <div className="bg-white rounded-lg">
            <p className="font-semibold">"Results for {value}"</p>
            <table className="w-full border-collapse">
              <tbody>
                {questions.map((question) => (
                  <tr key={question.id} className="border-b border-gray-300">
                    <td className="p-4 text-gray-700">
                    {renderResult(question.id, question.title, question.content, value, handleClickSearch)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  );
}

SearchResultsCard.propTypes = {
  questions: PropTypes.array.isRequired, 
  value: PropTypes.any.isRequired, 
};

export default SearchResultsCard