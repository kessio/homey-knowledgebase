/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import axios from 'axios';

function NoResultsFound() {
  const [question, setQuestion] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [submissionSuccess, setSubmissionSuccess] = useState('')
  const apiurl = 'http://127.0.0.1:5000'

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
    setErrors({ ...errors, search_term: '' });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrors({ ...errors, email: '' });
  };

  const validateInput = () => {
    const errors = {};

    if (!question.trim()) {
      errors.search_term = 'Question is required';
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };


  const handleSubmit = async (e) => {
    try{
      e.preventDefault();
      const validationErrors = validateInput();
      if (Object.keys(validationErrors).length === 0) {
      const response = await axios.post(`${apiurl}/api/v1/questions`, {
        question: {
          email: email,
          search_term: question,
        },
      });
      console.log('Submission successful:', response.data);
      setQuestion('');
      setEmail('');
      setSubmissionSuccess("Your question has been submitted successfully")
    } else {
      setErrors(validationErrors);
    }
    }catch (error){console.log(error)}
    
  };

  return (
      <div className="bg-white rounded-lg py-4">
      <p className="font-semibold">No Results Found</p>
      <p className="px-3">Please fill out the form. We we will reply soon</p>
      <p className="text-green-500">{submissionSuccess}</p> 
      <form onSubmit={handleSubmit} className="mt-4 mx-10">
        <input
          type="text"
          id="search_term"
          name="search_term"
          placeholder=" Your Question"
          value={question}
          onChange={handleQuestionChange}
          className={`w-full px-4 py-2 mt-2 rounded-lg border ${
            errors.search_term ? 'border-red-500' : 'border-gray-300'
          } bg-white focus:outline-none focus:ring-2 focus:ring-rose-700`}
        />
       <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
          className={`w-full px-4 py-2 mt-2 rounded-lg border ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          } bg-white focus:outline-none focus:ring-2 focus:ring-rose-700`}
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