import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Wrapper from './components/Wrapper'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Wrapper isProtect={true}>
              <Home />
            </Wrapper>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
