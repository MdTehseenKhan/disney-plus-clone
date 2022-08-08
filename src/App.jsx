import { Route, Routes } from "react-router-dom"

import Login from "./components/Login"

import "./App.css"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
