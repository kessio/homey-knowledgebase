import React, {useState} from 'react';
import axios from 'axios';

function NoResultsFound() {
  const [question, setQuestion] = useState('');
  const [email, setEmail] = useState('');
  const apiurl = 'http://127.0.0.1:5000'

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    try{
      e.preventDefault();
      const response = await axios.post(`${apiurl}/api/v1/questions`, {
       search_term: question,
       email: email,
      });
      console.log('Submission successful:', response.data);
      setQuestion('');
      setEmail('');
    }catch (error){console.log(error)}
    
  };

  return (
      <div className="bg-white rounded-lg py-4">
      <p className="font-semibold">No results Found</p>
      <p className="px-3">Please fill out the form. We we will reply soon</p>
      <form onSubmit={handleSubmit} className="mt-4 mx-10">
        <input
          type="text"
          id="search_term"
          name="search_term"
          placeholder=" Your Question"
          value={question}
          onChange={handleQuestionChange}
          className="w-full py-2 mt-2 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-rose-700"
        />
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
          className="w-full px-4 py-2 mt-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-rose-700"
        />

        <button
          type="submit"
          className="mt-4 bg-rose-500 text-white px-4 py-2 rounded-lg"
        >
          Ask Question
        </button>
      </form>
    </div>
  )
}

export default NoResultsFound