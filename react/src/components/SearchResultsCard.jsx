import React from 'react'
import { renderResult } from './utils/searchHelpers'

function SearchResultsCard({questions,value}) {
  return (
    <div className="bg-white rounded-lg">
            <p className="font-semibold">"Results for {value}"</p>
            <table className="w-full border-collapse">
              <tbody>
                {questions.map((question) => (
                  <tr key={question.id} className="border-b border-gray-300">
                    <td className="p-4 text-gray-700">
                    {renderResult(question.title, question.content, value)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  );
  
}

export default SearchResultsCard