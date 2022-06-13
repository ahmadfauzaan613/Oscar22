import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Wrapper from './components/Wrapper'
import LoginAdmin from './pages/Admin/LoginAdmin'
import Home from './pages/Home'
import Login from './pages/Login'

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
        <Route
          path="/login"
          element={
            <Wrapper isProtect={false}>
              <Login />
            </Wrapper>
          }
        ></Route>
        <Route
          path="/admin"
          element={
            <Wrapper isProtect={false}>
              <LoginAdmin />
            </Wrapper>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
