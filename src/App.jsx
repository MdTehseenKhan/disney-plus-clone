import { Route, Routes } from "react-router-dom"

import Login from "./components/Login"
import Header from "./components/Header"

import "./App.css"

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
