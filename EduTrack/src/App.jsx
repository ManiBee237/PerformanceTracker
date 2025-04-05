import React from 'react'
import {Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/dashboard" element={<h1>Dashboard</h1>} />
        <Route path="/students" element={<h1>Students</h1>} />
      </Routes>
    </>
  )
}

export default App
