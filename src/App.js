import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
// Component
import Home from './component/layout/Home'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App