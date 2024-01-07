/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './index.css'
import PageContainer from './components/PageContainer';

function App() {

  return (
      <Routes>
        <Route exact path="/" element={<PageContainer />} />
      </Routes>
  )
}

export default App
