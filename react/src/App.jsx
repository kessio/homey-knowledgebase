/* eslint-disable no-unused-vars */
import react from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css'
import PageContainer from './components/PageContainer'

function App() {

  return (
    <Router>
      <switch>
        <Route exact path="/" component={PageContainer} />
      </switch>
    </Router>
   

  )
}

export default App
